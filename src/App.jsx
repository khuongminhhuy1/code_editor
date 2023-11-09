import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "./assets/hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <>
      <div className="bg-gray-500 flex flex-row w-full">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language="js" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="h-96">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
