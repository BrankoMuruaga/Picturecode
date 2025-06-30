import { useState } from "react";
import { Resizable } from "re-resizable";
import CodeHeader from "./CodeHeader";
import CodeEditor from "./CodeEditor";
import { useDownloadAsImage } from "../utils/useDownloadAsImage";

export default function CodeScreen() {
  const [code, setCode] = useState("console.log('¡Hola mundo!');");
  const [title, setTitle] = useState("Untitled-0");
  const [padding, setPadding] = useState(10);
  const [scale, setScale] = useState(1);
  const [bgColor, setBgColor] = useState("transparent");

  useDownloadAsImage(scale);

  return (
    <div className="w-full min-h-[420px] h-full flex justify-center items-center">
      <Resizable
        defaultSize={{ width: 540, height: "auto" }}
        minWidth={360}
        maxWidth="70%"
        enable={{ left: true, right: true, top: false, bottom: false }}
        className="rounded-[12px] shadow-[0_6px_32px_rgba(20,20,20,0.13)] bg-transparent flex items-stretch overflow-hidden"
      >
        <div
          id="code"
          className={`w-full h-full flex rounded-xl transition-all duration-200 ease-in-out`}
          style={{ padding: `${padding}px`, backgroundColor: bgColor }}
        >
          <section className="rounded-xl bg-code-bg w-full min-h-[200px] flex flex-col px-4 pt-2 pb-3">
            <CodeHeader title={title} setTitle={setTitle} />
            <CodeEditor code={code} setCode={setCode} />
          </section>
        </div>
      </Resizable>
    </div>
  );
}
