import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '../data/vehicles';
import './Hero.css';

function Hero() {
    const navigate = useNavigate();
    const [bookingType, setBookingType] = useState('self');
    const [formData, setFormData] = useState({
        pickupLocation: '',
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/vehicles');
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>India's Premium Car Rental</span>
                    </div>

                    <h1 className="hero-title">
                        Drive Your Dreams
                        <span className="hero-title-accent">Rent with Confidence</span>
                    </h1>

                    <p className="hero-description">
                        Experience luxury and convenience with our premium fleet.
                        From sedans to SUVs, find the perfect ride for every journey.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">500+</span>
                            <span className="stat-label">Premium Cars</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">50K+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">8+</span>
                            <span className="stat-label">Cities</span>
                        </div>
                    </div>
                </div>

                <div className="hero-booking">
                    <div className="booking-card glass">
                        <div className="booking-header">
                            <h3>Find Your Perfect Ride</h3>
                            <div className="booking-tabs">
                                <button
                                    className={`booking-tab ${bookingType === 'self' ? 'active' : ''}`}
                                    onClick={() => setBookingType('self')}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                    Self Drive
                                </button>
                                <button
                                    className={`booking-tab ${bookingType === 'chauffeur' ? 'active' : ''}`}
                                    onClick={() => setBookingType('chauffeur')}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    With Driver
                                </button>
                            </div>
                        </div>

                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    Pick-up Location
                                </label>
                                <select
                                    value={formData.pickupLocation}
                                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                                    required
                                >
                                    <option value="">Select city or airport</option>
                                    {locations.map((loc) => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        Pick-up Date
                                    </label>
                                    <input
                                        type="date"
                                        min={today}
                                        value={formData.pickupDate}
                                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        value={formData.pickupTime}
                                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        Drop-off Date
                                    </label>
                                    <input
                                        type="date"
                                        min={formData.pickupDate || today}
                                        value={formData.dropoffDate}
                                        onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        value={formData.dropoffTime}
                                        onChange={(e) => setFormData({ ...formData, dropoffTime: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary booking-submit">
                                Search Cars
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hero-car-image">
                <img
                    src="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800&auto=format&fit=crop&q=80"
                    alt="Premium Car"
                    className="floating-car"
                />
            </div>
        </section>
    );
}

export default Hero;
