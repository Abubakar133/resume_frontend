
import Header from "../Dashboard_components/Header";

import Footer from "../Dashboard_components/FOOTER";

import PdfPreviewPage from "./pdf_preview";


const Dashboard2 = () => {
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
