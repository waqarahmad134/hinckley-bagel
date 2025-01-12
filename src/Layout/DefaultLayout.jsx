import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const DefaultLayout = React.memo(({ children , onLogoClick , homepage}) => {
  const location = useLocation();
  const { categories } = useDataContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <div className="">
      <Header categories={categories} onLogoClick={onLogoClick} homepage={homepage}  />
      <div className="relative top-0">
        {children}
      </div>
      <Footer categories={categories} />
    </div>
  );
});

export default DefaultLayout;
