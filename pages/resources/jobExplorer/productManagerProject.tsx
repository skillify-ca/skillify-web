import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import ProductManagerProject from '../../../components/resources/jobExplorer/productManager/ProductManagerProject';

export default function ProductManagerProjectPage() {
  return (
    <div>
    <ProductManagerProject/>

    </div>
  )
}

ProductManagerProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
