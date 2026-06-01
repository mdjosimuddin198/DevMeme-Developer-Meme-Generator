# DevMeme — Developer Meme Generator

A modern and fun web application where developers can generate, customize, and download developer-themed memes.

![DevMeme Preview](https://via.placeholder.com/800x400/1a1a2e/6366f1?text=DevMeme+Preview)

## ✨ Features

### Core Features

- **Random Meme Generator** - Click a button to get a random developer meme
- **Custom Text Editor** - Add your own top and bottom text to any meme
- **Live Preview** - See your changes in real-time
- **Download as PNG** - Save your creations with one click
- **Meme Template Gallery** - Browse and select from 20+ developer memes

### Bonus Features

- **Dark/Light Theme Toggle** - Switch between themes
- **Category Filter** - Filter memes by JavaScript, CSS, React, Backend, or Debugging
- **Upload Custom Image** - Use your own images as meme templates

## 🚀 Quick Start

### Option 1: Open directly

Simply open `index.html` in your web browser.

### Option 2: Use a local server

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
developer-meme-generator/
│
├── index.html          # Main HTML file
├── style.css           # Styles (Dark/Light theme, Glassmorphism)
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

- **Modern Dark UI** with neon blue/purple glow effects
- **Glassmorphism** cards and elements
- **Smooth animations** and transitions
- **Fully responsive** design for mobile, tablet, and desktop
- **Accessible** with proper ARIA labels

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ features
- **[html2canvas](https://html2canvas.hertzen.com/)** - For downloading memes as images

## 🎯 Usage

1. **Generate a Random Meme**: Click the "Generate Random Meme" button
2. **Customize Text**: Type in the top and bottom text fields
3. **Browse Gallery**: Click any meme in the gallery to use it
4. **Filter by Category**: Use category buttons to filter memes
5. **Download**: Click "Download Meme" to save as PNG
6. **Upload Custom Image**: Click "Upload Custom Image" to use your own image

## 🌙 Theme Toggle

Click the moon/sun icon in the navbar to switch between dark and light themes. Your preference is saved in localStorage.

## 📱 Responsive Design

The application is fully responsive and works on:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🗂️ Meme Categories

| Category   | Description                    |
| ---------- | ------------------------------ |
| JavaScript | JS/TS programming jokes        |
| CSS        | Styling struggles and wins     |
| React      | React/Next.js related memes    |
| Backend    | Server-side development humor  |
| Debugging  | Bug fixing and troubleshooting |

## 🔧 Customization

### Adding New Memes

Add new meme objects to the `memes` array in `script.js`:

```javascript
{
  id: 21,
  image: "https://example.com/meme.jpg",
  title: "My Custom Meme",
  category: "javascript",
  defaultTop: "Top text here",
  defaultBottom: "Bottom text here"
}
```

### Changing Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... other variables */
}
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Meme templates sourced from [Imgflip](https://imgflip.com/)
- [html2canvas](https://html2canvas.hertzen.com/) for the download functionality
- All the developers who created these amazing memes

---

**Made with 💜 for developers who need a laugh**
