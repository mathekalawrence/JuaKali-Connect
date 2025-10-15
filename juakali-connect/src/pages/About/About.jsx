import React from 'react'
import { Heart, Target, Eye, Users } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About Juakali Connect</h1>
            <p className="hero-subtitle">
              Bridging the gap between talented Kenyan artisans and global customers
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mission-card">
            <Target className="icon" />
            <h3>Our Mission</h3>
            <p>
              To empower Kenyan artisans by providing a digital platform that showcases 
              their craftsmanship to the world, while preserving traditional skills and 
              promoting sustainable economic development.
            </p>
          </div>
          <div className="vision-card">
            <Eye className="icon" />
            <h3>Our Vision</h3>
            <p>
              A world where every artisan has equal opportunity to thrive, where traditional 
              crafts are valued and preserved, and where customers can directly support 
              the makers behind their products.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, Juakali Connect emerged from a simple observation: 
              Kenya is home to incredibly talented artisans creating beautiful, 
              high-quality products, but they often lack access to wider markets.
            </p>
            <p>
              The term "Juakali" refers to the informal sector where skilled craftspeople 
              work, often in open-air workshops. These artisans possess generations of 
              knowledge and skill, but face challenges in reaching customers beyond their 
              local communities.
            </p>
            <p>
              We built Juakali Connect to bridge this gap - creating a direct connection 
              between artisans and customers who appreciate authentic, handcrafted goods 
              with a story.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about-story.jpg" alt="Artisan at work" />
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Heart className="value-icon" />
              <h4>Empowerment</h4>
              <p>We believe in empowering artisans with tools and opportunities to grow their businesses</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h4>Community</h4>
              <p>Building a supportive community where artisans can collaborate and learn from each other</p>
            </div>
            <div className="value-card">
              <Target className="value-icon" />
              <h4>Sustainability</h4>
              <p>Promoting sustainable practices and fair trade principles in all our operations</p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Artisans Supported</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Counties Reached</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">KES 2.5M+</div>
              <div className="stat-label">Revenue Generated</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About