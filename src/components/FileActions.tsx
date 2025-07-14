"use client"

import type React from "react"

import { Download, Upload, Save, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface FileActionsProps {
  htmlCode: string
  cssCode: string
  jsCode: string
  onImport: (files: { html?: string; css?: string; js?: string }) => void
}

export function FileActions({ htmlCode, cssCode, jsCode, onImport }: FileActionsProps) {
  const downloadFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }

  const downloadAll = () => {
    const zip = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    ${htmlCode}
    <script src="script.js"></script>
</body>
</html>`

    downloadFile("index.html", zip, "text/html")
    downloadFile("style.css", cssCode, "text/css")
    downloadFile("script.js", jsCode, "text/javascript")
  }

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>, type: "html" | "css" | "js") => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        onImport({ [type]: content })
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => downloadFile("index.html", htmlCode, "text/html")}>
            Download HTML
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => downloadFile("style.css", cssCode, "text/css")}>
            Download CSS
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => downloadFile("script.js", jsCode, "text/javascript")}>
            Download JavaScript
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={downloadAll}>Download All Files</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Upload className="w-4 h-4" />
            Import
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <label className="cursor-pointer">
              Import HTML
              <input type="file" accept=".html" className="hidden" onChange={(e) => handleFileImport(e, "html")} />
            </label>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <label className="cursor-pointer">
              Import CSS
              <input type="file" accept=".css" className="hidden" onChange={(e) => handleFileImport(e, "css")} />
            </label>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <label className="cursor-pointer">
              Import JavaScript
              <input type="file" accept=".js" className="hidden" onChange={(e) => handleFileImport(e, "js")} />
            </label>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline" className="gap-2 bg-transparent">
        <Save className="w-4 h-4" />
        Save Project
      </Button>

      <Button variant="outline" className="gap-2 bg-transparent">
        <FolderOpen className="w-4 h-4" />
        Open Project
      </Button>
    </div>
  )
}
