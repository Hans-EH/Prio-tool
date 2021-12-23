import React from "react";
import { Link } from "react-router-dom";

import Illustration from "./404.png";
import Blob from "./blob-trimmy.png";

function NoMatchPage() {
  return (
    <div className="container mx-auto px-4 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 pt-24">
          <h1 className="text-bluecity_dark font-bold text-3xl md:text-6xl mb-4">Whoooops...</h1>
          <p className="font-bold text-gray-500 text-lg md:text-xl">The page you are looking for might be removed or is temporarily down.</p>

          <div className="mt-12">
            <button className="w-2/5 py-4 bg-bluecity_dark hover:bg-bluecity focus:ring-indigo-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" >
              <Link to="/" className="uppercase">Get home safe</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center  pt-24 md:col-span-3 relative">
          <img src={Blob} alt="blob" className="w-3/5"/>
          <img src={Illustration} alt="404" style={{filter: `grayscale(100%)`}} className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
}

export default NoMatchPage;
