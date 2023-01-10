export default function PageHeader({ title, description }) {
  return (
    <div className="p-4 mb-8 bg-white shadow-md sm:p-8 dark:bg-gray-900 text-murkrow dark:text-white">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="">{description}</p>
    </div>
  );
}
