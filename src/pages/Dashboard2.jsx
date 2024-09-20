
import Header from "../Dashboard_components/Header";

import Footer from "../Dashboard_components/FOOTER";

import PdfPreviewPage from "./pdf_preview";


const Dashboard2 = () => {
return (
  <div className="mt-20 lg:mt-0 w-full overflow-hidden">
      <Header />
     
    
      <PdfPreviewPage/>
    

     
      <Footer />
    </div>
  );
};

export default Dashboard2;
