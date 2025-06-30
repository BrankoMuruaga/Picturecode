import React, { useRef, useEffect } from "react";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (editorContainerRef.current && !editorViewRef.current) {
      editorViewRef.current = new EditorView({
        state: EditorState.create({
          doc: code,
          extensions: [
            basicSetup,
            oneDark,
            javascript(),
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                setCode(update.state.doc.toString());
              }
            }),
          ],
        }),
        parent: editorContainerRef.current,
      });
    }
    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }
    };
  }, []);

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
      className="min-h-[140px] w-full"
      aria-label="Editor de código"
      ref={editorContainerRef}
      style={{ position: "relative" }}
    />
  );
};

export default CodeEditor;
