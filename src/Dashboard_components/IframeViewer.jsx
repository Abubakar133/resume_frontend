import React from 'react';
import { useParams } from 'react-router-dom';

const IframeViewer = () => {
  const { pageId } = useParams(); // Get the dynamic parameter from the URL

  // Define the URLs for each iframe
  const iframeUrls = {
    "Endurgreislustefna": "/Endurgreiðslustefna.html",
    "Persnuverndarstefna": "/Persónuverndarstefna.html",
   "Skilmlar": "/Skilmálar.html",
  };

  // Select the URL based on the route parameter
  const iframeSrc = iframeUrls[pageId];

  if (!iframeSrc) {
    return <div>Page not found</div>; // Render a message if pageId is invalid
  }

  return (
    <iframe
      src={iframeSrc}
      width="100%"
      height="100%"
      style={{ border: "none", minHeight: "100vh" }}
      title={pageId}
    />
  );
};

export default IframeViewer;
