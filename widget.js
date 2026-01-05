(function () {
    const scriptSrc = document.currentScript ? document.currentScript.src : '';
    const baseUrl = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);

    function loadDependencies() {
        if (!document.getElementById('qmc-font-awesome')) {
            const faLink = document.createElement('link');
            faLink.id = 'qmc-font-awesome';
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(faLink);
        }

        if (!document.getElementById('qmc-styles')) {
            const styleLink = document.createElement('link');
            styleLink.id = 'qmc-styles';
            styleLink.rel = 'stylesheet';
            styleLink.href = baseUrl + 'styles.css';
            document.head.appendChild(styleLink);
        }
    }

    function initChat() {
        loadDependencies();

        const config = (typeof BOT_CONFIG !== 'undefined') ? BOT_CONFIG : {
            companyName: "QMC",
            botName: "Asistente",
            themeColor: "#06b6d4",
            avatarUrl: baseUrl + "qmc_logo.jpg",
            botWelcomeMessage: "Hola"
        };

        const data = (typeof CHAT_DATA !== 'undefined') ? CHAT_DATA : {
            "start": {
                message: "¡Hola! 👋 Soy el asistente de QMC. ¿En qué puedo ayudarte?",
                options: [{ label: "Desarrollo Web", next: "start" }]
            }
        };

        const colorStyle = document.createElement('style');
        colorStyle.innerHTML = `:root { --qmc-primary: ${config.themeColor || '#06b6d4'}; }`;
        document.head.appendChild(colorStyle);

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
                <i class="fas fa-robot"></i>
            </button>
        `;

        document.body.appendChild(widgetContainer);

        const fab = document.getElementById('qmc-fab');
        const windowElem = document.getElementById('qmc-window');
        const messagesElem = document.getElementById('qmc-messages');

        fab.addEventListener('click', () => {
            windowElem.classList.toggle('active');
            const icon = fab.querySelector('i');
            icon.className = windowElem.classList.contains('active') ? 'fas fa-times' : 'fas fa-robot';
        });

        function addMessage(text, type = 'bot') {
            const msgDiv = document.createElement('div');
            msgDiv.className = `qmc-message ${type}`;
            msgDiv.innerHTML = text;
            messagesElem.appendChild(msgDiv);
            messagesElem.scrollTop = messagesElem.scrollHeight;
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

            options.forEach((opt) => {
                const btn = document.createElement('button');
                btn.className = 'qmc-option-btn';
                btn.innerText = opt.label;
                btn.onclick = () => {
                    optionsContainer.remove();
                    addMessage(opt.label, 'user');
                    setTimeout(() => {
                        if (opt.url) {
                            window.open(opt.url, '_blank');
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
            setTimeout(() => {
                typing.remove();
                addMessage(step.message, 'bot');
                if (step.options) {
                    setTimeout(() => showOptions(step.options), 400);
                }
            }, 1000);
        }

        handleStep('start');
    }

    if (document.readyState === 'complete') {
        initChat();
    } else {
        window.addEventListener('load', initChat);
    }
})();