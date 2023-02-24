import {
  SandpackCodeViewer,
  SandpackLayout,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { useRef } from "react";
import React from "react";

//please note that this component is for use in the jest-function-testing blog post only
//and should not be used in other portions of the code base!

const customTheme = {
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
    size: "13px",
    lineHeight: "22px",
  },
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
          theme={customTheme}
          files={{
            "App.js": props.children,
          }}
          template="react"
        >
          <div className="flex rounded-2xl bg-gray-900 dark:bg-gray-900">
            <SandpackLayout
              style={{
                padding: "5px 5px 5px",
                border: 0,
              }}
            >
              <div className="flex min-w-[375px] max-w-[900px]">
                <SandpackCodeViewer ref={codemirrorInstance} />
              </div>
            </SandpackLayout>
          </div>
        </SandpackProvider>
      </div>
    </>
  );
}
