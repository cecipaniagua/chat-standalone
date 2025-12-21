// CHAT_DATA - Estructura completa para QMC Desarrollos Tecnológicos
const CHAT_DATA = {
    // 🏠 PUNTO DE INICIO
    "start": {
        message: "¡Hola! 👋 Bienvenido/a a QMC Desarrollos Tecnológicos. ¿En qué puedo ayudarte hoy?",
        options: [
            { label: "💻 Desarrollo Web", next: "web" },
            { label: "🖥️ Software a Medida", next: "software" },
            { label: "🤖 Automatizaciones", next: "automation" },
            { label: "📱 Redes Sociales", next: "social" }
        ]
    },

    // 🌐 DESARROLLO WEB
    "web": {
        message: "Excelente elección. Creamos sitios web modernos y optimizados para tu negocio.",
        options: [
            { label: "🏠 Landing Page", next: "web_landing" },
            { label: "🛒 Tienda Online", next: "web_ecommerce" },
            { label: "🏢 Sitio Corporativo", next: "web_corporate" },
            { label: "🔙 Volver al menú", next: "start" }
        ]
    },
    "web_landing": {
        message: "Nuestras Landing Pages convierten visitantes en clientes. Incluyen diseño premium, formularios y optimización SEO.",
        options: [
            { label: "Ver ejemplos", url: "https://qmc.com.ar/portafolio#landings" },
            { label: "Solicitar cotización", next: "contact_whatsapp" }
        ]
    },
    "web_ecommerce": {
        message: "E-commerce completos con carrito, pagos online (Mercado Pago/Stripe), panel de administración y responsive.",
        options: [
            { label: "Ver ejemplos", url: "https://qmc.com.ar/portafolio#ecommerce" },
            { label: "Solicitar cotización", next: "contact_whatsapp" }
        ]
    },
    "web_corporate": {
        message: "Sitios corporativos profesionales con blog, portfolio, contacto y optimización para Google.",
        options: [
            { label: "Ver ejemplos", url: "https://qmc.com.ar/portafolio#corporativos" },
            { label: "Solicitar cotización", next: "contact_whatsapp" }
        ]
    },

    // 💾 SOFTWARE A MEDIDA
    "software": {
        message: "Desarrollamos software personalizado para optimizar tus procesos internos.",
        options: [
            { label: "📊 Sistemas de Gestión", next: "software_gestion" },
            { label: "🏨 Para Hoteles/Posadas", next: "software_hotel" },
            { label: "⚙️ ERP/CRM Personalizado", next: "software_erp" },
            { label: "🔙 Volver al menú", next: "start" }
        ]
    },
    "software_gestion": {
        message: "Sistemas de gestión con inventario, ventas, facturación electrónica y reportes en tiempo real.",
        options: [
            { label: "Ver demo", url: "https://qmc.com.ar/demo/gestion" },
            { label: "Solicitar cotización", next: "contact_whatsapp" }
        ]
    },
    "software_hotel": {
        message: "Especializados en hoteles y posadas: reservas online, check-in/out, housekeeping y reportes ocupacionales.",
        options: [
            { label: "Ver funcionalidades", next: "hotel_features" },
            { label: "Solicitar demo", next: "contact_whatsapp" }
        ]
    },
    "hotel_features": {
        message: "✅ Reservas 24/7<br>✅ WhatsApp integración<br>✅ Panel admin móvil<br>✅ Google Calendar sync",
        options: [
            { label: "Solicitar cotización", next: "contact_whatsapp" },
            { label: "🔙 Volver", next: "software" }
        ]
    },
    "software_erp": {
        message: "ERP/CRM a medida integrando todos tus procesos: clientes, proveedores, stock, finanzas.",
        options: [
            { label: "Ver ejemplos", url: "https://qmc.com.ar/portafolio#erp" },
            { label: "Solicitar reunión", next: "contact_calendar" }
        ]
    },

    // 🤖 AUTOMATIZACIONES
    "automation": {
        message: "Automatizamos tu negocio con n8n y Make.com  Ahorra tiempo y elimina errores.",
        options: [
            { label: "📧 Email Marketing", next: "automation_email" },
            { label: "💬 WhatsApp Business", next: "automation_whatsapp" },
            { label: "📅 Turneros Online", next: "automation_turnero" },
            { label: "🔙 Volver al menú", next: "start" }
        ]
    },
    "automation_email": {
        message: "Campañas automáticas: recordatorios, follow-ups.",
        options: [
            { label: "Configurar demo", next: "contact_whatsapp" }
        ]
    },
    "automation_whatsapp": {
        message: "Respuestas automáticas, confirmaciones de reserva, recordatorios y chatbots en WhatsApp Business API.",
        options: [
            { label: "Ver ejemplos", url: "https://qmc.com.ar/portafolio#whatsapp" },
            { label: "Solicitar demo", next: "contact_whatsapp" }
        ]
    },
    "automation_turnero": {
        message: "Turneros online con WhatsApp/SMS confirmación, Google Calendar sync y recordatorios automáticos.",
        options: [
            { label: "Probar demo", url: "https://turnero.qmc.com.ar" },
            { label: "Implementar en tu negocio", next: "contact_calendar" }
        ]
    },

    // 📱 REDES SOCIALES
    "social": {
        message: "Gestionamos tus redes sociales con contenido profesional y anuncios optimizados.",
        options: [
            { label: "📸 Gestión de Contenido", next: "social_content" },
            { label: "🎯 Publicidad Pagada", next: "social_ads" },
            { label: "🔙 Volver al menú", next: "start" }
        ]
    },
    "social_content": {
        message: "Creamos y publicamos contenido atractivo para Instagram, Facebook y LinkedIn.",
        options: [
            { label: "Ver portfolio", url: "https://qmc.com.ar/social-portfolio" },
            { label: "Solicitar plan", next: "contact_whatsapp" }
        ]
    },
    "social_ads": {
        message: "Campañas de Facebook/Instagram Ads con segmentación precisa y optimización continua.",
        options: [
            { label: "Ver resultados", url: "https://qmc.com.ar/casos-exito#ads" },
            { label: "Plan de inversión", next: "contact_calendar" }
        ]
    },

    // 📞 CONTACTO FINAL
    "contact_whatsapp": {
        message: "¡Perfecto! Un especialista de QMC te contactará en WhatsApp en minutos para ayudarte.",
        options: [
            { label: "Abrir WhatsApp", url: "https://wa.me/5491136778117?text=Hola%20QMC%2C%20quiero%20info%20sobre..." }
        ]
    },
    "contact_calendar": {
        message: "Agenda una reunión gratuita con nuestro equipo técnico.",
        options: [
            { label: "Reservar Calendly", url: "https://calendly.com/qmc-desarrollos/30min" },
            { label: "WhatsApp ahora", url: "https://wa.me/5491136778117" }
        ]
    }
};

if (typeof module !== 'undefined') {
    module.exports = CHAT_DATA;
}

