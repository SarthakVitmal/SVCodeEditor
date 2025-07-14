# SVCode Editor

A modern, feature-rich web-based code editor for HTML, CSS, and JavaScript with real-time preview capabilities. Built with Next.js 15, TypeScript, and Tailwind CSS.

![SVCode Editor](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Real-time Preview**: See your code changes instantly in the preview pane
- **Multi-language Support**: Full syntax highlighting for HTML, CSS, and JavaScript
- **Dark/Light Theme**: Toggle between beautiful dark and light themes
- **Flexible Layout**: Switch between split view and tabbed interface
- **File Operations**: Import/export your projects easily
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Live Refresh**: Automatic preview updates as you type

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SarthakVitmal/SVCodeEditor.git
cd SVCodeEditor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start coding!

## 🛠️ Built With

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 19](https://reactjs.org/)** - User interface library

### Editor & UI Components
- **[@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror)** - Code editor component
- **[@codemirror/lang-*](https://codemirror.net/)** - Language support for syntax highlighting
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main application page
├── components/
│   ├── CodeEditor.tsx      # Code editor component
│   ├── EditorTabs.tsx      # Tabbed interface for editors
│   ├── FileActions.tsx     # Import/export functionality
│   ├── PreviewFrame.tsx    # Live preview component
│   ├── theme-provider.tsx  # Theme context provider
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       └── dropdown-menu.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Usage

### Basic Workflow

1. **Write Code**: Use the HTML, CSS, and JavaScript editors to write your code
2. **Live Preview**: Watch your changes appear instantly in the preview pane
3. **Switch Views**: Toggle between split view and tabbed interface using the view mode button
4. **Theme Toggle**: Switch between dark and light themes for comfortable coding
5. **Export Project**: Download your complete project as a ZIP file

### View Modes

- **Split View**: See all editors and preview simultaneously (ideal for larger screens)
- **Tab View**: Switch between editors and preview using tabs (perfect for smaller screens)

### File Operations

- **Import**: Upload HTML, CSS, and JS files to start with existing code
- **Export**: Download your project as a complete ZIP file with all assets

## 🎨 Customization

The editor comes with beautiful default styling, but you can customize it further:

- **Themes**: Built-in dark and light themes with smooth transitions
- **Layout**: Responsive design that adapts to your screen size
- **Colors**: Modern gradient color scheme with customizable accents

## 📱 Browser Support

SVCode Editor works on all modern browsers:

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sarthak Vitmal**
- Website: [sarthakvitmal.vercel.app](https://sarthakvitmal.vercel.app)
- GitHub: [@SarthakVitmal](https://github.com/SarthakVitmal)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [CodeMirror](https://codemirror.net/) for the powerful code editor
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Lucide](https://lucide.dev/) for beautiful icons

---

<p align="center">Made with ❤️ by <a href="https://sarthakvitmal.vercel.app">Sarthak Vitmal</a></p>
