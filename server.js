const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Подключение к базе данных
mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const User = require('./models/userModel');

// Миддлвары
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Роуты
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (password.length < 8) {
        return res.status(400).send('Пароль должен быть не менее 8 символов');
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).send('Этот логин уже занят');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.redirect('/');
});

// WebSocket для чата
let usersInChat = [];

io.on('connection', (socket) => {
    console.log('Новый пользователь подключился');

    socket.on('joinChat', (username) => {
        usersInChat.push({ username, socketId: socket.id });
        io.emit('userJoined', username);
    });

    socket.on('sendMessage', (message, username) => {
        io.emit('receiveMessage', { message, username });
    });

    socket.on('disconnect', () => {
        const user = usersInChat.find(u => u.socketId === socket.id);
        if (user) {
            io.emit('userLeft', user.username);
            usersInChat = usersInChat.filter(u => u.socketId !== socket.id);
        }
    });
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
