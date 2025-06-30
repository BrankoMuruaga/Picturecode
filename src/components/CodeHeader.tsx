import React from "react";

interface CodeHeaderProps {
  title: string;
  setTitle: (title: string) => void;
}

const CodeHeader: React.FC<CodeHeaderProps> = ({ title, setTitle }) => (
  <div
    id="code-header"
    className="relative flex w-full items-center gap-2 mb-2 min-w-8"
  >
    <div className="flex gap-2 h-6 items-center z-10 min-w-12">
      <span className="bg-red rounded-full w-3 h-3"></span>
      <span className="bg-yellow rounded-full w-3 h-3"></span>
      <span className="bg-green rounded-full w-3 h-3"></span>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <input
        id="code-title"
        type="text"
        className="w-full -translate-y-1 text-sm leading-normal text-text-disabled bg-transparent outline-none text-center border-none px-2"
        style={{
          maxWidth: "70%",
          minWidth: "120px",
          boxSizing: "border-box",
          height: "30px",
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        spellCheck="false"
      />
    </div>
    <div className="w-6 z-10 min-w-6" />
  </div>
);

export default CodeHeader;
