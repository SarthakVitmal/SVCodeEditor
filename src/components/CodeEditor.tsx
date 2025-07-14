"use client"

import CodeMirror from "@uiw/react-codemirror"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "@codemirror/theme-one-dark"
import { EditorView } from "@codemirror/view"

type Language = "html" | "css" | "js"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: Language
  theme?: "light" | "dark"
}

export function CodeEditor({ value, onChange, language, theme = "dark" }: CodeEditorProps) {
  const extensions = {
    html: [html()],
    css: [css()],
    js: [javascript()],
  }[language as Language]

  const editorTheme = theme === "dark" ? oneDark : undefined

  const customExtensions = [
    ...extensions,
    EditorView.theme({
      "&": {
        fontSize: "14px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      },
      ".cm-content": {
        padding: "16px",
        minHeight: "200px",
      },
      ".cm-focused": {
        outline: "none",
      },
      ".cm-editor": {
        borderRadius: "8px",
      },
    }),
  ]

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
      <CodeMirror
        value={value}
        extensions={customExtensions}
        onChange={onChange}
        height="450px"
        theme={editorTheme}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          highlightSelectionMatches: false,
        }}
      />
    </div>
  )
}
