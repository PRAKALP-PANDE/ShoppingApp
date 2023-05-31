import React, { useState } from 'react';
import "./Slider.scss";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    
    const data = [
        "https://i.ibb.co/T8pK4CL/slider1.jpg",
        "https://i.ibb.co/JRGmpMy/slider2.jpg",
        "https://i.ibb.co/XsyH63Z/slider3.jpg",
    ];
    
    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev - 1)
    };
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0: (prev) => prev + 1)
    };
        
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider


{/* <img src="https://i.ibb.co/T8pK4CL/slider1.jpg"
<img src="https://i.ibb.co/JRGmpMy/slider2.jpg"
<img src="https://i.ibb.co/XsyH63Z/slider3.jpg" */}