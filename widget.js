/* qmc-widget.js */
(function () {
    function initChat() {
        // Apply Config
        const config = (typeof BOT_CONFIG !== 'undefined') ? BOT_CONFIG : {
            companyName: "Empresa",
            botName: "Asistente",
            themeColor: "#6563e7ff",
            avatarUrl: "",
            botWelcomeMessage: "Hola"
        };

        const data = (typeof CHAT_DATA !== 'undefined') ? CHAT_DATA : {};

        // Inyectar Estilos Variables
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            :root {
                --qmc-primary: ${config.themeColor};
                --qmc-user-msg: ${config.themeColor};
            }
        `;
        document.head.appendChild(styleTag);

        // Crear Estructura DOM
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'qmc-chat-widget';
        widgetContainer.id = 'qmc-chat-widget';

        widgetContainer.innerHTML = `
            <div class="qmc-chat-window" id="qmc-window">
                <div class="qmc-chat-header">
                    <img src="${config.avatarUrl}" alt="Logo">
                    <div class="qmc-chat-header-info">
                        <h3>${config.companyName}</h3>
                        <p>En línea</p>
                    </div>
                </div>
                <div class="qmc-chat-messages" id="qmc-messages"></div>
            </div>
            <div class="qmc-chat-fab" id="qmc-fab">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
        `;

        document.body.appendChild(widgetContainer);

        const fab = document.getElementById('qmc-fab');
        const windowElem = document.getElementById('qmc-window');
        const messagesElem = document.getElementById('qmc-messages');

        // Toggle Widget
        if (fab) {
            fab.addEventListener('click', () => {
                windowElem.classList.toggle('active');
            });
        }

        function addMessage(text, type = 'bot') {
            const msgDiv = document.createElement('div');
            msgDiv.className = `qmc-msg qmc-msg-${type}`;
            msgDiv.innerText = text;
            messagesElem.appendChild(msgDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
            return msgDiv;
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'qmc-msg qmc-msg-bot qmc-typing';
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            messagesElem.appendChild(typingDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
            return typingDiv;
        }

        function showOptions(options) {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'qmc-chat-options';

            options.forEach((opt, index) => {
                const btn = document.createElement('button');
                btn.className = 'qmc-option-btn';
                btn.innerText = opt.label;
                btn.style.animationDelay = `${index * 0.1}s`;
                btn.onclick = () => {
                    // Remover botones actuales
                    optionsDiv.remove();
                    // Agregar mensaje del usuario
                    addMessage(opt.label, 'user');

                    setTimeout(() => {
                        if (opt.url) {
                            window.open(opt.url, '_blank');
                            handleStep('start'); // Reiniciar o algo
                        } else {
                            handleStep(opt.next);
                        }
                    }, 600);
                };
                optionsDiv.appendChild(btn);
            });
            messagesElem.appendChild(optionsDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
        }

        function handleStep(stepId) {
            const step = data[stepId];
            if (!step) return;

            const typing = showTypingIndicator();

            setTimeout(() => {
                typing.remove();
                addMessage(step.message, 'bot');
                if (step.options) {
                    setTimeout(() => {
                        showOptions(step.options);
                    }, 400);
                }
            }, 1200); // More realistic typing delay
        }

        // Iniciar conversación
        handleStep('start');
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initChat();
    } else {
        document.addEventListener('DOMContentLoaded', initChat);
    }
})();
