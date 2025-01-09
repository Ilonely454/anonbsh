<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин волейбольных мячей</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            transition: background-color 0.3s, color 0.3s, font-family 0.3s;
        }
        header {
            background: linear-gradient(90deg, #F4CA16, #F07427);
            color: white;
            padding: 20px;
            text-align: center;
            transition: background 0.3s;
        }
        nav {
            background-color: #F07427;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-size: 16px;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .cart-button {
            display: flex;
            align-items: center;
            color: white;
            font-size: 18px;
            cursor: pointer;
        }
        .cart-button .fas {
            margin-right: 10px;
        }
        .cart-button span {
            background-color: #F4CA16;
            border-radius: 50%;
            padding: 5px 10px;
            font-weight: bold;
        }
        .container {
            padding: 20px;
        }
        .product {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
        }
        .product-item {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 300px;
            text-align: center;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .product-item img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        .product-item h3 {
            color: #333;
            margin: 15px 0;
        }
        .product-item p {
            color: #777;
        }
        .product-item button {
            background: linear-gradient(45deg, #6DCC44, #218E33);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        .product-item button:hover {
            background-color: #218E33;
        }
        footer {
            background-color: #6DCC44;
            color: white;
            text-align: center;
            padding: 10px 0;
            margin-top: 20px;
        }
        footer a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
        }
        footer a:hover {
            text-decoration: underline;
        }
        #popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
        }
        #cart-popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
            max-width: 90%;
            max-height: 80%;
            overflow-y: auto;
        }
        #cart-popup ul {
            list-style: none;
            padding: 0;
        }
        #cart-popup li {
            margin-bottom: 10px;
        }
        #settings-panel {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 15px;
            border-radius: 10px;
            display: none;
            z-index: 1001;
        }
        #settings-panel h3 {
            margin-top: 0;
        }
        #settings-panel select {
            margin-bottom: 10px;
            padding: 5px;
            background-color: #333;
            color: white;
            border: 1px solid #555;
        }
        .settings-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #6DCC44;
            color: white;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            z-index: 1001;
        }
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: center;
            }
            .product {
                flex-direction: column;
                align-items: center;
            }
            .product-item {
                width: 90%;
            }
        }
    </style>
    <script>
        let cartCount = 0;
        let cartItems = [];

        // Функция для изменения шрифта
        function changeFont(font) {
            document.body.style.fontFamily = font;
        }

        // Функция для изменения темы
        function changeTheme(theme) {
            const header = document.querySelector('header');
            const nav = document.querySelector('nav');
            const body = document.body;
            if (theme === 'theme1') {
                body.style.backgroundColor = '#f4f4f9';
                header.style.background = 'linear-gradient(90deg, #F4CA16, #F07427)';
                nav.style.backgroundColor = '#F07427';
            } else if (theme === 'theme2') {
                body.style.backgroundColor = '#333';
                header.style.background = 'linear-gradient(90deg, #FF6347, #FF4500)';
                nav.style.backgroundColor = '#FF4500';
            } else if (theme === 'theme3') {
                body.style.backgroundColor = '#282c34';
                header.style.background = 'linear-gradient(90deg, #1e90ff, #4682b4)';
                nav.style.backgroundColor = '#4682b4';
            } else if (theme === 'theme4') {
                body.style.backgroundColor = '#fff8e1';
                header.style.background = 'linear-gradient(90deg, #8e44ad, #9b59b6)';
                nav.style.backgroundColor = '#9b59b6';
            } else if (theme === 'theme5') {
                body.style.backgroundColor = '#e0f7fa';
                header.style.background = 'linear-gradient(90deg, #26a69a, #00796b)';
                nav.style.backgroundColor = '#00796b';
            }
        }

        // Открытие панели настроек
        function openSettings() {
            document.getElementById('settings-panel').style.display = 'block';
        }

        // Закрытие панели настроек
        function closeSettings() {
            document.getElementById('settings-panel').style.display = 'none';
        }

        function showPopup() {
            cartCount++;
            document.getElementById('cart-count').innerText = cartCount;
            const popup = document.getElementById('popup');
            popup.style.display = 'block';
            setTimeout(() => popup.style.display = 'none', 2000);
        }

        function addToCart(productName, productPrice) {
            cartCount++;
            document.getElementById('cart-count').innerText = cartCount;

            // Add item to cart
            cartItems.push({ name: productName, price: productPrice });

            // Show the cart popup with items
            updateCartPopup();
        }

        function updateCartPopup() {
            const cartPopup = document.getElementById('cart-popup');
            const cartList = document.getElementById('cart-list');
            cartList.innerHTML = ''; // Clear current list

            cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - ${item.price} тг`;
                cartList.appendChild(listItem);
            });

            // Show the cart popup
            cartPopup.style.display = 'block';
        }

        function closeCartPopup() {
            document.getElementById('cart-popup').style.display = 'none';
        }

        function checkout() {
            alert('Спасибо за заказ! Мы свяжемся с вами для подтверждения.');
            cartItems = [];
            cartCount = 0;
            document.getElementById('cart-count').innerText = cartCount;
            closeCartPopup();
        }
    </script>
</head>
<body>
    <header>
        <h1>Магазин волейбольных мячей</h1>
        <p>Все для игры в волейбол</p>
    </header>
    <nav>
        <div>
            <a href="#home">Главная</a>
            <a href="#products">Товары</a>
            <a href="#about">О нас</a>
            <a href="#contact">Контакты</a>
        </div>
        <div class="cart-button" onclick="updateCartPopup()">
            <i class="fas fa-shopping-cart"></i>
            <span id="cart-count">0</span>
        </div>
    </nav>
    <div class="container" id="home">
        <h2>Добро пожаловать в наш магазин!</h2>
        <p>У нас вы найдете лучшие волейбольные мячи по доступным ценам.</p>
    </div>
    <div class="container" id="products">
        <h2>Наши товары</h2>
        <div class="product">
            <div class="product-item">
                <img src="https://images.satu.kz/113948869_myach-volejbolnyj-mikasa.jpg">
                <h3>Волейбольный мяч Mikasa</h3>
                <p>Цена: 69 540 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Mikasa', '69 540')">Купить</button>
            </div>
            <div class="product-item">
                <img src="https://ir-3.ozone.ru/s3/multimedia-4/c1000/6707651296.jpg">
                <h3>Волейбольный мяч Molten</h3>
                <p>Цена: 18 000  тг.</p>
                <button onclick="addToCart('Волейбольный мяч Molten', '18 000')">Купить</button>
            </div>
            <div class="product-item">
                <img src="https://limpopo.kz/image/cache//catalog/d_o_p/easyphoto/168535/wth00020xb-3-1000x1000.jpg.webp">
                <h3>Волейбольный мяч Wilson</h3>
                <p>Цена: 15 000 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Wilson', '15 000')">Купить</button>
            </div>
            <div class="product-item">
                <img src="https://spalding.com.ua/wp-content/uploads/2021/12/72198z-cr.jpg">
                <h3>Волейбольный мяч Spalding</h3>
                <p>Цена: 12 000 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Spalding', '12 000')">Купить</button>
            </div>
            </div>
            <div class="product-item">
                <img src="https://rizesport.uz/d/vb_adidas_softset_3.jpg">
                <h3>Волейбольный мяч Adidas</h3>
                <p>Цена: 15 000 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Adidas', '15 000')">Купить</button>
            </div>
            <div class="product-item">
                <img src="https://megasport.kz/upload/iblock/832/pf5m942r7kp9j32a791g98gurh1hwxab.jpg">
                <h3>Волейбольный мяч Torres</h3>
                <p>Цена: 6 822 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Torres', '6 822')">Купить</button>
            </div>
            <div class="product-item">
                <img src="https://images.prom.ua/5112798361_w640_h640_myach-volejbolnij-gala.jpg">
                <h3>Волейбольный мяч Gala</h3>
                <p>Цена: 33 600 тг.</p>
                <button onclick="addToCart('Волейбольный мяч Gala', '33 600')">Купить</button>
        </div>
    </div>
    <div class="container" id="about">
        <h2>О нас</h2>
        <p>Мы занимаемся продажей качественных волейбольных мячей более 10 лет.</p>
    </div>
    <div class="container" id="contact">
        <h2>Контакты</h2>
        <p><i class="fas fa-envelope"></i> Email: volleyballshop.ru</p>
        <p><i class="fas fa-phone"></i> Телефон: +7 705 321 7890</p>
    </div>
    <footer>
        <p>&copy; 2025 Магазин волейбольных мячей. Все права защищены.</p>
        <p>Следите за нами: 
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </p>
    </footer>

    <!-- Панель настроек -->
    <div id="settings-panel">
        <h3>Настройки</h3>
        <label for="font-select">Выберите шрифт:</label>
        <select id="font-select" onchange="changeFont(this.value)">
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Courier New', monospace">Courier New</option>
            <option value="'Times New Roman', serif">Times New Roman</option>        </select>
        <br>
        <label for="theme-select">Выберите тему:</label>
        <select id="theme-select" onchange="changeTheme(this.value)">
            <option value="theme1">Тема 1</option>
            <option value="theme2">Тема 2</option>
            <option value="theme3">Тема 3</option>
            <option value="theme4">Тема 4</option>
            <option value="theme5">Тема 5</option>
        </select>
        <br>
        <button onclick="closeSettings()">Закрыть</button>
    </div>

    <div class="settings-btn" onclick="openSettings()">⚙️</div>
    <div id="popup">Товар добавлен в корзину!</div>
</body>
</html>
