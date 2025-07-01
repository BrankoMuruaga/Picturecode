import { useEffect } from "react";

export function useDownloadAsImage() {
  useEffect(() => {
    function handleDownload(e: any) {
      const { format, scale } = (e && e.detail) || { format: "png", scale: 1 };
      const element = document.getElementById("code");
      if (!element) return;

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
