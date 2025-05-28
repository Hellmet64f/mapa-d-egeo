<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resenha do Raulzito</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: url('https://i.imgur.com/NLwznHh.jpeg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
        }

        .overlay {
            background: rgba(0, 0, 0, 0.5) url('https://www.transparenttextures.com/patterns/rice-paper.png');
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        header {
            background: linear-gradient(90deg, #1E90FF, #FF69B4);
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            position: relative;
            z-index: 2;
        }

        header h1 {
            font-size: 2.5em;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            text-shadow: 0 0 10px #FF69B4;
        }

        .tabs {
            display: flex;
            background: linear-gradient(90deg, rgba(30, 144, 255, 0.9), rgba(255, 105, 180, 0.9));
            padding: 10px 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            position: sticky;
            top: 0;
            z-index: 1;
        }

        .tab-button {
            padding: 10px 20px;
            font-size: 1.1em;
            color: #fff;
            background: transparent;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            margin: 0 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .tab-button:hover {
            color: #C71585;
            transform: translateY(-2px);
        }

        .tab-button.active {
            color: #fff;
            font-weight: bold;
        }

        .tab-button.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: #C71585;
            animation: tabHighlight 0.3s ease forwards;
        }

        @keyframes tabHighlight {
            from { width: 0; }
            to { width: 100%; }
        }

        .tab-content {
            flex: 1;
            padding: 40px;
            text-align: center;
            display: none;
            animation: fadeIn 0.5s ease-in-out;
        }

        .tab-content.active {
            display: block;
        }

        .tab-content h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #FF69B4;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .tab-content p {
            font-size: 1.2em;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
            background: rgba(30, 144, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
        }

        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #FF69B4;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
        }

        .profile-img:hover {
            transform: scale(1.1);
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background: #FF69B4;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .btn:hover {
            background: #C71585;
            transform: scale(1.1);
        }

        footer {
            background: #1E90FF;
            padding: 15px;
            text-align: center;
            color: #fff;
            border-top: 2px solid rgba(255, 105, 180, 0.5);
            margin-top: auto;
        }

        footer p {
            font-size: 1em;
            animation: fadeIn 2s ease-in-out;
        }

        /* Estilização das seções sobrepostas (galeria, prêmio especial, etc.) */
        .overlay-section {
            display: none;
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100% - 60px);
            z-index: 1000;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            overflow-y: auto;
            background: rgba(0, 0, 0, 0.7);
        }

        .overlay-section.active {
            display: flex;
        }

        .overlay-section header {
            text-align: center;
            padding: 20px;
            background: rgba(255, 105, 180, 0.8);
            border-radius: 10px;
            animation: pulse 3s infinite;
        }

        .overlay-section h1 {
            font-size: 2.5em;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px;
            min-height: 800px;
        }

        .gallery img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            opacity: 0;
            transform: translateY(50px) rotate(0deg);
            transition: all 0.5s ease;
        }

        .gallery img.active {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }

        .gallery img:hover {
            transform: scale(1.05) rotate(5deg);
            filter: brightness(1.2);
        }

        .gallery img:nth-child(1) { transition-delay: 0.2s; }
        .gallery img:nth-child(2) { transition-delay: 0.4s; }
        .gallery img:nth-child(3) { transition-delay: 0.6s; }

        .special-img {
            width: 400px;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            border: 5px solid #fff;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
            position: relative;
            animation: float 3s ease-in-out infinite;
        }

        .special-img:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
        }

        .special-img::before,
        .special-img::after {
            content: '♥';
            position: absolute;
            color: #FF1493;
            font-size: 2em;
            animation: heartFloat 4s infinite linear, rotateHeart 6s infinite linear;
        }

        .special-img::before {
            top: -20px;
            left: 20px;
            animation-delay: 0s;
        }

        .special-img::after {
            bottom: -20px;
            right: 20px;
            animation-delay: 2s;
        }

        .content {
            padding: 20px;
            background: rgba(30, 144, 255, 0.8);
            border-radius: 10px;
            max-width: 600px;
            text-align: center;
            margin-top: 20px;
            animation: fadeInRandom 2s ease-in-out;
        }

        .content iframe {
            width: 100%;
            max-width: 560px;
            height: 315px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s;
        }

        .content iframe:hover {
            transform: scale(1.02);
        }

        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: #1E90FF;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
            animation: bounce 1.5s infinite;
        }

        .close-btn:hover {
            background: #0066CC;
            transform: scale(1.1);
        }

        /* Animações */
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes fadeInRandom {
            0% { opacity: 0; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        @keyframes slideIn {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }

        @keyframes heartFloat {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-20px) rotate(10deg); opacity: 0.5; }
            100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }

        @keyframes rotateHeart {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        /* Partículas aleatórias */
        .overlay-section::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="' + (Math.random() * 100) + '" cy="' + (Math.random() * 100) + '" r="1" fill="rgba(255, 105, 180, 0.7)" /><circle cx="' + (Math.random() * 100) + '" cy="' + (Math.random() * 100) + '" r="1" fill="rgba(30, 144, 255, 0.7)" /></svg>') repeat;
            animation: particleMove 10s linear infinite;
            pointer-events: none;
            opacity: 0.5;
        }

        @keyframes particleMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }

        /* Responsividade */
        @media (max-width: 768px) {
            header h1 { font-size: 2em; }
            .tabs {
                flex-direction: column;
                padding: 10px;
            }
            .tab-button {
                margin: 5px 0;
                font-size: 1em;
            }
            .tab-content, .gallery img, .special-img, .content, .content iframe, .profile-img {
                width: 100%;
                max-width: 250px;
                height: auto;
            }
            .gallery { min-height: 600px; }
            .overlay-section { top: 50px; height: calc(100% - 50px); }
        }
    </style>
