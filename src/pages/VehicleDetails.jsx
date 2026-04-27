import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import './VehicleDetails.css';

function VehicleDetails() {
    const { id } = useParams();
    const vehicle = vehicles.find((v) => v.id === parseInt(id));
    const [rentalDays, setRentalDays] = useState(3);
    const [selectedInsurance, setSelectedInsurance] = useState('basic');

    if (!vehicle) {
        return (
            <div className="not-found">
                <h2>Vehicle not found</h2>
                <Link to="/vehicles" className="btn btn-primary">Browse All Vehicles</Link>
            </div>
        );
    }

    const relatedVehicles = vehicles.filter((v) => v.category === vehicle.category && v.id !== vehicle.id).slice(0, 3);

    const insuranceOptions = {
        none: { name: 'No Insurance', price: 0 },
        basic: { name: 'Basic Protection', price: 199 },
        premium: { name: 'Full Coverage', price: 399 },
    };

    const subtotal = vehicle.pricePerDay * rentalDays;
    const insuranceTotal = insuranceOptions[selectedInsurance].price * rentalDays;
    const taxes = Math.round((subtotal + insuranceTotal) * 0.18);
    const total = subtotal + insuranceTotal + taxes;

    return (
        <div className="vehicle-details-page">
            <div className="container">
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/vehicles">Vehicles</Link>
                    <span>/</span>
                    <span>{vehicle.name}</span>
                </nav>

                <div className="details-grid">
                    <div className="details-left">
                        <div className="gallery-section">
                            <div className="gallery-main">
                                <img src={vehicle.image} alt={vehicle.name} />
                                <div className={`availability-badge ${vehicle.available ? 'available' : 'booked'}`}>
                                    {vehicle.available ? 'Available Now' : 'Currently Booked'}
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <div className="info-header">
                                <div>
                                    <span className="vehicle-brand">{vehicle.brand}</span>
                                    <h1 className="vehicle-title">{vehicle.name}</h1>
                                    <p className="vehicle-model">{vehicle.model} • {vehicle.year}</p>
                                </div>
                                <div className="vehicle-rating-large">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>{vehicle.rating}</span>
                                    <span className="reviews">({vehicle.reviews} reviews)</span>
                                </div>
                            </div>

                            <div className="specs-section">
                                <h3>Vehicle Specifications</h3>
                                <div className="specs-grid">
                                    <div className="spec-card"><span className="spec-label">Seats</span><span className="spec-value">{vehicle.specs.seats}</span></div>
                                    <div className="spec-card"><span className="spec-label">Doors</span><span className="spec-value">{vehicle.specs.doors}</span></div>
                                    <div className="spec-card"><span className="spec-label">Transmission</span><span className="spec-value">{vehicle.specs.transmission}</span></div>
                                    <div className="spec-card"><span className="spec-label">Fuel</span><span className="spec-value">{vehicle.specs.fuelType}</span></div>
                                </div>
                            </div>

                            <div className="features-section">
                                <h3>Features</h3>
                                <div className="features-list">
                                    {vehicle.features.map((f, i) => <span key={i} className="feature-tag">{f}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="details-right">
                        <div className="booking-panel">
                            <div className="price-header">
                                <span className="price-value">₹{vehicle.pricePerDay}</span>
                                <span className="price-unit">/day</span>
                            </div>

                            <div className="booking-form">
                                <div className="form-group">
                                    <label>Days</label>
                                    <div className="qty-selector">
                                        <button onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}>−</button>
                                        <span>{rentalDays}</span>
                                        <button onClick={() => setRentalDays(rentalDays + 1)}>+</button>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Pick-up</label>
                                    <input type="date" min={new Date().toISOString().split('T')[0]} />
                                </div>

                                <div className="insurance-section">
                                    <label>Insurance</label>
                                    <div className="insurance-options">
                                        {Object.entries(insuranceOptions).map(([key, opt]) => (
                                            <label key={key} className={`insurance-option ${selectedInsurance === key ? 'selected' : ''}`}>
                                                <input type="radio" name="ins" checked={selectedInsurance === key} onChange={() => setSelectedInsurance(key)} />
                                                <span>{opt.name}</span>
                                                <span>{opt.price === 0 ? 'Free' : `₹${opt.price}/day`}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="price-breakdown">
                                <div className="breakdown-row"><span>Rental</span><span>₹{subtotal}</span></div>
                                <div className="breakdown-row"><span>Insurance</span><span>{insuranceTotal === 0 ? 'Free' : `₹${insuranceTotal}`}</span></div>
                                <div className="breakdown-row"><span>GST</span><span>₹{taxes}</span></div>
                                <div className="breakdown-row total"><span>Total</span><span>₹{total}</span></div>
                            </div>

                            <button className="btn btn-primary btn-lg book-btn" disabled={!vehicle.available}>
                                {vehicle.available ? 'Book Now' : 'Unavailable'}
                            </button>
                        </div>
                    </div>
                </div>

                {relatedVehicles.length > 0 && (
                    <section className="related-section">
                        <h2>Similar Vehicles</h2>
                        <div className="related-grid">
                            {relatedVehicles.map((v, i) => <VehicleCard key={v.id} vehicle={v} index={i} />)}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default VehicleDetails;
