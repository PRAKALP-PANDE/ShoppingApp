import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eveniet earum quidem modi accusamus mollitia non laboriosam corrupti at! Dolores aliquam et earum, odit esse iusto hic quibusdam, repudiandae vero quis accusamus. Dolor, provident.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eveniet earum quidem modi accusamus mollitia non laboriosam corrupti at! Dolores aliquam et earum, odit esse iusto hic quibusdam, repudiandae vero quis accusamus. Dolor, provident.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">PSPSTORE</span>
          <span className="copyright">&copy; Copyright 2023. All Right Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
