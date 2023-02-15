import React, { useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import "../../assets/css/sidebar.css";

export default function Document__content() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  return (
    <div class="sidebar__content">
      <h1 class="content__title">Flowbite - Changelog</h1>
      <p class="content__text">
        Read more about the releases made for FlowBite from the official
        changelog
      </p>
      <div class="content__code">
        npm create vite@latest my-project -- --template react <br />
        cd my-project
      </div>
      <p class="content__text">
        Now that the project has been created you can start a local development
        server by running npm run dev and use the npm run build command to
        create an optimized build for production use.
      </p>
      <h1 class="content__title">Install Tailwind CSS </h1>
      <p class="content__text">
        Install Tailwind CSS by running the following two commands:
      </p>
      <p class="content__text">
        Now that the project has been created you can start a local development
        server by running npm run dev and use the npm run build command to
        create an optimized build for production use.
      </p>
      <h1 class="content__title">Install Tailwind CSS </h1>
      <p class="content__text">
        Install Tailwind CSS by running the following two commands:
      </p>
      <div class="content__text">
        npm install -D tailwindcss postcss autoprefixer <br />
        npx tailwindcss init -p
      </div>
      <p class="content__code">
        2. Configure the template paths inside the tailwind.config.js file:
      </p>
      <div class="content__code">
        module.exports = <br />
        content: [ <br />
        ],
        <br />
        theme:{" "}
        {
          <br />
          // extend: {},<br/>
        }
        ,<br />
        plugins: [],
        <br />
      </div>
      <div>
        <button onClick={showValue}>Show value</button>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
}
