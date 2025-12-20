# 💬 Chat Standalone

Planes de integración para el widget de chat. Dependiendo de dónde decidas alojar los archivos, elige una de las siguientes opciones para que el chat funcione correctamente en tu sitio.

---

## 🚀 Opciones de Integración

### Opción 1: Integración Local (Misma Carpeta)
Usa esta opción si vas a copiar los archivos directamente en el directorio raíz de tu sitio web junto a tu `index.html`.

**1. Vincular los Estilos** Inserta esto dentro de la etiqueta `<head>`:
```html
<link rel="stylesheet" href="styles.css">
```
**2. Cargar los Scripts** Inserta esto justo antes del cierre de la etiqueta `</body>`:
```
<script src="config.js"></script>
<script src="data.js"></script>
<script src="widget.js"></script>
```
### Opción 2: Integración Remota (Vía URL)
Usa esta opción si el chatbot está alojado en un servidor externo o CDN y quieres usarlo en múltiples sitios sin duplicar los archivos.

Reemplaza https://cdn.tusitio.com/chatbot/ con la URL real del servidor donde hayas subido los archivos.
**1. Vincular los Estilos** 
Inserta esto dentro de la etiqueta `<head>`:
```
<link rel="stylesheet" href="[https://cdn.tusitio.com/chatbot/styles.css](https://cdn.tusitio.com/chatbot/styles.css)">
```
**2. Cargar los Scripts** en orden  Inserta esto justo antes del cierre de la etiqueta `</body>`:
```
<script src="[https://cdn.tusitio.com/chatbot/config.js](https://cdn.tusitio.com/chatbot/config.js)"></script>
<script src="[https://cdn.tusitio.com/chatbot/data.js](https://cdn.tusitio.com/chatbot/data.js)"></script>
<script src="[https://cdn.tusitio.com/chatbot/widget.js](https://cdn.tusitio.com/chatbot/widget.js)"></script>
```
### 📁 Estructura de Archivos Necesaria
Para que el widget localice correctamente sus recursos, asegúrate de mantener esta organización de carpetas:
```
.
├── index.html          # Tu página web
├── styles.css          # Estilos visuales del chat
├── config.js           # Parámetros de configuración
├── data.js             # Base de conocimientos/datos
├── widget.js           # Lógica funcional del chat
└── img/                # Carpeta de imágenes
    └── emp_logo.jpg    # Logo que se muestra en el widget
```
