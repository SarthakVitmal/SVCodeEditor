"use client"

import type React from "react"

import { useState } from "react"
import { Code, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeEditor } from "./CodeEditor"

type TabType = "html" | "css" | "js"

interface EditorTabsProps {
  htmlCode: string
  cssCode: string
  jsCode: string
  onHtmlChange: (value: string) => void
  onCssChange: (value: string) => void
  onJsChange: (value: string) => void
  previewComponent: React.ReactNode
  theme: "light" | "dark"
}

export function EditorTabs({
  htmlCode,
  cssCode,
  jsCode,
  onHtmlChange,
  onCssChange,
  onJsChange,
  previewComponent,
  theme,
}: EditorTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("html")

  const tabs = [
    { id: "html" as const, label: "HTML", icon: Code, color: "text-orange-500" },
    { id: "css" as const, label: "CSS", icon: Palette, color: "text-blue-500" },
    { id: "js" as const, label: "JavaScript", icon: Zap, color: "text-yellow-500" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Editor Section */}
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`rounded-none border-b-2 ${
                  activeTab === tab.id ? "border-primary" : "border-transparent hover:border-gray-300"
                } gap-2`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className={`w-4 h-4 ${tab.color}`} />
                {tab.label}
              </Button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "html" && (
            <CodeEditor value={htmlCode} onChange={onHtmlChange} language="html" theme={theme} />
          )}
          {activeTab === "css" && <CodeEditor value={cssCode} onChange={onCssChange} language="css" theme={theme} />}
          {activeTab === "js" && <CodeEditor value={jsCode} onChange={onJsChange} language="js" theme={theme} />}
        </div>
      </div>

      {/* Preview Section - Always Visible */}
      <div className="w-full">{previewComponent}</div>
    </div>
  )
}
