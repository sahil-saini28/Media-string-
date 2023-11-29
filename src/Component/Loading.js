import React from 'react';
import Gif from './Gif.gif';  // Corrected import statement

export default function Loading() {
  return (
    <div className="text-center  " >
      <img src={Gif} alt="loading" />  {/* Corrected image source */}
    </div>
  );
}
