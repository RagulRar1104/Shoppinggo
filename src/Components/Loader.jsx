// import React, { useState, useEffect } from 'react';
// import { FaOpencart } from 'react-icons/fa';

// const Loader = () => {
//   const [progress, setProgress] = useState(0);
//   const [buffer, setBuffer] = useState(10);
//   const animationDuration = 3000; // Time for one complete loop (ms)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//       setBuffer((prevBuffer) => (prevBuffer >= 100 ? 10 : prevBuffer + 10));
//     }, 500);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-32 flex items-center justify-center">
//       {/* Icon and text moving animation */}
//       <div className="absolute flex items-center gap-2 animate-move-loop">
//         <FaOpencart size={52} className="text-blue-500" />
//         <h5 className="text-lg font-semibold text-gray-700">ShoppinG-Go</h5>
//       </div>
//       </div>
//   );
// };

// export default Loader;

import React, { useState, useEffect } from 'react';
import { FaOpencart } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="absolute flex items-center gap-2 animate-move-loop">
          <h5 className="text-lg font-semibold text-gray-700">ShoppinG-Go</h5>
          <FaOpencart size={52} className="text-blue-500" />

        </div>
      </div>
    </div>
  );
};


const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false),3000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {showLoader ? <Loader/> : <App/>}

    </div>
  );
};

export default Loader;
