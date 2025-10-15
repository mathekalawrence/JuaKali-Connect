import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartItemsCount } = useCart()

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Juakali Connect" />
          <span>Juakali Connect</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/artisans" onClick={() => setIsMenuOpen(false)}>Artisans</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <Search size={20} />
            <input type="text" placeholder="Search products..." />
          </div>
          
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {getCartItemsCount() > 0 && (
              <span className="cart-count">{getCartItemsCount()}</span>
            )}
          </Link>

          <button className="user-icon">
            <User size={24} />
          </button>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header