import React from 'react';
import "./List.scss";
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filter][categories][id]=${catId}${subCats.map(
            item=> `&[filters][sub_categories][id][$eq]=${item}`
            )}&[filters][price][$ite]=${maxPrice}&sort=price:${sort}`
    );


    return (
        <div className='list'>
            {loading ? "loading" 
            : data?.map(item => (
                <Card item={item} id={item.id} />
            ))}
        </div>
    )
}

export default List
