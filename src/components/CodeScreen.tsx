import { Resizable } from "re-resizable";
import { useCallback, useEffect, useState } from "react";
import { useDownloadAsImage } from "../utils/useDownloadAsImage";
import CodeEditor from "./CodeEditor";
import CodeHeader from "./CodeHeader";
import { getEditorBackground } from "../utils/utils";

export default function CodeScreen() {
  const [code, setCode] = useState("console.log('¡Hola mundo!');");
  const [title, setTitle] = useState("Untitled-0");
  const [padding, setPadding] = useState(10);
  const [scale, setScale] = useState(1);
  const [bgColor, setBgColor] = useState("transparent");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("dark");
  const editorBgColor = getEditorBackground(theme);
  const [fontSize, setFontSize] = useState(16);

  useDownloadAsImage(scale);

  // Escuchar eventos de los controles
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    const handleThemeChange = (event: CustomEvent) => {
      setTheme(event.detail.theme);
    };

    const handleFontSizeChange = (event: CustomEvent) => {
      setFontSize(event.detail.fontSize);
    };

    window.addEventListener(
      "language-selected",
      handleLanguageChange as EventListener
    );
    window.addEventListener(
      "theme-selected",
      handleThemeChange as EventListener
    );
    window.addEventListener(
      "font-size-changed",
      handleFontSizeChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "language-selected",
        handleLanguageChange as EventListener
      );
      window.removeEventListener(
        "theme-selected",
        handleThemeChange as EventListener
      );
      window.removeEventListener(
        "font-size-changed",
        handleFontSizeChange as EventListener
      );
    };
  }, []);

  return (
    <div className="w-full min-h-[420px] h-full flex justify-center items-center">
      <Resizable
        defaultSize={{ width: 640, height: "auto" }}
        minWidth={460}
        maxWidth="70%"
        enable={{ left: true, right: true, top: false, bottom: false }}
        className="rounded-[12px] shadow-[0_6px_32px_rgba(20,20,20,0.13)] bg-transparent flex items-stretch overflow-hidden"
      >
        <div
          id="code"
          className="w-full h-full flex rounded-xl transition-colors duration-200 ease-in-out"
          style={{ padding: `${padding}px`, backgroundColor: bgColor }}
        >
          <section
            className="rounded-xl w-full min-h-[200px] flex flex-col px-4 pt-2 pb-3 transition-all duration-500 ease-in-out"
            style={{ backgroundColor: editorBgColor }}
          >
            <CodeHeader title={title} setTitle={setTitle} />

            <CodeEditor
              code={code}
              setCode={setCode}
              language={language}
              theme={theme}
              fontSize={fontSize}
            />
          </section>
        </div>
      </Resizable>
    </div>
  );
}
