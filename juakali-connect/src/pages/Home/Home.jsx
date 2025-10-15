import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Shield } from 'lucide-react'
import { products } from '../../data/products'
import ProductCard from '../../components/Product/ProductCard'
import './Home.css'
//import { products } from "../../data/products";
//import "./Home.css";

const Home = () => {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Discover Authentic Kenyan Handcrafts</h1>
            <p>Support local artisans and own unique, handcrafted pieces directly from Juakali workshops across Kenya</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link to="/artisans" className="btn btn-secondary">
                Meet Artisans
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-artisan.jpg" alt="Kenyan Artisan at work" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature">
              <Shield className="feature-icon" />
              <h3>Secure Payments</h3>
              <p>Safe and secure payment processing</p>
            </div>
            <div className="feature">
              <Users className="feature-icon" />
              <h3>Support Local</h3>
              <p>Direct support to Kenyan artisans</p>
            </div>
            <div className="feature">
              <Star className="feature-icon" />
              <h3>Quality Guarantee</h3>
              <p>Handcrafted with excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section className="artisan-spotlight">
        <div className="container">
          <div className="spotlight-content">
            <div className="spotlight-text">
              <h2>Meet the Makers</h2>
              <p>Each product tells a story of skill, tradition, and dedication. Connect directly with the talented artisans behind these beautiful creations.</p>
              <Link to="/artisans" className="btn btn-primary">
                Explore Artisans
              </Link>
            </div>
            <div className="spotlight-image">
              <img src="/images/artisan-spotlight.jpg" alt="Artisan at work" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home