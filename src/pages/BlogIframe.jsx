// BlogIframe.jsx
import React from 'react';

const BlogIframe = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/Blog.html"
        title="Blog"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default BlogIframe;
