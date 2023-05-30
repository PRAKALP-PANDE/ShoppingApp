import React from 'react';
import './FeaturedProducts.scss'
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "",
            img2: "",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "",
            img2: "",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "",
            img2: "",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "",
            img2: "",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nemo, blanditiis nihil deleniti eius saepe? Dolorum nostrum, nulla aspernatur maiores quae reiciendis aliquam modi odit unde ratione. Vero quae delectus ea distinctio!</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
