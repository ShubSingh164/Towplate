import Hero from '../components/Hero';
import VehicleCard from '../components/VehicleCard';
import CategoryCard from '../components/CategoryCard';
import { vehicles, categories, testimonials } from '../data/vehicles';
import './Home.css';

function Home() {
    const featuredVehicles = vehicles.slice(0, 6);

    return (
        <div className="home-page">
            <Hero />

            {/* Trust Badges Section */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-badges">
                        <div className="trust-badge">
                            <div className="trust-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <polyline points="9 12 11 14 15 10" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <h4>Verified Vehicles</h4>
                                <p>All cars are inspected & sanitized</p>
                            </div>
                        </div>

                        <div className="trust-badge">
                            <div className="trust-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <h4>24/7 Support</h4>
                                <p>Roadside assistance anytime</p>
                            </div>
                        </div>

                        <div className="trust-badge">
                            <div className="trust-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <h4>Instant UPI Refunds</h4>
                                <p>GPay, PhonePe, Paytm supported</p>
                            </div>
                        </div>

                        <div className="trust-badge">
                            <div className="trust-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <h4>Aadhaar Verified</h4>
                                <p>DigiLocker integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>Browse by Category</h2>
                        <p>Find the perfect vehicle for your needs from our diverse fleet</p>
                    </div>

                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <CategoryCard key={category.id} category={category} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Vehicles Section */}
            <section className="featured-section section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-title left">
                            <h2>Top Picks This Month</h2>
                            <p>Experience the epitome of amazing journey with our top picks</p>
                        </div>
                        <a href="/vehicles" className="btn btn-outline">
                            View All Vehicles
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>

                    <div className="vehicles-grid">
                        {featuredVehicles.map((vehicle, index) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section section">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-content">
                            <h2>Why Choose Towplate?</h2>
                            <p className="why-description">
                                We're redefining car rentals in India with a focus on quality,
                                convenience, and customer satisfaction.
                            </p>

                            <div className="why-features">
                                <div className="why-feature">
                                    <div className="feature-number">01</div>
                                    <div className="feature-content">
                                        <h4>Premium Fleet</h4>
                                        <p>From economy to luxury, all vehicles are well-maintained and under 3 years old.</p>
                                    </div>
                                </div>

                                <div className="why-feature">
                                    <div className="feature-number">02</div>
                                    <div className="feature-content">
                                        <h4>Flexible Booking</h4>
                                        <p>Hourly, daily, or weekly rentals. Free cancellation up to 24 hours before pickup.</p>
                                    </div>
                                </div>

                                <div className="why-feature">
                                    <div className="feature-number">03</div>
                                    <div className="feature-content">
                                        <h4>Transparent Pricing</h4>
                                        <p>No hidden fees. What you see is what you pay. Insurance included.</p>
                                    </div>
                                </div>

                                <div className="why-feature">
                                    <div className="feature-number">04</div>
                                    <div className="feature-content">
                                        <h4>Home Delivery</h4>
                                        <p>Get your car delivered to your doorstep. Available in all major cities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="why-image">
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80"
                                alt="Happy driver"
                            />
                            <div className="why-stats-card">
                                <div className="stat">
                                    <span className="stat-number">4.9</span>
                                    <span className="stat-text">App Rating</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat">
                                    <span className="stat-number">50K+</span>
                                    <span className="stat-text">Happy Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Customers Say</h2>
                        <p>Real experiences from real customers</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.avatar} alt={testimonial.name} />
                                    <div>
                                        <h5>{testimonial.name}</h5>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Hit the Road?</h2>
                        <p>Download our app and get ₹500 off on your first booking!</p>
                        <div className="cta-buttons">
                            <a href="/vehicles" className="btn btn-primary btn-lg">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                Explore Vehicles
                            </a>
                            <a href="#" className="btn btn-secondary btn-lg">
                                Download App
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
