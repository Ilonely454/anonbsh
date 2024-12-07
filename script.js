// Проверка на существование зарегистрированных пользователей в локальном хранилище
function loadUser() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        showChatPage(storedUser);
    } else {
        showRegistrationPage();
    }
}

// Отображение страницы регистрации
function showRegistrationPage() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('chatPage').style.display = 'none';
}

// Отображение страницы чата
function showChatPage(user) {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('chatPage').style.display = 'block';
    document.getElementById('userSettings').innerHTML = `
        <h3>Личный кабинет</h3>
        <p><strong>Имя:</strong> ${user.username}</p>
        <button id="changeAvatarBtn">Изменить аватар</button>
        <button id="changeWallpaperBtn">Изменить обои</button>
        <button id="logoutBtn">Выйти</button>
    `;
    document.getElementById('changeAvatarBtn').addEventListener('click', changeAvatar);
    document.getElementById('changeWallpaperBtn').addEventListener('click', changeWallpaper);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    loadMessages();
}

// Логика регистрации пользователя
document.getElementById('registerBtn').addEventListener('click', function() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    if (username && password.length >= 8) {
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        showChatPage(user);
    } else {
        document.getElementById('errorMessage').textContent = 'Пароль должен быть не менее 8 символов!';
    }
});

// Функция для выхода
function logout() {
    localStorage.removeItem('user');
    showRegistrationPage();
}

// Чат: получение сообщений из локального хранилища
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const chatDiv = document.getElementById('chat');
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${msg.username}</strong>: ${msg.message}`;
        chatDiv.appendChild(messageDiv);
    });
}

// Отправка сообщения
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const message = document.getElementById('chatMessage').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (message && user) {
        const messageData = { username: user.username, message };
        saveMessage(messageData);
        document.getElementById('chatMessage').value = '';
    }
});

// Сохранение сообщения в локальном хранилище
function saveMessage(messageData) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(messageData);
    localStorage.setItem('messages', JSON.stringify(messages));
    loadMessages();  // Обновляем чат
}

// Функции для смены аватара и обоев
function changeAvatar() {
    const newAvatar = prompt("Введите ссылку на новый аватар:");
    const user = JSON.parse(localStorage.getItem('user'));
    user.avatar = newAvatar;
    localStorage.setItem('user', JSON.stringify(user));
    alert('Аватар изменен!');
}

function changeWallpaper() {
    const newWallpaper = prompt("Введите ссылку на новые обои:");
    document.body.style.backgroundImage = `url(${newWallpaper})`;
    alert('Обои изменены!');
}

// Начинаем работу с загрузки страницы
loadUser();
