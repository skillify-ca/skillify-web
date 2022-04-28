import React from "react";
import { useSelector } from "react-redux";
import { lessonSelector } from "../../../redux/lessonSlice";
import Quiz from "./quiz/Quiz";
import ResourceRow from "./ResourceRow";

export type Resource = {
  title: string;
  description?: string;
  image: string;
  link: string;
};
export type LessonComponentData =
  | {
      component: "title";
      text: string;
    }
  | {
      component: "description";
      text: string;
    }
  | {
      component: "resource-list";
      resources: Resource[];
    }
  | { component: "quiz" }
  | {
      component: "code-sandbox";
      title: string;
      link: string;
    }
  | {
      component: "list";
      items: string[];
    };

export type LessonComponentProps = {
  data: LessonComponentData;
};

export default function LessonComponent({ data }: LessonComponentProps) {
  const lessonState = useSelector(lessonSelector);

  if (data.component === "title") {
    return <h1 className="text-5xl font-bold">{data.text}</h1>;
  }
  if (data.component === "description") {
    return <p>{data.text}</p>;
  }
  if (data.component === "resource-list") {
    return (
      <>
        <h1 className="font-bold">Resources</h1>
        <div className="flex flex-col gap-8">
          {data.resources.map((it, index) => (
            <ResourceRow
              title={it.title}
              description={it.description}
              disabled={lessonState.currentStep < index}
              image={it.image}
              link={it.link}
            />
          ))}
        </div>
      </>
    );
  }
  if (data.component === "quiz") {
    return <Quiz />;
  }
  if (data.component === "code-sandbox") {
    return (
      <>
        <h1 className="font-bold">{data.title}</h1>
        <div className="flex flex-col gap-8 px-4">
          <iframe
            src={data.link}
            className="w-full overflow-hidden rounded-md h-108"
            title={data.title}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </>
    );
  }
}
