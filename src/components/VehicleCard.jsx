import { useState } from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

function VehicleCard({ vehicle, index = 0 }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <Link
            to={`/vehicles/${vehicle.id}`}
            className="vehicle-card"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="vehicle-card-image">
                {!isImageLoaded && <div className="image-skeleton"></div>}
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    onLoad={() => setIsImageLoaded(true)}
                    style={{ opacity: isImageLoaded ? 1 : 0 }}
                />
                <div className="vehicle-card-overlay"></div>

                <button
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={handleFavorite}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <svg viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>

                <div className="vehicle-badges">
                    <span className="vehicle-category">{vehicle.category}</span>
                    {vehicle.available ? (
                        <span className="badge badge-success">Available</span>
                    ) : (
                        <span className="badge badge-warning">Booked</span>
                    )}
                </div>
            </div>

            <div className="vehicle-card-content">
                <div className="vehicle-header">
                    <div>
                        <p className="vehicle-brand">{vehicle.brand}</p>
                        <h4 className="vehicle-name">{vehicle.name}</h4>
                    </div>
                    <div className="vehicle-rating">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>{vehicle.rating}</span>
                        <span className="review-count">({vehicle.reviews})</span>
                    </div>
                </div>

                <div className="vehicle-specs">
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>{vehicle.specs.seats} seats</span>
                    </div>
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M12 8v8M8 12h8" />
                        </svg>
                        <span>{vehicle.specs.transmission}</span>
                    </div>
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        <span>{vehicle.specs.fuelType}</span>
                    </div>
                </div>

                <div className="vehicle-footer">
                    <div className="vehicle-distance">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{vehicle.distance}</span>
                    </div>
                    <div className="vehicle-price">
                        <span className="price-value">₹{vehicle.pricePerDay}</span>
                        <span className="price-unit">/day</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default VehicleCard;
