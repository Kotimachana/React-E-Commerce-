import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
<footer className="footer">
<div className="container">
<div className="row">
<div className="col-lg-4 col-md-6 col-sm-7">
<div className="footer__about">
<div className="footer__logo">
<h1>Logo</h1>
</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
cilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
cilisis.</p>

</div>
</div>
<div className="col-lg-2 col-md-3 col-sm-5">
<div className="footer__widget">
<h6>Quick links</h6>
<ul>
<li>About</li>
<li>Blogs</li>
<li>Contact</li>
<li>FAQ</li>
</ul>
</div>
</div>
<div className="col-lg-2 col-md-3 col-sm-4">
<div className="footer__widget">
<h6>Account</h6>
<ul>
<li>My Account</li>
<li>Orders Tracking</li>
<li>Checkout</li>
<li>Wishlist</li>
</ul>
</div>
</div>
<div className="col-lg-4 col-md-8 col-sm-8">
<div className="footer__newslatter">
<h6>NEWSLETTER</h6>
<form action="#">
<input type="text" placeholder="Email"/>
<button type="submit" className="site-btn">Subscribe</button>
</form>
<div className="footer__social">
<a href="#"><i className="fa-brands fa-facebook"></i></a>
<a href="#"><i className="fa-brands fa-twitter"></i></a>
<a href="#"><i className="fa-brands fa-youtube"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
<a href="#"><i className="fa-brands fa-pinterest"></i></a>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">

<div className="footer__copyright__text">
<p>Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="" target="_blank">Sharief</a></p>
</div>

</div>
</div>
</div>
</footer>
  
  )
}
