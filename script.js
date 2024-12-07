document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    if (password.length < 8) {
      alert("Пароль должен быть не менее 8 символов!");
      return;
    }
  
    // Сохраняем в локальном хранилище или на сервере
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    // Переход на главную страницу
    window.location.href = '/home';
  });
  
  document.getElementById('sendMessage').addEventListener('click', function() {
    let message = document.getElementById('messageInput').value;
    let messagesDiv = document.getElementById('messages');
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
  });
  