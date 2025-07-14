"use client"

import { RefreshCw, ExternalLink, Smartphone, Tablet, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface PreviewFrameProps {
  srcDoc: string
  onRefresh: () => void
}

type ViewportSize = "mobile" | "tablet" | "desktop"

export function PreviewFrame({ srcDoc, onRefresh }: PreviewFrameProps) {
  const [viewport, setViewport] = useState<ViewportSize>("desktop")

  const viewportStyles = {
    mobile: "w-[375px] h-[667px]",
    tablet: "w-[768px] h-[1024px]",
    desktop: "w-full h-full",
  }

  const openInNewTab = () => {
    const newWindow = window.open()
    if (newWindow) {
      newWindow.document.write(srcDoc)
      newWindow.document.close()
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Preview Header */}
      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-2">Live Preview</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport Controls */}
          <div className="flex items-center gap-1 mr-2">
            <Button
              variant={viewport === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewport("mobile")}
            >
              <Smartphone className="w-4 h-4" />
            </Button>
            <Button
              variant={viewport === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewport("tablet")}
            >
              <Tablet className="w-4 h-4" />
            </Button>
            <Button
              variant={viewport === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewport("desktop")}
            >
              <Monitor className="w-4 h-4" />
            </Button>
          </div>

          <Button variant="ghost" size="sm" onClick={onRefresh}>
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={openInNewTab}>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="p-4 h-[600px] overflow-auto flex justify-center">
        <div className={`${viewportStyles[viewport]} transition-all duration-300`}>
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            sandbox="allow-scripts"
            frameBorder="0"
            className="w-full h-full bg-white rounded border border-gray-200 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  )
}

export default PreviewFrame