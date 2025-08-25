import React, { useEffect, useState } from "react";
import newArrival1 from "../../assets/newArrival1.jpg";
import newArrival10 from "../../assets/newArrival10.jpg";
import maylike1 from "../../assets/maylike1.jpg";
import maylike2 from "../../assets/maylike2.jpg";
import maylike4 from "../../assets/maylike4.jpg";
import newArrival2 from "../../assets/newArrival2.jpg";

import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "A stylish jacket perfect for all occasions.",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Brown"],
  images: [
    { url: newArrival1, altText: "Stylish Jacket 1" },
    { url: newArrival10, altText: "Stylish Jacket 2" },
  ],
};

const similarProducts = [
  {
    _id: "1",
    name: "men's outfit",
    price: 120,
    images: [{ url: maylike1, altText: "men's outfit" }],
  },
  {
    _id: "2",
    name: "men's outfit",
    price: 90,
    images: [{ url: maylike2, altText: "men's outfit" }],
  },
  {
    _id: "3",
    name: "men's outfit",
    price: 160,
    images: [{ url: maylike4, altText: "men's outfit" }],
  },
  {
    _id: "4",
    name: "men's outfit",
    price: 140,
    images: [{ url: newArrival2, altText: "men's outfit" }],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null); // null instead of ""
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url || "/fallback.jpg"}
                alt={image.altText || `thumbnail ${index}`}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => image.url && setMainImage(image.url)}
              />
            ))}
          </div>

          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="main product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
                  No Image
                </div>
              )}
            </div>
          </div>

          {/* mobile thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url || "/fallback.jpg"}
                alt={image.altText || `thumbnail ${index}`}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => image.url && setMainImage(image.url)}
              />
            ))}
          </div>

          {/* right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            {selectedProduct.originalPrice && (
              <p className="text-lg text-gray-600 mb-1 line-through">
                ${selectedProduct.originalPrice}
              </p>
            )}

            <p className="text-xl text-gray-800 font-semibold mb-2">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">
              {selectedProduct.description}
            </p>

            {/* Color Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={decreaseQuantity}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-800"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            {/* Product Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-medium">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>2
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
