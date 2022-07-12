import Header from "../components/coding/sales/Header";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center w-full p-4 bg-murkrow">
        <img src="/images/logo-dark.svg" className="w-36" />
      </div>
      <Header />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
