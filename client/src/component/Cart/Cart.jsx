import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsW6WkQAMyjSRsG-_eDBrWN9-TnNTpqxUolQ4cFK0dw&usqp=CAU&ec=48600112",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wbpUH2uHcNidiE1LW33JDLkHOPR4Gu-pNDIGKRhimA&usqp=CAU&ec=48600112",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1B1lWqGo6ImEL486dCDgBDGuulF2ScUY8Q&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-mfEyYBtLrdL4tD7sgMCHOVyadWnuOLAg&usqp=CAU",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.img2} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
