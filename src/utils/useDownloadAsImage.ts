import { useEffect } from "react";

export function useDownloadAsImage() {
  useEffect(() => {
    function handleDownload(e: any) {
      const { format, scale } = (e && e.detail) || { format: "png", scale: 1 };
      const element = document.getElementById("code");
      if (!element) return;
      if (format === "svg") {
        const width = element.offsetWidth * scale;
        const height = element.offsetHeight * scale;
        const html = new XMLSerializer().serializeToString(element);
        const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><foreignObject width='100%' height='100%'>${html}</foreignObject></svg>`;
        const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "codigo-simulado.svg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
        return;
      }
      import("html2canvas").then(({ default: html2canvas }) => {
        html2canvas(element, { backgroundColor: null, scale: scale }).then(
          (canvas) => {
            let dataURL;
            let filename = `codigo-simulado.${format}`;
            if (format === "jpeg") {
              dataURL = canvas.toDataURL("image/jpeg");
            } else {
              dataURL = canvas.toDataURL("image/png");
            }
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        );
      });
    }
    window.addEventListener("download", handleDownload);
    return () => {
      window.removeEventListener("download", handleDownload);
    };
  }, []);
}
