import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-artisan">By {product.artisan}</p>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < product.rating ? "#fbbf24" : "none"}
              color="#fbbf24"
            />
          ))}
          <span>({product.reviews})</span>
        </div>
        
        <div className="product-price">
          KES {product.price.toLocaleString()}
        </div>
        
        <div className="product-meta">
          <span className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <span className="category">{product.category}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard