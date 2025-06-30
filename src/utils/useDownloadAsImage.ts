import { useEffect } from "react";
import html2canvas from "html2canvas";

export function useDownloadAsImage(scale: number) {
  useEffect(() => {
    const handleDownload = async () => {
      const element = document.getElementById("code");
      if (!element) return;
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: scale,
      });
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "codigo-simulado.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    window.addEventListener("download", handleDownload);
    return () => {
      window.removeEventListener("download", handleDownload);
    };
  }, [scale]);
}