</head>
<body>
    <div class="overlay">
        <header>
            <h1>Resenha do Raulzito</h1>
        </header>
        <div class="tabs">
            <button class="tab-button active" onclick="openTab('inicio')">Início</button>
            <button class="tab-button" onclick="openTab('sobre')">Sobre</button>
            <button class="tab-button" onclick="openTab('contato')">Contato</button>
            <button class="tab-button" onclick="openOverlay('premios')">Prêmios</button>
            <button class="tab-button" onclick="openOverlay('premio-especial')">Prêmio Especial</button>
            <button class="tab-button" onclick="openTab('criador')">Criador</button>
        </div>

        <div class="tab-content active" id="inicio">
            <h2>Bem-vindo à Resenha do Raulzito!</h2>
            <p>Aqui você encontra as melhores resenhas, histórias e conteúdos incríveis com a vibe única do Raulzito! Fique por dentro de tudo e junte-se à nossa comunidade.</p>
            <a href="#" class="btn" onclick="openOverlay('premios')">Prêmios que o Raulzito ganhou</a>
        </div>
        <div class="tab-content" id="sobre">
            <h2>Sobre o Raulzito</h2>
            <div class="content">
                <iframe src="https://www.youtube.com/embed/lXw220NyjXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="tab-content" id="contato">
            <h2>Contato</h2>
            <div class="content">
                <p>Entre em contato conosco para mais informações ou sugestões! Nosso e-mail: resenharaulzito@example.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </div>
        </div>
        <div class="tab-content" id="criador">
            <h2>Sobre o Criador</h2>
            <img src="https://i.imgur.com/JDr0Hnc.jpeg" alt="Perfil do Criador" class="profile-img" style="margin-top: 20px;">
            <p>Conheça o criador por trás da Resenha do Raulzito! Passionate about sharing unique stories and insights.</p>
        </div>

        <div class="overlay-section" id="premios">
            <header>
                <h1>Prêmios do Raulzito</h1>
            </header>
            <a href="#" class="close-btn" onclick="closeOverlay('premios')">Fechar</a>
            <div class="gallery">
                <img src="https://i.imgur.com/6kbbiVj.jpeg" alt="Prêmio 1">
                <img src="https://i.imgur.com/JDr0Hnc.jpeg" alt="Prêmio 2">
                <img src="https://i.imgur.com/ntlkJ6l.jpeg" alt="Prêmio 3">
            </div>
            <footer>
                <p>© 2025 Resenha do Raulzito. Todos os direitos reservados.</p>
            </footer>
        </div>

        <div class="overlay-section" id="premio-especial">
            <header>
                <h1>Prêmio Especial</h1>
            </header>
            <a href="#" class="close-btn" onclick="closeOverlay('premio-especial')">Fechar</a>
            <div class="special-img-container">
                <img src="https://i.imgur.com/ZToZaIG.jpeg" alt="Prêmio Especial" class="special-img">
            </div>
            <footer>
                <p>© 2025 Resenha do Raulzito. Todos os direitos reservados.</p>
            </footer>
        </div>

        <footer>
            <p>© 2025 Resenha do Raulzito. Última atualização: 28/05/2025 16:00 (BRT)</p>
        </footer>
    </div>

    <script>
        function openTab(tabId) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));

            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => button.classList.remove('active'));

            document.getElementById(tabId).classList.add('active');
            document.querySelector(`.tab-button[onclick="openTab('${tabId}')"]`).classList.add('active');
        }

        function openOverlay(sectionId) {
            const overlay = document.getElementById(sectionId);
            overlay.classList.add('active');
            const images = overlay.querySelectorAll('.gallery img');
            images.forEach(img => img.classList.add('active'));
        }

        function closeOverlay(sectionId) {
            document.getElementById(sectionId).classList.remove('active');
            const images = document.getElementById(sectionId).querySelectorAll('.gallery img');
            images.forEach(img => img.classList.remove('active'));
        }

        window.onload = () => {
            openTab('inicio');
            createParticles();
        };

        function createParticles() {
            const sections = document.querySelectorAll('.overlay-section');
            sections.forEach(section => {
                for (let i = 0; i < 10; i++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'absolute';
                    particle.style.width = '4px';
                    particle.style.height = '4px';
                    particle.style.background = i % 2 ? 'rgba(30, 144, 255, 0.6)' : 'rgba(255, 105, 180, 0.6)';
                    particle.style.borderRadius = '50%';
                    particle.style.left = `${Math.random() * 90}vw`;
                    particle.style.top = `${Math.random() * 90}vh`;
                    particle.style.animation = `particleMove ${Math.random() * 3 + 3}s infinite linear`;
                    section.appendChild(particle);
                }
            });
        }
    </script>
</body>
</html>
