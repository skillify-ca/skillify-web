import Image from "next/image";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import HintRow from "../HintRow";
import AssignmentInputBox from "./AssignmentInputBox";
import ExpandableContainer from "../../ExpandableContainer";
import TemplateInputBox from "../TemplateInputBox";

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
      header: string;
      bullets: string[];
    }
  | {
      component: "hint-list";
      hintRow: Hint[];
    }
  | {
      component: "description";
      text: string;
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
    }
  | {
      component: "template";
      templateLink: string;
    };

export type AssignmentComponentProps = {
  data: AssignmentComponentData;
};
export default function AssignmentComponent({
  data,
}: AssignmentComponentProps) {
  if (data.component === "title") {
    return <h1 className="text-3xl font-semibold">{data.text}</h1>;
  } else if (data.component === "prompt") {
    return (
      <ExpandableContainer open={true} title="Directions">
        <div className="flex flex-col mx-4">
          <p className="text-lg">{data.header}</p>
          <ul className="ml-10 space-y-2 list-disc list-outside text-md">
            {data.bullets.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </ExpandableContainer>
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
      <ExpandableContainer open={false} title="Hints">
        <div className="flex flex-col mx-4 space-y-4 text-lg">
          <p>Click below to reveal hints</p>
          {data.hintRow.map((it, index) => (
            <HintRow key={index} description={it.description} link={it.link} />
          ))}
        </div>
      </ExpandableContainer>
    );
  } else if (data.component === "template") {
    return (
      <ExpandableContainer open={true} title="Assignment Template">
        <TemplateInputBox templateLink={data.templateLink} />
      </ExpandableContainer>
    );
  } else if (data.component === "submission") {
    return (
      <>
        <ExpandableContainer open={true} title="Submission">
          <div className="mx-4">
            <p className="text-lg">{data.codeSandboxTitle}</p>
            <AssignmentInputBox
              placeholder={data.placeholder}
              assignmentId={data.assignmentId}
            />
          </div>
        </ExpandableContainer>
      </>
    );
  } else if (data.component === "output") {
    return (
      <ExpandableContainer open={true} title="Example">
        <div className="flex flex-col mx-4 space-y-4 text-lg">
          <p>Your submission should look close to the following:</p>
          {data.screenshotOrVideoId.includes(".") ? (
            <div className="relative h-96 w-96">
              <Image src={data.screenshotOrVideoId} layout="fill" />
            </div>
          ) : (
            <iframe
              src={`https://www.loom.com/embed/${data.screenshotOrVideoId}`}
              webkit-allowfullscreen
              moz-allowfullscreen
              allowFullScreen
              className="w-full h-96"
            />
          )}
        </div>
      </ExpandableContainer>
    );
  } else if (data.component === "loom-video") {
    return (
      <div className="flex flex-col space-y-4 text-xl font-bold ">
        <p>{data.text}</p>
        <iframe
          src={`https://www.loom.com/embed/${data.videoId}`}
          webkit-allowfullscreen
          moz-allowfullscreen
          allowFullScreen
          className="w-full h-96"
        />
      </div>
    );
  } else if (data.component === "description") {
    return <p className="whitespace-pre-line">{data.text}</p>;
  } else {
    return <h1>{data.component}</h1>;
  }
}
