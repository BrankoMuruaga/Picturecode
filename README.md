# 🖼️ Picturecode

¡Convierte tu código en imágenes hermosas y personalizables!

Picturecode es una herramienta web que te permite pegar, editar y exportar fragmentos de código como imágenes listas para compartir en redes sociales, presentaciones o portfolios. Inspirado en Carbon y Ray.so, pero con controles minimalistas y experiencia ultra rápida.

## ✨ Características principales

- **Editor de código** con soporte para múltiples lenguajes y temas.
- **Controles de personalización** intuitivos: padding, color de fondo, fuente, tema, y más.
- **Fondo transparente**: exporta tu código sin fondo para overlays o presentaciones.
- **Descarga instantánea** en PNG y JPEG (con escalas x1, x2, x4).

## 🚀 ¿Cómo usar?

1. Escribe o pega tu código en el editor.
2. Personaliza el aspecto usando los controles inferiores:
   - Cambia el lenguaje, tema, padding, fuente o color de fondo.
3. Haz clic en el botón de descarga (⬇️) y elige formato y escala.
4. ¡Listo! Comparte tu imagen donde quieras.

## 🛠️ Tecnologías

- [Astro](https://astro.build/) + [React](https://react.dev/)
- [re-resizable](https://github.com/bokuweb/re-resizable) para el área de código
- Hooks y eventos personalizados para comunicación entre UI y lógica

## 📦 Estructura

- `src/components/` — Lógica React (editor, header, dropdowns)
- `src/UI/` — Controles, tooltips y layout en Astro
- `src/utils/` — Hooks y utilidades para exportar imágenes

## 💡 Inspiración

- [Carbon](https://carbon.now.sh/)
- [Ray.so](https://ray.so/)

---

¡Haz tu código visualmente irresistible con Picturecode! ✨
