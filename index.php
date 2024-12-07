<?php
session_start();

// Параметры подключения к базе данных
$host = 'localhost';
$dbname = 'chat_system';
$username = 'root';
$password = '';

// Создание подключения к базе данных
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения: " . $e->getMessage());
}

// Регистрация пользователя
if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (strlen($password) < 8) {
        $error = "Пароль должен быть не менее 8 символов.";
    } else {
        // Проверка уникальности логина
        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$username]);
        if ($stmt->rowCount() > 0) {
            $error = "Логин уже существует.";
        } else {
            // Хеширование пароля
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Добавление пользователя в базу данных
            $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
            $stmt->execute([$username, $hashed_password]);

            // Получение ID последнего добавленного пользователя
            $user_id = $pdo->lastInsertId();

            // Создание настроек чата для пользователя
            $stmt = $pdo->prepare("INSERT INTO chat_settings (user_id) VALUES (?)");
            $stmt->execute([$user_id]);

            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;
            header("Location: index.php");
            exit;
        }
    }
}

// Логин пользователя
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: index.php");
        exit;
    } else {
        $error = "Неверный логин или пароль.";
    }
}

// Выход пользователя
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit;
}

// Главная страница (если пользователь авторизован)
if (isset($_SESSION['user_id'])) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch();

    // Получаем настройки чата
    $stmt = $pdo->prepare("SELECT * FROM chat_settings WHERE user_id = ?");
    $stmt->execute([$_SESSION['user_id']]);
    $chat_settings = $stmt->fetch();
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Система чата</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px;
        }
        .news {
            color: red;
            font-size: 24px;
        }
        .quote {
            color: violet;
            font-size: 18px;
        }
        .chat {
            background-color: <?= isset($chat_settings['chat_theme']) ? $chat_settings['chat_theme'] : 'white'; ?>;
            padding: 10px;
            width: 60%;
            height: 300px;
            border: 1px solid #ccc;
            margin-top: 20px;
        }
        .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .sidebar {
            width: 20%;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .sidebar a {
            display: block;
            text-decoration: none;
            color: black;
            margin-bottom: 10px;
        }
        .form {
            margin-top: 20px;
        }
        .form input {
            padding: 10px;
            margin-bottom: 10px;
        }
        .form button {
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
        }
        .chat textarea {
            width: 100%;
            height: 150px;
            padding: 10px;
            resize: none;
        }
    </style>
</head>
<body>

<?php if (!isset($_SESSION['user_id'])): ?>

    <!-- Форма для регистрации -->
    <div class="form">
        <h2>Регистрация</h2>
        <form method="POST">
            <input type="text" name="username" placeholder="Логин" required><br>
            <input type="password" name="password" placeholder="Пароль" required><br>
            <button type="submit" name="register">Зарегистрироваться</button>
        </form>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
    </div>

    <!-- Форма для логина -->
    <div class="form">
        <h2>Вход</h2>
        <form method="POST">
            <input type="text" name="username" placeholder="Логин" required><br>
            <input type="password" name="password" placeholder="Пароль" required><br>
            <button type="submit" name="login">Войти</button>
        </form>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
    </div>

<?php else: ?>

    <!-- Главная страница -->
    <div class="container">
        <div class="sidebar">
            <h3>NEW</h3>
            <a href="index.php?logout=true">Выйти</a>
            <a href="profile.php">Личный кабинет</a>
        </div>

        <div>
            <div class="news">NEW</div>

            <div class="quote">Цитата дня: "Будь собой!"</div>

            <div class="chat">
                <div>
                    <img src="avatars/<?= $user['avatar'] ?? 'default-avatar.png'; ?>" alt="Avatar" class="avatar">
                    <span><?= $user['username']; ?></span>
                </div>
                <textarea placeholder="Введите сообщение"></textarea>
            </div>
        </div>
    </div>

<?php endif; ?>

</body>
</html>
