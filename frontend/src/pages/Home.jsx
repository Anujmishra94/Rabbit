import React from 'react'
import Hero from '../Component/Layout/Hero'
import GenderCollectionSection from '../Component/Products/GenderCollectionSection'
import NewArrivals from '../Component/Products/NewArrivals'
import ProductDetails from '../Component/Products/ProductDetails'

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection/>
      <NewArrivals/>
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
      <ProductDetails/>
    </div>
  )
}

export default Home