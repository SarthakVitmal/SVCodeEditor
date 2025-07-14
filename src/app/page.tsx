"use client"

import { useState, useEffect } from "react"
import { CodeEditor } from "@/components/CodeEditor"
import { PreviewFrame } from "@/components/PreviewFrame"
import { FileActions } from "@/components/FileActions"
import { EditorTabs } from "@/components/EditorTabs"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Code2, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Code } from "lucide-react" // Import Code component
import { Palette } from "lucide-react" // Import Palette component
import { Zap } from "lucide-react" // Import Zap component

export default function Home() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Project</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to SVCode Editor</h1>
        <p>Start building something amazing!</p>
        <button onclick="showMessage()">Click me!</button>
    </div>
</body>
</html>`)

  const [cssCode, setCssCode] = useState(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 500px;
}

h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2rem;
}

p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

button {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
}

button:hover {
    background: #5a6fd8;
}`)

  const [jsCode, setJsCode] = useState(`function showMessage() {
    alert('Hello from your awesome code editor! 🚀');
    
    // Add some dynamic content
    const container = document.querySelector('.container');
    const newElement = document.createElement('p');
    newElement.textContent = 'JavaScript is working perfectly!';
    newElement.style.color = '#667eea';
    newElement.style.marginTop = '1rem';
    newElement.style.fontWeight = 'bold';
    
    // Remove existing dynamic content
    const existing = container.querySelector('.dynamic-content');
    if (existing) {
        existing.remove();
    }
    
    newElement.className = 'dynamic-content';
    container.appendChild(newElement);
}

// Add some interactivity on load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    
    // Add hover effect to the container
    const container = document.querySelector('.container');
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`)

  const [srcDoc, setSrcDoc] = useState("")
  const [viewMode, setViewMode] = useState<"split" | "tabs">("split")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
          </body>
        </html>
      `)
    }, 300)

    return () => clearTimeout(timeout)
  }, [htmlCode, cssCode, jsCode])

  const handleImport = (files: { html?: string; css?: string; js?: string }) => {
    if (files.html) setHtmlCode(files.html)
    if (files.css) setCssCode(files.css)
    if (files.js) setJsCode(files.js)
  }

  const refreshPreview = () => {
    setSrcDoc(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SVCode Editor
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build, preview, and export your web projects</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === "split" ? "tabs" : "split")}
                className="gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {viewMode === "split" ? "Tab View" : "Split View"}
              </Button>

              <Button variant="outline" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* File Actions */}
        <div className="mb-6">
          <FileActions htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} onImport={handleImport} />
        </div>

        {/* Editor Layout */}
        {viewMode === "split" ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Editors */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-orange-500" />
                  <h2 className="text-lg font-semibold">HTML</h2>
                </div>
                <CodeEditor value={htmlCode} onChange={setHtmlCode} language="html" theme={theme as "light" | "dark"} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-blue-500" />
                  <h2 className="text-lg font-semibold">CSS</h2>
                </div>
                <CodeEditor value={cssCode} onChange={setCssCode} language="css" theme={theme as "light" | "dark"} />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-lg font-semibold">JavaScript</h2>
                </div>
                <CodeEditor value={jsCode} onChange={setJsCode} language="js" theme={theme as "light" | "dark"} />
              </div>
            </div>

            {/* Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <PreviewFrame srcDoc={srcDoc} onRefresh={refreshPreview} />
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <EditorTabs
              htmlCode={htmlCode}
              cssCode={cssCode}
              jsCode={jsCode}
              onHtmlChange={setHtmlCode}
              onCssChange={setCssCode}
              onJsChange={setJsCode}
              previewComponent={<PreviewFrame srcDoc={srcDoc} onRefresh={refreshPreview} />}
              theme={theme as "light" | "dark"}
            />
          </div>
        )}
      </main>
      <footer>
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SVCode Editor. All rights reserved.<br />
          Developed by <a href="https://sarthakvitmal.vercel.app" target="_blank" rel="noopener noreferrer" className=" text-blue-600 dark:text-white">Sarthak Vitmal</a>
        </div>
      </footer>
    </div>
  )
}
