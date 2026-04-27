import { useState, useMemo } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
import './Vehicles.css';

function Vehicles() {
    const [filters, setFilters] = useState({
        rentalType: 'any',
        priceRange: { min: 0, max: 500 },
        bodyTypes: [],
        transmission: 'Any',
        fuelTypes: [],
    });

    const [sortBy, setSortBy] = useState('recommended');
    const [viewMode, setViewMode] = useState('grid');

    const filteredVehicles = useMemo(() => {
        let result = [...vehicles];

        // Filter by body type
        if (filters.bodyTypes.length > 0) {
            result = result.filter((v) => filters.bodyTypes.includes(v.category));
        }

        // Filter by price range
        result = result.filter(
            (v) => v.pricePerDay >= filters.priceRange.min && v.pricePerDay <= filters.priceRange.max
        );

        // Filter by transmission
        if (filters.transmission !== 'Any') {
            result = result.filter((v) => v.specs.transmission === filters.transmission);
        }

        // Filter by fuel type
        if (filters.fuelTypes.length > 0) {
            result = result.filter((v) => filters.fuelTypes.includes(v.specs.fuelType));
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.pricePerDay - b.pricePerDay);
                break;
            case 'price-high':
                result.sort((a, b) => b.pricePerDay - a.pricePerDay);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                result.sort((a, b) => b.year - a.year);
                break;
            default:
                // recommended - keep original order
                break;
        }

        return result;
    }, [filters, sortBy]);

    return (
        <div className="vehicles-page">
            <div className="vehicles-header">
                <div className="container">
                    <div className="page-title">
                        <h1>Our Fleet</h1>
                        <p>Choose from our premium collection of well-maintained vehicles</p>
                    </div>
                </div>
            </div>

            <div className="vehicles-container">
                <FilterSidebar filters={filters} onFilterChange={setFilters} />

                <main className="vehicles-main">
                    <div className="vehicles-toolbar">
                        <div className="results-count">
                            <span className="count">{filteredVehicles.length}</span> vehicles available
                        </div>

                        <div className="toolbar-actions">
                            <div className="sort-dropdown">
                                <label>Sort by:</label>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="recommended">Recommended</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="newest">Newest First</option>
                                </select>
                            </div>

                            <div className="view-toggle">
                                <button
                                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                    onClick={() => setViewMode('grid')}
                                    aria-label="Grid view"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                </button>
                                <button
                                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                    aria-label="List view"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="8" y1="6" x2="21" y2="6" />
                                        <line x1="8" y1="12" x2="21" y2="12" />
                                        <line x1="8" y1="18" x2="21" y2="18" />
                                        <line x1="3" y1="6" x2="3.01" y2="6" />
                                        <line x1="3" y1="12" x2="3.01" y2="12" />
                                        <line x1="3" y1="18" x2="3.01" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {filteredVehicles.length > 0 ? (
                        <div className={`vehicles-grid ${viewMode}`}>
                            {filteredVehicles.map((vehicle, index) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h3>No vehicles found</h3>
                            <p>Try adjusting your filters to see more results</p>
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    setFilters({
                                        rentalType: 'any',
                                        priceRange: { min: 0, max: 500 },
                                        bodyTypes: [],
                                        transmission: 'Any',
                                        fuelTypes: [],
                                    })
                                }
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Vehicles;
