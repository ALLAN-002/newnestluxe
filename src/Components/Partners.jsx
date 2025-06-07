import React from 'react';
import mawimbi from "../assets/mawimbi.png";
import homes from "../assets/homes.png";
import sarova from "../assets/sarova.png";
import elegance from "../assets/elegance.jpeg";
import backpacker from "../assets/backpacker.jpeg";
import finder from "../assets/finder.png";

export default function Partners() {
  return (
    <div className="bg-gray-100 max-w-full ml-20">
      <div className="bg-[rgb(255, 255, 255)] rounded-lg p-5 max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Partners</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <img src={finder} alt="Finder logo" className="w-32 sm:w-40 h-20 sm:h-28 object-contain" />
          <img src={elegance} alt="Elegance logo" className="w-32 sm:w-40 h-20 sm:h-28 object-contain rounded-lg" />
          <img src={backpacker} alt="Backpacker logo" className="w-32 sm:w-40 h-20 sm:h-28 object-contain rounded-lg" />
          <img src={mawimbi} alt="Mawimbi logo" className="w-36 sm:w-44 h-24 sm:h-32 object-contain rounded-lg" />
          <img src={homes} alt="Homes logo" className="w-32 sm:w-40 h-20 sm:h-28 object-contain" />
          <img src={sarova} alt="Sarova logo" className="w-32 sm:w-40 h-20 sm:h-28 object-contain rounded-lg" />
        </div>
      </div>
    </div>
  );
}
