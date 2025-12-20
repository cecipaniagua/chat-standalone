const CHAT_DATA = {
    "start": {
        "message": "Bienvenido a QMC. Contamos con diversas soluciones tecnológicas. ¿Qué área te interesa explorar?",
        "options": [
            { "label": "Desarrollo de Software", "next": "software" },
            { "label": "Consultoría IT", "next": "consulting" },
            { "label": "Soporte Técnico", "next": "support" },
            { "label": "Hablar con un humano", "next": "human" }
        ]
    },
    "software": {
        "message": "En QMC desarrollamos aplicaciones a medida y sistemas web de alto rendimiento. ¿Buscas algo específico?",
        "options": [
            { "label": "Sistemas Web (ERP/CRM)", "next": "web_dev" },
            { "label": "Volver al inicio", "next": "start" }
        ]
    },
    "web_dev": {
        "message": "Nuestros sistemas web son escalables y seguros. ¿Te gustaría solicitar una demo o un presupuesto?",
        "options": [
            { "label": "Solicitar Demo", "next": "contact_info" },
            { "label": "Presupuesto aproximado", "next": "contact_info" },
            { "label": "Anterior", "next": "software" }
        ]
    },
    "consulting": {
        "message": "Te ayudamos a optimizar tus procesos tecnológicos y digitalizar tu negocio. ¿En qué etapa se encuentra tu empresa?",
        "options": [
            { "label": "Estamos empezando (Digitalización)", "next": "contact_info" },
            { "label": "Buscamos optimizar procesos", "next": "contact_info" },
            { "label": "Volver al inicio", "next": "start" }
        ]
    },
    "support": {
        "message": "Nuestro soporte técnico es 24/7 para clientes con abono corporativo. ¿Tienes una urgencia o consulta técnica?",
        "options": [
            { "label": "Urgencia (Solo abonados)", "next": "urgent" },
            { "label": "Consulta técnica", "next": "contact_info" },
            { "label": "Volver al inicio", "next": "start" }
        ]
    },
    "urgent": {
        "message": "Si eres cliente con abono, por favor llama a nuestra línea prioritaria o escríbenos por mail con el asunto 'URGENTE'.",
        "options": [
            { "label": "Entendido", "next": "start" }
        ]
    },
    "human": {
        "message": "Te pondremos en contacto con un asesor comercial a la brevedad. Por favor, déjanos tu contacto.",
        "options": [
            { "label": "Dejar mis datos", "next": "contact_info" },
            { "label": "Volver al inicio", "next": "start" }
        ]
    },
    "contact_info": {
        "message": "¡Excelente! Por favor, envíanos un mensaje a info@qmc.com or haz clic en el siguiente enlace para WhatsApp.",
        "options": [
            { "label": "WhatsApp de QMC", "url": "https://wa.me/XXXXXXXXXXX" },
            { "label": "Volver a empezar", "next": "start" }
        ]
    }
};

if (typeof module !== 'undefined') {
    module.exports = CHAT_DATA;
}
