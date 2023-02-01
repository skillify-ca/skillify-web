import React from "react";

export default function PageHeader({ title, description }) {
  return (
    <div className="py-4 mb-8 bg-white dark:bg-gray-800 text-murkrow dark:text-white">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="">{description}</p>
    </div>
  );
}
