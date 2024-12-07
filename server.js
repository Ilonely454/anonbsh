const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Здесь будет храниться база данных пользователей, на практике лучше использовать MongoDB
let users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.some(user => user.username === username)) {
    return res.status(400).send('Пользователь уже существует');
  }
  if (password.length < 8) {
    return res.status(400).send('Пароль должен быть не менее 8 символов');
  }
  users.push({ username, password });
  res.status(200).send('Регистрация успешна');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
