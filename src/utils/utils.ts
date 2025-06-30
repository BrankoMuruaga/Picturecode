import html2canvas from "html2canvas";

async function exportToImage() {
  const element = document.getElementById("codigo-simulado");
  if (!element) return;

  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: 2,
  });
  const dataURL = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "codigo-simulado.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
