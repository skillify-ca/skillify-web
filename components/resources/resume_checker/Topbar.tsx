// src/components/TopAppBar.js
import React, { useState } from 'react';

export default function Topbar() {
return (
    <nav className="bg-black p-4">
        <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
            <div className="text-white font-bold text-xl">Your Logo</div>
            <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
            </ul>
        </div>
        </div>
    </nav>
    );
}


// const TopBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-white font-bold text-xl">Hello</div>
//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
//           >
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className="hidden lg:flex space-x-4">
//           <a href="#" className="text-white">
//             Home
//           </a>
//           <a href="#" className="text-white">
//             About
//           </a>
//           <a href="#" className="text-white">
//             Contact
//           </a>
//         </div>
//       </div>
//       {/* Responsive Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-black py-2">
//           <a href="#" className="block text-white py-2 px-4">
//             Home
//           </a>
//           <a href="#" className="block text-white py-2 px-4">
//             About
//           </a>
//           <a href="#" className="block text-white py-2 px-4">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default TopBar;
