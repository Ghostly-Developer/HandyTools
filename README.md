# HandyTools 🛠️

A comprehensive collection of utility tools for developers, designers, and content creators. Built with React, TypeScript, and Vite for optimal performance.

## 📋 Features

- **Code Tools:** API Testing, Decryption, Encoding/Decoding, Regex, Transform, UUID Generation, Validation
- **Color Tools:** Shade Generator, Type Change
- **Compression:** ZIP compression
- **Content Tools:** Best Links, Data Utilities, Flip Coin, SEO Tools, Typing, Wheel of Fortune
- **Image Tools:** Merge images
- **PDF Tools:** Merge PDFs
- **QR Code Tools:** Barcode & QR Code generation
- **Text Tools:** Compare text, Spelling correction, Word count, Format, Text generation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/HandyTools.git
cd HandyTools

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This project is configured for **free deployment on GitHub Pages**.

### Automatic Deployment (Recommended)
1. Push to your GitHub repository
2. Go to Settings → Pages
3. Select "GitHub Actions" as the source
4. The app automatically deploys on each push

### Manual Deployment
```bash
npm run deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🛠️ Tech Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Compiler:** React Compiler for performance optimization
- **Package Manager:** npm

## 📝 Development

### Lint Code
```bash
npm run lint
```

### Project Structure
```
src/
├── components/      # Reusable React components
├── tools/          # Tool implementations
│   ├── code/       # Code-related tools
│   ├── color/      # Color utilities
│   ├── compress/   # Compression tools
│   ├── content/    # Content tools
│   ├── image/      # Image tools
│   ├── pdf/        # PDF tools
│   ├── qr/         # QR code tools
│   └── text/       # Text tools
└── styles/         # CSS stylesheets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Made with ❤️ for developers, designers, and creators**

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
