import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import ProductManagerComponent from "../../../components/resources/jobExplorer/productManager/ProductManagerComponent";
export default function ProductManagerPage() {
  return (
    <div>
      <ProductManagerComponent />
    </div>
  );
}

ProductManagerPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
