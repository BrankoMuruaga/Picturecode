import { javascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import React, { useEffect, useRef } from "react";
import { getLanguageExtension, getThemeExtension } from "../utils/utils";

interface CodeEditorProps {
  code: string;
  language?: string;
  theme?: string;
  fontSize?: number;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  setCode,
  language,
  theme,
  fontSize,
}) => {
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    const initializeEditor = async () => {
      // Destruir editor existente si hay cambios en configuración
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }

      if (editorContainerRef.current) {
        const baseExtensions = [
          basicSetup,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setCode(update.state.doc.toString());
            }
          }),
          EditorView.theme({
            "&": {
              fontSize: `${fontSize || 16}px`,
            },
          }),
        ];

        // Agregar tema
        if (theme) {
          const themeExtension = await getThemeExtension(theme);
          baseExtensions.push(themeExtension);
        } else {
          baseExtensions.push(oneDark); // Tema por defecto
        }

        // Agregar lenguaje
        if (language) {
          const langExtension = await getLanguageExtension(language);
          if (langExtension) {
            baseExtensions.push(langExtension);
          }
        } else {
          baseExtensions.push(javascript()); // Lenguaje por defecto
        }

        editorViewRef.current = new EditorView({
          state: EditorState.create({
            doc: code,
            extensions: baseExtensions,
          }),
          parent: editorContainerRef.current,
        });
      }
    };

    initializeEditor();

    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }
    };
  }, [language, theme, fontSize, setCode]);

  // Efecto para actualizar el contenido cuando cambie el prop code
  useEffect(() => {
    if (editorViewRef.current) {
      const current = editorViewRef.current.state.doc.toString();
      if (code !== current) {
        editorViewRef.current.dispatch({
          changes: { from: 0, to: current.length, insert: code },
        });
      }
    }
  }, [code]);

  return (
    <div
      id="code"
      className="min-h-[200px] w-full"
      aria-label="Editor de código"
      ref={editorContainerRef}
      style={{ position: "relative" }}
    />
  );
};

export default CodeEditor;
