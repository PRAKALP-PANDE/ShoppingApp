import React from 'react'
import Slider from '../../component/Slider/Slider';
import "./Home.scss";
import FeaturedProducts from '../../component/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home
