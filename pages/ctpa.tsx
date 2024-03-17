import React from "react";

const CTPAPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-auto bg-scroll">
      <div className="flex flex-col items-center justify-center">
        <iframe
          className="w-full h-screen"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9AhNhVPmS3RI8F4Oi_BGDJsivhruGIqrVwVb-xI8JbY2yVA/viewform"
        />
      </div>
    </div>
  );
};

export default CTPAPage;

CTPAPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
