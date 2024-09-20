import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../config";
const PdfPreviewPage = () => {
  const [pdfLinks, setPdfLinks] = useState([]);
  const [currentPdf, setCurrentPdf] = useState(null);
  const userId2 = localStorage.getItem("userId");
  const [userId, setUserId] = useState(userId2);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch PDFs based on userId
  useEffect(() => {
    const fetchPdfLinks = async () => {
      if (!userId) {
        setError('User ID is not available.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(`${BASE_URL}/userdata/get_pdf`, { userId });

        if (response.data.success) {
          setPdfLinks(response.data.pdfs);
          if (response.data.pdfs.length > 0) {
            setCurrentPdf(response.data.pdfs[0].url); // Set the first PDF as the current PDF to display
          }
        } else {
          setError(response.data.message || 'Failed to fetch PDF links.');
        }
      } catch (error) {
        setError('Failed to fetch PDF links: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfLinks();
  }, [userId]);

  return (
    <div className="container mx-auto p-4 mt-10 lg:mt-0 ">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Your Dashboard</h1>
      <p className="text-lg mb-4 text-orange-500">Here you can view and manage all your saved CVs.</p>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading && <div>Loading PDFs...</div>}

      <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-600">Your Saved CVs:</h2>



      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {pdfLinks.map((pdf, index) => (
          <div key={index} className="border p-2 rounded shadow hover:shadow-lg transition-shadow duration-300 mx-2 my-4 sm:mx-0 sm:w-48">
            <div
              className="relative w-full h-32 overflow-hidden cursor-pointer"
              onClick={() => setCurrentPdf(pdf.url)}
            >
              <iframe
                src={pdf.url}
                width="100%"
                height="100%"
                title={`PDF Thumbnail ${index + 1}`}
                frameBorder="0"
                className="border rounded"
              />
              <a 
                href={pdf.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0"
                onClick={(e) => e.stopPropagation()} // Prevent link from opening on image click
              />
            </div>
            <div className="text-center mt-2">
              <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Full PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfPreviewPage;
