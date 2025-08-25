import React from 'react'
import Hero from '../Component/Layout/Hero'
import GenderCollectionSection from '../Component/Products/GenderCollectionSection'
import NewArrivals from '../Component/Products/NewArrivals'
import ProductDetails from '../Component/Products/ProductDetails'
import ProductGrid from '../Component/Products/ProductGrid'
import womenCollection1 from '../assets/womenCollection1.jpg'
import womenCollection2 from '../assets/womenCollection2.jpg'
import womenCollection3 from '../assets/womenCollection3.jpg'
import womenCollection4 from '../assets/womenCollection4.jpg'
import womenCollection5 from '../assets/womenCollection5.jpg'
import womenCollection6 from '../assets/womenCollection6.jpg'
import womenCollection7 from '../assets/womenCollection7.jpg'
import womenCollection8 from '../assets/womenCollection8.jpg'
import FeaturedCollection from './../Component/Products/FeaturedCollection';




const placeholderProducts = [
  {
    _id: "1",
    name: "women's outfit",
    price: 170,
    images: [
      {
        url: womenCollection1,
        altText: "product 1",
      },
    ],
  },
  {
    _id: "2",
    name: "women's outfit",
    price: 120,
    images: [
      {
        url: womenCollection2,
        altText: "product 2",
      },
    ],
  },
  {
    _id: "3",
    name: "women's outfit",
    price: 140,
    images: [
      {
        url: womenCollection3,
        altText: "product 3",
      },
    ],
  },
  {
    _id: "4",
    name: "women's outfit",
    price: 160,
    images: [
      {
        url: womenCollection4,
        altText: "product 4",
      },
    ],
  },
  {
    _id: "5",
    name:  "women's outfit",
    price: 130,
    images: [
      {
        url: womenCollection5,
        altText: "product 5",
      },
    ],
  },
  {
    _id: "6",
    name:  "women's outfit",
    price: 140,
    images: [
      {
        url: womenCollection6,
        altText: "product 6",
      },
    ],
  },
  {
    _id: "7",
    name:  "women's outfit",
    price: 180,
    images: [
      {
        url: womenCollection7,
        altText: "product 7",
      },
    ],
  },
  {
    _id: "8",
    name:  "women's outfit",
    price: 190,
    images: [
      {
        url: womenCollection8,
        altText: "product 8",
      },
    ],
  }


]; 
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection/>
      <NewArrivals/>

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
      <ProductDetails/>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection/>
    </div>
  )
}

export default Home