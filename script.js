// Локальное хранилище для пользователей и их данных
let users = JSON.parse(localStorage.getItem('users')) || [];

// Функция регистрации
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        document.getElementById('error').textContent = "Пароль должен быть не менее 8 символов!";
        return;
    }

    // Проверка, чтобы логин не был уже зарегистрирован
    if (users.some(user => user.username === username)) {
        document.getElementById('error').textContent = "Этот логин уже занят!";
        return;
    }

    // Сохранение пользователя в локальное хранилище
    users.push({ 
        username, 
        password, 
        avatar: '', 
        chatBackground: '', 
        role: 'user', 
        messages: [] 
    });
    localStorage.setItem('users', JSON.stringify(users));

    // Переход на главную страницу
    localStorage.setItem('currentUser', username);
    showMainPage();
});

// Переход на главную страницу
function showMainPage() {
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    loadChat();
}

// Переход в личный кабинет
function goToProfile() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
}

// Назад на главную
function backToMain() {
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
}

// Получение текущего пользователя
function getCurrentUser() {
    const username = localStorage.getItem('currentUser');
    return users.find(user => user.username === username);
}

// Отправка сообщений в чат
function sendMessage() {
    const message = document.getElementById('chatMessage').value;
    if (message.trim() === '') return;

    const user = getCurrentUser();
    const chatDiv = document.getElementById('chat');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.style.color = getRandomColor();

    // Проверка наличия аватара у пользователя
    const avatarImg = user.avatar ? `<img src="${user.avatar}" class="avatar-img" />` : '';
    messageDiv.innerHTML = `${avatarImg}<strong>${user.username}</strong>: ${message}`;
    chatDiv.appendChild(messageDiv);

    // Сохранение сообщения в истории пользователя
    user.messages.push({ username: user.username, message });
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('chatMessage').value = '';
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

// Смена аватара
function changeAvatar(event) {
    const user = getCurrentUser();
    const reader = new FileReader();

    reader.onload = function(e) {
        user.avatar = e.target.result;
        localStorage.setItem('users', JSON.stringify(users));
    }

    reader.readAsDataURL(event.target.files[0]);
}

// Смена фона чата
function changeChatBackground(event) {
    const user = getCurrentUser();
    const reader = new FileReader();

    reader.onload = function(e) {
        user.chatBackground = e.target.result;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('chat').style.backgroundImage = `url(${e.target.result})`;
    }

    reader.readAsDataURL(event.target.files[0]);
}

// Генерация случайного цвета для ника
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Загрузка чата
function loadChat() {
    const chatDiv = document.getElementById('chat');
    const user = getCurrentUser();

    if (user.chatBackground) {
        chatDiv.style.backgroundImage = `url(${user.chatBackground})`;
    }

    // Отображение сообщений
    user.messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.style.color = getRandomColor();
        messageDiv.innerHTML = `<strong>${msg.username}</strong>: ${msg.message}`;
        chatDiv.appendChild(messageDiv);
    });
}
