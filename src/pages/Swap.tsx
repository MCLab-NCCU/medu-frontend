import React, { useState } from 'react';

const Swap = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSlide = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <button 
        onClick={toggleSlide} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Toggle Slide
      </button>
      <div className="wrapper relative overflow-hidden w-24 h-24 border border-black">
        <div 
          className={`slide absolute w-full h-full bg-blue-500 transition-all duration-1000`}
          style={{ left: isVisible ? '0' : '-100px' }} // Use inline styles for left positioning
        >
          {/* Content of the sliding div */}
          {isVisible && <p className="text-white text-center">Sliding Div Content</p>}
        </div>
      </div>
    </div>
  );
};

export default Swap;