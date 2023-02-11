import {
  SandpackCodeViewer,
  SandpackLayout,
  SandpackProvider,
  useActiveCode,
  useSandpack,
} from "@codesandbox/sandpack-react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";

//please note that this component is for use in the jest-function-testing blog post only
//and should not be used in other portions of the code base!

const yourTheme = {
  colors: {
    surface1: "#011627",
    surface2: "#011627",
    surface3: "#011627",
    clickable: "#6988a1",
    base: "#808080",
    disabled: "#4D4D4D",
    hover: "#c5e4fd",
    accent: "#c5e4fd",
    error: "#ffcdca",
    errorSurface: "#811e18",
  },
  syntax: {
    plain: "#d6deeb",
    comment: "#006700",
    keyword: "#c792ea",
    tag: "#93C5FD",
    punctuation: "#64748B",
    definition: "#ffff80",
    property: "#add8e6",
    static: "#38BDF8",
    string: "#ffa280",
  },
  font: {
    body: '-apple-system,  BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Noto Sans Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "14px",
    lineHeight: "22px",
  },
};

const Prettier = ({ codemirrorInstance }) => {
  const [prettierCode, setPrettierCode] = useState("");
  const { sandpack } = useSandpack();
  const activeCode = useActiveCode();

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      try {
        const formatted = prettier.format(activeCode.code, {
          parser: "babel",
          plugins: [parserBabel],
        });

        setPrettierCode(formatted);
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    }
  }, [activeCode.code]);

  useEffect(() => {
    const debounce = setTimeout(runPrettier, 100);
    return () => {
      clearInterval(debounce);
    };
  }, [runPrettier]);

  useEffect(() => {
    if (prettierCode) {
      const cmInstance = codemirrorInstance.current.getCodemirror();

      if (cmInstance) {
        const trans = cmInstance.state.update({
          selection: cmInstance.state.selection,
          changes: {
            from: 0,
            to: cmInstance.state.doc.length,
            insert: prettierCode,
          },
        });

        cmInstance.update([trans]);
      }

      sandpack.updateFile(sandpack.activeFile, prettierCode);

      setPrettierCode(null);
    }
  }, [prettierCode]);

  return null;
};
export type CodeBlockProps = {
  children: string;
};
export default function CodeBlock(props: CodeBlockProps) {
  const codemirrorInstance = useRef();

  return (
    <>
      <div className="md:m-2 md:flex md:flex-col md:rounded-2xl border border-gray-200 p-0 dark:border-gray-800">
        <SandpackProvider
          theme={yourTheme}
          files={{
            "App.js": props.children,
          }}
          template="react"
        >
          <div className="flex rounded-2xl bg-gray-900 dark:bg-gray-900">
            <SandpackLayout
              style={{
                padding: "20px 20px 0px",
                border: 0,
              }}
            >
              <div className="flex min-w-[375px] max-w-[900px]">
                <SandpackCodeViewer ref={codemirrorInstance} />
              </div>
              <Prettier codemirrorInstance={codemirrorInstance} />
            </SandpackLayout>
          </div>
        </SandpackProvider>
      </div>
    </>
  );
}
