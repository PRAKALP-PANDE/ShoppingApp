import React from 'react';
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nemo, blanditiis nihil deleniti eius saepe? Dolorum nostrum, nulla aspernatur maiores quae reiciendis aliquam modi odit unde ratione. Vero quae delectus ea distinctio!</p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default FeaturedProducts;
