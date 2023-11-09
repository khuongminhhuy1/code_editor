import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";

export default function Editor({ language, displayName, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="w-full flex-grow basis-0 flex-col p-2">
      <div className="w-full flex flex-row justify-between items-center text-white px-2 p-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-t-lg">
        {displayName}
      </div>
      <div className="">
        <Controlled
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  );
}
