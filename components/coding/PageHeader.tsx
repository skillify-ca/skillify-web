import React from "react";

export default function PageHeader({ title, description }) {
  return (
    <div className="py-4 mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="">{description}</p>
    </div>
  );
}
