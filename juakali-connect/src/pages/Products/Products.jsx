
import React, { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import { products } from '../../data/products'
import ProductCard from '../../components/Product/ProductCard'
import './Products.css'

const Products = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState('name')

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filteredProducts = products
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    )
    .filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>All Products</h1>
          <p>Discover unique handcrafted items from talented Kenyan artisans</p>
        </div>

        <div className="products-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>
                <Filter size={20} />
                Filters
              </h3>
              
              <div className="filter-section">
                <h4>Category</h4>
                {categories.map(category => (
                  <label key={category} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                  </label>
                ))}
              </div>

              <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-inputs">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    placeholder="Min"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            <div className="products-toolbar">
              <div className="view-options">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>

              <div className="sort-options">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="results-count">
                {filteredProducts.length} products found
              </div>
            </div>

            <div className={`products-container ${viewMode}-view`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products