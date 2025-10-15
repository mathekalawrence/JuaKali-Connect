import React from 'react'
import { Star, MapPin, Users, Award } from 'lucide-react'
import './Artisans.css'

const Artisans = () => {
  const artisans = [
    {
      id: 1,
      name: "Samuel Kariuki",
      specialty: "Wood Carving",
      location: "Nairobi",
      rating: 4.8,
      products: 23,
      experience: "8 years",
      image: "/images/artisans/samuel.jpg",
      description: "Specializing in traditional Kenyan wood carvings and custom furniture pieces.",
      skills: ["Furniture Making", "Sculpture", "Restoration"]
    },
    {
      id: 2,
      name: "Grace Achieng",
      specialty: "Beadwork & Jewelry",
      location: "Kisumu",
      rating: 4.9,
      products: 15,
      experience: "12 years",
      image: "/images/artisans/grace.jpg",
      description: "Master beadwork artist preserving Luo traditional jewelry techniques.",
      skills: ["Maasai Beadwork", "Contemporary Jewelry", "Traditional Designs"]
    },
    {
      id: 3,
      name: "Mohamed Ali",
      specialty: "Metal Work",
      location: "Mombasa",
      rating: 4.7,
      products: 18,
      experience: "15 years",
      image: "/images/artisans/mohamed.jpg",
      description: "Creating beautiful metal sculptures and functional art from recycled materials.",
      skills: ["Welding", "Sculpture", "Architectural Metalwork"]
    },
    {
      id: 4,
      name: "Wanjiku Mwangi",
      specialty: "Textiles & Weaving",
      location: "Nakuru",
      rating: 4.6,
      products: 31,
      experience: "10 years",
      image: "/images/artisans/wanjiku.jpg",
      description: "Expert in traditional weaving techniques and modern textile applications.",
      skills: ["Weaving", "Fabric Dyeing", "Basket Making"]
    },
    {
      id: 5,
      name: "Kipchoge Tanui",
      specialty: "Leather Work",
      location: "Eldoret",
      rating: 4.8,
      products: 27,
      experience: "7 years",
      image: "/images/artisans/kipchoge.jpg",
      description: "Crafting high-quality leather goods using traditional and modern techniques.",
      skills: ["Bag Making", "Shoe Making", "Leather Tooling"]
    },
    {
      id: 6,
      name: "Fatima Hassan",
      specialty: "Pottery & Ceramics",
      location: "Garissa",
      rating: 4.5,
      products: 14,
      experience: "9 years",
      image: "/images/artisans/fatima.jpg",
      description: "Creating beautiful functional pottery with traditional Somali influences.",
      skills: ["Wheel Throwing", "Glazing", "Kiln Firing"]
    }
  ]

  return (
    <div className="artisans-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Meet Our Artisans</h1>
          <p>Discover the talented craftspeople behind every handcrafted piece on Juakali Connect</p>
        </div>

        {/* Stats Section */}
        <div className="artisan-stats">
          <div className="stat-card">
            <Users className="stat-icon" />
            <div className="stat-content">
              <h3>50+</h3>
              <p>Skilled Artisans</p>
            </div>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" />
            <div className="stat-content">
              <h3>15+</h3>
              <p>Years Experience Average</p>
            </div>
          </div>
          <div className="stat-card">
            <MapPin className="stat-icon" />
            <div className="stat-content">
              <h3>12</h3>
              <p>Counties Across Kenya</p>
            </div>
          </div>
        </div>

        {/* Artisans Grid */}
        <div className="artisans-grid">
          {artisans.map(artisan => (
            <div key={artisan.id} className="artisan-card">
              <div className="artisan-image">
                <img src={artisan.image} alt={artisan.name} />
                <div className="artisan-overlay">
                  <span className="specialty-badge">{artisan.specialty}</span>
                </div>
              </div>
              
              <div className="artisan-info">
                <h3 className="artisan-name">{artisan.name}</h3>
                <div className="artisan-location">
                  <MapPin size={16} />
                  <span>{artisan.location}</span>
                </div>
                
                <div className="artisan-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(artisan.rating) ? "#fbbf24" : "none"}
                        color="#fbbf24"
                      />
                    ))}
                  </div>
                  <span className="rating-text">{artisan.rating} ({artisan.products} products)</span>
                </div>
                
                <p className="artisan-description">{artisan.description}</p>
                
                <div className="artisan-meta">
                  <div className="meta-item">
                    <strong>Experience:</strong>
                    <span>{artisan.experience}</span>
                  </div>
                </div>
                
                <div className="artisan-skills">
                  {artisan.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <button className="view-products-btn">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="artisan-cta">
          <h2>Become a Juakali Artisan</h2>
          <p>Join our platform and showcase your craftsmanship to customers worldwide</p>
          <button className="btn btn-primary">
            Apply to Join
          </button>
        </div>
      </div>
    </div>
  )
}

export default Artisans 