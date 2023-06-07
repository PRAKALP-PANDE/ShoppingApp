import React from 'react';
import "./List.scss";
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsW6WkQAMyjSRsG-_eDBrWN9-TnNTpqxUolQ4cFK0dw&usqp=CAU&ec=48600112",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wbpUH2uHcNidiE1LW33JDLkHOPR4Gu-pNDIGKRhimA&usqp=CAU&ec=48600112",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1B1lWqGo6ImEL486dCDgBDGuulF2ScUY8Q&usqp=CAU",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-mfEyYBtLrdL4tD7sgMCHOVyadWnuOLAg&usqp=CAU",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QorXLr7O2hllhZvNTnZL9c4JXlFRFyxPPEodNeZheg&usqp=CAU&ec=48600112",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YRHsIWqqEE_i21fCloCJSiCLzGAQuucvWnX-kuzm0Q&usqp=CAU&ec=48600112",
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1589851287595-680777e79fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NTAzOTA3OHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            img2: "https://images.unsplash.com/photo-1589742117142-4c08de5aabcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8NTAzOTA3OHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ];

    return (
        <div className='list'>{data?.map(item=> (
            <Card item={item} id={item.id} />
        ))} </div>
    )
}

export default List
