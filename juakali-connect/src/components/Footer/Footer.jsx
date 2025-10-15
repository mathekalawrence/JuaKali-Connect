import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">Juakali Connect</h3>
            <p className="footer-description">
              Connecting talented Kenyan artisans with customers worldwide. 
              Supporting local craftsmanship and preserving traditional skills.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@juakaliconnect.co.ke</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+254 710689178</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/artisans">Our Artisans</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=furniture">Furniture</Link></li>
              <li><Link to="/products?category=jewelry">Jewelry</Link></li>
              <li><Link to="/products?category=art">Art & Sculptures</Link></li>
              <li><Link to="/products?category=home-decor">Home Decor</Link></li>
              <li><Link to="/products?category=accessories">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for updates on new products and artisans</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Juakali Connect. All rights reserved.</p>
            <div className="payment-methods">
              <span>We accept:</span>
              <div className="payment-icons">
                <span>M-Pesa</span>
                <span>Visa</span>
                <span>Mastercard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer