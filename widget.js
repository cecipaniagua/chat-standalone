/* qmc-widget.js - Versión Corregida y Sincronizada */
(function () {
    function initChat() {
        // Cargar Configuración
        const config = (typeof BOT_CONFIG !== 'undefined') ? BOT_CONFIG : {
            companyName: "QMC",
            botName: "Asistente",
            themeColor: "#06b6d4",
            avatarUrl: "",
            botWelcomeMessage: "Hola"
        };

        const data = (typeof CHAT_DATA !== 'undefined') ? CHAT_DATA : {};

        // Inyectar variables de color dinámicas basadas en la config
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            :root {
                --qmc-primary: ${config.themeColor};
            }
        `;
        document.head.appendChild(styleTag);

        // Crear Estructura DOM del Widget
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'qmc-chat-widget';
        widgetContainer.id = 'qmc-chat-widget';

        widgetContainer.innerHTML = `
            <div class="qmc-chat-window" id="qmc-window">
                <div class="qmc-chat-header">
                    <img src="${config.avatarUrl}" alt="Logo" onerror="this.src='https://ui-avatars.com/api/?name=QMC&background=06b6d4&color=fff'">
                    <div class="qmc-chat-header-info">
                        <h3>${config.companyName}</h3>
                        <p>Asistente Virtual</p>
                    </div>
                </div>
                <div class="qmc-chat-messages" id="qmc-messages"></div>
            </div>
            <button class="qmc-chat-fab" id="qmc-fab">
                <i class="fas fa-comments"></i>
            </button>
        `;

        document.body.appendChild(widgetContainer);

        const fab = document.getElementById('qmc-fab');
        const windowElem = document.getElementById('qmc-window');
        const messagesElem = document.getElementById('qmc-messages');

        // Control de Apertura/Cierre
        fab.addEventListener('click', () => {
            windowElem.classList.toggle('active');
            // Cambiar icono del botón
            const icon = fab.querySelector('i');
            if (windowElem.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-comments';
            }
        });

        function addMessage(text, type = 'bot') {
            const msgDiv = document.createElement('div');
            // Usamos las clases corregidas: 'qmc-message bot' o 'qmc-message user'
            msgDiv.className = `qmc-message ${type}`;
            msgDiv.innerHTML = text; // Permite usar <br> o emojis
            messagesElem.appendChild(msgDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
            return msgDiv;
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'qmc-typing';
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            messagesElem.appendChild(typingDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
            return typingDiv;
        }

        function showOptions(options) {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'qmc-options-container';

            options.forEach((opt, index) => {
                const btn = document.createElement('button');
                btn.className = 'qmc-option-btn';
                btn.innerText = opt.label;
                
                btn.onclick = () => {
                    // Quitar los botones al elegir uno
                    optionsContainer.remove();
                    // Mostrar elección del usuario
                    addMessage(opt.label, 'user');

                    // Pequeña espera para la respuesta del bot
                    setTimeout(() => {
                        if (opt.url) {
                            window.open(opt.url, '_blank');
                            // Opcional: Volver al inicio después de abrir enlace
                            handleStep('start');
                        } else {
                            handleStep(opt.next);
                        }
                    }, 500);
                };
                optionsContainer.appendChild(btn);
            });

            messagesElem.appendChild(optionsContainer);
            messagesElem.scrollTop = messagesElem.scrollHeight;
        }

        function handleStep(stepId) {
            const step = data[stepId];
            if (!step) return;

            const typing = showTypingIndicator();

            // Tiempo de "escritura" proporcional al texto o fijo
            setTimeout(() => {
                typing.remove();
                addMessage(step.message, 'bot');
                
                if (step.options && step.options.length > 0) {
                    setTimeout(() => {
                        showOptions(step.options);
                    }, 400);
                }
            }, 1000);
        }

        // Iniciar la conversación automáticamente al cargar
        handleStep('start');
    }

    // Inicialización segura
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initChat();
    } else {
        document.addEventListener('DOMContentLoaded', initChat);
    }
})
();