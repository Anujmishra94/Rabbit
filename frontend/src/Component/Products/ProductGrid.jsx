import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
  // Fallback image (agar product ke paas image na ho to ye dikhegi)
  const fallbackImage = "/fallback.jpg"  // apne project ke assets me ek dummy image rakh lena

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="w-full h-96 mb-4">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  src={fallbackImage}
                  alt="No preview available"
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              )}
            </div>
            <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
