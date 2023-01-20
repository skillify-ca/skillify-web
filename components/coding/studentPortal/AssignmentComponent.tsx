import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import HintRow from "./HintRow";
import AssignmentInputBox from "./AssignmentInputBox";

export type Hint = {
  description: string;
  icon?: string;
  link?: string;
};

export type Screenshot = string;
export type VideoId = string;

export type AssignmentComponentData =
  | {
      component: "title";
      text: string;
    }
  | {
      component: "prompt";
      text: string;
    }
  | {
      component: "hint-list";
      hintRow: Hint[];
    }
  | {
      component: "output";
      title?: string;
      screenshotOrVideoId: Screenshot | VideoId;
    }
  | {
      component: "submission";
      codeSandboxTitle: string;
      link: string;
      placeholder: string;
      assignmentId: string;
    }
  | {
      component: "custom";
      children: React.ReactNode;
    }
  | {
      component: "code-snippet";
      text?: string;
      code: string;
    }
  | {
      component: "loom-video";
      text?: string;
      videoId: string;
    }
  | {
      component: "completed";
      text: string;
      image?: string;
    };

export type AssignmentComponentProps = {
  data: AssignmentComponentData;
};
export default function AssignmentComponent({
  data,
}: AssignmentComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeSectionStyling = () => {
    let styling = "font-thin text-2xl";
    if (!isOpen) {
      styling = styling + " text-black-500 hover:text-slate-500";
    } else {
      styling = styling + " text-slate-500 hover:text-black-500";
    }
    return styling;
  };

  if (data.component === "title") {
    return <h1 className="text-5xl font-thin">{data.text}</h1>;
  } else if (data.component === "prompt") {
    return (
      <>
        <div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h1 className={activeSectionStyling()}>Directions</h1>
        </div>
        {!isOpen && <p className="text-lg">{data.text}</p>}
      </>
    );
  } else if (data.component === "completed") {
    return <p>{data.text}</p>;
  } else if (data.component === "code-snippet") {
    return (
      <div className="flex cursor-pointer">
        {data.text && <p>{data.text}</p>}
        <pre className="p-4 border-2 bg-slate-100 border-black-transparent rounded-xl">
          <Sandpack template="react-ts" files={{ "App.tsx": data.code }} />
        </pre>
      </div>
    );
  } else if (data.component === "hint-list") {
    return (
      <>
        <div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h1
            className={
              isOpen
                ? "font-thin text-2xl text-black-500 animate-none hover:text-slate-500"
                : "font-thin text-2xl text-slate-500 animate-pulse hover:text-black-500"
            }
          >
            Hints...{" "}
          </h1>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            {data.hintRow.map((it, index) => (
              <HintRow
                key={index}
                description={it.description}
                link={it.link}
              />
            ))}
          </div>
        )}
      </>
    );
  } else if (data.component === "submission") {
    return (
      <>
        <div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h1 className={activeSectionStyling()}>Submission</h1>
        </div>
        {!isOpen && (
          <>
            <h1 className="text-lg">{data.codeSandboxTitle}</h1>
            <AssignmentInputBox
              placeholder={data.placeholder}
              assignmentId={data.assignmentId}
            />{" "}
          </>
        )}
      </>
    );
  } else if (data.component === "output") {
    return (
      <>
        <div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h1 className={activeSectionStyling()}>Example</h1>
        </div>
        {!isOpen && (
          <div>
            {data.screenshotOrVideoId.includes(".") ? (
              <img
                src={data.screenshotOrVideoId}
                className="object-cover w-64 h-32 mb-8"
              />
            ) : (
              <iframe
                src={`https://www.loom.com/embed/${data.screenshotOrVideoId}`}
                frameBorder="0"
                webkit-allowfullscreen
                moz-allowfullscreen
                allowFullScreen
                className="w-full h-96"
              />
            )}
          </div>
        )}
      </>
    );
  } else if (data.component === "loom-video") {
    return (
      <div className="pb-56 mb-8 h-96">
        {data.text && <p>{data.text}</p>}
        <iframe
          src={`https://www.loom.com/embed/${data.videoId}`}
          frameBorder="0"
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        />
      </div>
    );
  } else {
    return <h1>{data.component}</h1>;
  }
}
