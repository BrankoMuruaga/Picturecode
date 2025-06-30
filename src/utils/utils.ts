import { javascript } from "@codemirror/lang-javascript";
import { type Extension } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";

// Función para obtener la extensión de lenguaje
export const getLanguageExtension = async (
  language: string
): Promise<Extension | null> => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return javascript();
    case "typescript":
    case "ts":
      try {
        const { javascript: jsLang } = await import(
          "@codemirror/lang-javascript"
        );
        return jsLang({ typescript: true });
      } catch {
        return javascript();
      }
    case "python":
    case "py":
      try {
        const { python } = await import("@codemirror/lang-python");
        return python();
      } catch {
        return null;
      }
    case "html":
      try {
        const { html } = await import("@codemirror/lang-html");
        return html();
      } catch {
        return null;
      }
    case "css":
      try {
        const { css } = await import("@codemirror/lang-css");
        return css();
      } catch {
        return null;
      }
    case "json":
      try {
        const { json } = await import("@codemirror/lang-json");
        return json();
      } catch {
        return null;
      }
    case "xml":
      try {
        const { xml } = await import("@codemirror/lang-xml");
        return xml();
      } catch {
        return null;
      }
    case "sql":
      try {
        const { sql } = await import("@codemirror/lang-sql");
        return sql();
      } catch {
        return null;
      }
    case "cpp":
    case "c++":
      try {
        const { cpp } = await import("@codemirror/lang-cpp");
        return cpp();
      } catch {
        return null;
      }
    case "java":
      try {
        const { java } = await import("@codemirror/lang-java");
        return java();
      } catch {
        return null;
      }
    case "php":
      try {
        const { php } = await import("@codemirror/lang-php");
        return php();
      } catch {
        return null;
      }
    case "rust":
    case "rs":
      try {
        const { rust } = await import("@codemirror/lang-rust");
        return rust();
      } catch {
        return null;
      }
    case "go":
      try {
        const { go } = await import("@codemirror/lang-go");
        return go();
      } catch {
        return null;
      }
    default:
      return javascript(); // Fallback a JavaScript
  }
};

// Función para obtener el tema
export const getThemeExtension = async (theme: string): Promise<Extension> => {
  switch (theme.toLowerCase()) {
    case "dark":
    case "onedark":
      return oneDark;
    case "github":
    case "github-light":
    case "light":
      try {
        const { githubLight } = await import("@uiw/codemirror-theme-github");
        return githubLight;
      } catch {
        return []; // Tema por defecto (claro)
      }
    case "github-dark":
      try {
        const { githubDark } = await import("@uiw/codemirror-theme-github");
        return githubDark;
      } catch {
        return oneDark;
      }
    case "vscode":
    case "vscode-dark":
      try {
        const { vscodeDark } = await import("@uiw/codemirror-theme-vscode");
        return vscodeDark;
      } catch {
        return oneDark;
      }
    case "dracula":
      try {
        const { dracula } = await import("@uiw/codemirror-theme-dracula");
        return dracula;
      } catch {
        return oneDark;
      }
    case "monokai":
      try {
        const { monokai } = await import("@uiw/codemirror-theme-monokai");
        return monokai;
      } catch {
        return oneDark;
      }
    case "material":
    case "material-dark":
      try {
        const { materialDark } = await import("@uiw/codemirror-theme-material");
        return materialDark;
      } catch {
        return oneDark;
      }
    case "material-light":
      try {
        const { materialLight } = await import("@uiw/codemirror-theme-material");
        return materialLight;
      } catch {
        return [];
      }
    case "nord":
      try {
        const { nord } = await import("@uiw/codemirror-theme-nord");
        return nord;
      } catch {
        return oneDark;
      }
    case "solarized":
    case "solarized-dark":
      try {
        const { solarizedDark } = await import("@uiw/codemirror-theme-solarized");
        return solarizedDark;
      } catch {
        return oneDark;
      }
    case "solarized-light":
      try {
        const { solarizedLight } = await import("@uiw/codemirror-theme-solarized");
        return solarizedLight;
      } catch {
        return [];
      }
    case "tokyo-night":
      try {
        const { tokyoNight } = await import("@uiw/codemirror-theme-tokyo-night");
        return tokyoNight;
      } catch {
        return oneDark;
      }
    case "abyss":
      try {
        const { abyss } = await import("@uiw/codemirror-theme-abyss");
        return abyss;
      } catch {
        return oneDark;
      }
    default:
      return []; // Tema por defecto (claro)
  }
};
