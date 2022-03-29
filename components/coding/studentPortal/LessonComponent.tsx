import React from "react";
import Quiz from "./quiz/Quiz";
import ResourceRow from "./ResourceRow";

export type Resource = {
  title: string;
  description: string;
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
  | { component: "quiz" };

export type LessonComponentProps = {
  data: LessonComponentData;
};

export default function LessonComponent({ data }: LessonComponentProps) {
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
        <div className="flex flex-col gap-8 px-4">
          {data.resources.map((it) => (
            <ResourceRow
              title={it.title}
              description={it.description}
              disabled={false}
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
}
