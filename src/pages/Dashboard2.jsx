
import Header from "../Dashboard_components/Header";

import Footer from "../Dashboard_components/FOOTER";

import PdfPreviewPage from "./pdf_preview";
import React, { useEffect } from "react";

const Dashboard2 = () => {
  useEffect(() => {
    
    if (!window.location.hash.includes("#refreshed")) {
      window.location.hash = "#refreshed"; 
      window.location.reload(); // Refresh the page
    }
  }, []);
return (
<div className="flex flex-col min-h-screen w-full overflow-hidden">
  <Header />

  <div className="flex-grow">
    <PdfPreviewPage />
  </div>

  <Footer />
</div>

  );
};

export default Dashboard2;
