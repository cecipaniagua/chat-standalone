const BOT_CONFIG = {
    companyName: "QMC Desarrollos Tecnológicos",
    botName: "QMC Assistant",
    themeColor: "#0027a8ff", // Cyan tecnológico (matching logo)
    accentColor: "#001f3f", // Navy blue (matching logo background)
    textColor: "#ffffff", // White text for dark theme
    botWelcomeMessage: "¡Hola! Bienvenido a QMC Desarrollos Tecnológicos. ¿En qué podemos ayudarte hoy?",
    avatarUrl: "./img/qmc_logo.jpg", // New user logo
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
};

// Export if using modules, but for simple embed we might just use global
if (typeof module !== 'undefined') {
    module.exports = BOT_CONFIG;
}
