import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <header className="header">
    <div className="container-fluid">
    <div className="row">
    <div className="col-xl-2 col-lg-2">
    <div className="header__logo">
    <h1 href="">Logo</h1>
    </div>
    </div>
    <div className="col-xl-8 col-lg-8">
    <nav className="header__menu">
    <ul>
    <li className="active"><a href="index-2.html">Home</a></li>
    <li><a href="#">Women’s</a></li>
    <li><a href="#">Men’s</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="#">Pages</a>
    <ul className="dropdown">
    <li><a href="product-details.html">Product Details</a></li>
    <li><a href="shop-cart.html">Shop Cart</a></li>
    <li><a href="checkout.html">Checkout</a></li>
    <li><a href="blog-details.html">Blog Details</a></li>
    </ul>
    </li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>
    </div>
    <div className="col-xl-2 col-lg-2">
<div className="header__right">
<div className="header__right__auth">
<a href="#">Login</a>
<a href="#">Register</a>
</div>
<ul className="header__right__widget">
<li><a href="#"><span className="fa-regular fa-heart"></span>
<div className="tip">2</div>
</a></li>
<li><a href="#"><span className="fa-solid fa-cart-shopping"></span>
<div className="tip">2</div>
</a></li>
</ul>
</div>
</div>
   
    </div>
    </div>
    </header>
    
  )
}
