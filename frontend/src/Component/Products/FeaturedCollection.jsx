import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";


const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto felx flex-col-reverse lg:flex-row flex items-center bg-green-50 rounded-3xl">
        {/* left content  */}.
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest collection of comfortable and stylish apparel
            designed to fit your everyday life. From casual wear to work attire,
            our pieces are crafted with quality materials and attention to
            detail to ensure you look and feel your best. Explore our collection
            
          </p>
          <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 mt-3 inline-block">
          Shop Now</Link>
        </div>
        {/* right content */}
        <div className="lg:w-1/2">
        <img src={featured} alt="Featured Collection" className="w-full h-full object-cover lg:rounded-tr-3xl" /></div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
