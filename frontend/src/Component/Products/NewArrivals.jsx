import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import newArrival1 from "../../assets/newArrival1.jpg";
import newArrival2 from "../../assets/newArrival2.jpg";
import newArrival3 from "../../assets/newArrival3.jpg";
import newArrival4 from "../../assets/newArrival4.jpg";
import newArrival5 from "../../assets/newArrival5.jpg";
import newArrival6 from "../../assets/newArrival6.jpg";
import newArrival7 from "../../assets/newArrival7.jpg";
import newArrival8 from "../../assets/newArrival8.jpg";


import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "stylish jacket",
      price: 130,
      images: [
        {
          url: newArrival1,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "stylish jacket",
      price: 160,
      images: [
        {
          url: newArrival2,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival3,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival4,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival5,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival6,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival7,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: newArrival8,
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  // Update button enable/disable state
  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  // Scroll left function
  const scrollLeftFn = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  // Scroll right function
  const scrollRightFn = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends and styles in our new arrivals collection.
          From casual wear to formal attire.
        </p>

        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={scrollLeftFn}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black transition ${
              !canScrollLeft
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={scrollRightFn}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black transition ${
              !canScrollRight
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative scroll-smooth no-scrollbar"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
