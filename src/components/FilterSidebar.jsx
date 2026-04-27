import { useState } from 'react';
import './FilterSidebar.css';

function FilterSidebar({ filters, onFilterChange }) {
    const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Electric'];
    const transmissionTypes = ['Any', 'Automatic', 'Manual'];
    const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'CNG'];

    const [priceValue, setPriceValue] = useState(filters.priceRange?.max || 2500);

    const handleCheckboxChange = (category, value) => {
        const current = filters[category] || [];
        const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        onFilterChange({ ...filters, [category]: updated });
    };

    const handleSliderChange = (value) => {
        setPriceValue(value);
        onFilterChange({
            ...filters,
            priceRange: { min: 0, max: parseInt(value) },
        });
    };

    const handleDateChange = (field, value) => {
        onFilterChange({ ...filters, [field]: value });
    };

    const resetAll = () => {
        setPriceValue(2500);
        onFilterChange({
            rentalType: 'daily',
            priceRange: { min: 0, max: 2500 },
            bodyTypes: [],
            transmission: 'Any',
            fuelTypes: [],
            pickupDate: '',
            pickupTime: '',
        });
    };

    return (
        <aside className="filter-sidebar">
            <div className="filter-header">
                <h3>🔍 Filters</h3>
                <button className="reset-btn" onClick={resetAll}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                    </svg>
                    Reset
                </button>
            </div>

            {/* Rental Type */}
            <div className="filter-section">
                <h4>⏱️ Rental Type</h4>
                <div className="rental-tabs">
                    {['hourly', 'daily', 'weekly'].map((type) => (
                        <button
                            key={type}
                            className={`rental-tab ${filters.rentalType === type ? 'active' : ''}`}
                            onClick={() => onFilterChange({ ...filters, rentalType: type })}
                        >
                            {type === 'hourly' ? 'Hourly' : type === 'daily' ? 'Daily' : 'Weekly'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Booking Dates */}
            <div className="filter-section">
                <h4>📅 Booking Duration</h4>
                <div className="date-grid">
                    <div className="date-field">
                        <label>Pick-up</label>
                        <input
                            type="date"
                            value={filters.pickupDate || ''}
                            onChange={(e) => handleDateChange('pickupDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <div className="date-field">
                        <label>Time</label>
                        <input
                            type="time"
                            value={filters.pickupTime || ''}
                            onChange={(e) => handleDateChange('pickupTime', e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Price Range Slider */}
            <div className="filter-section">
                <h4>💰 Budget (Per Day)</h4>
                <div className="slider-container">
                    <div className="slider-value">
                        <span className="price-badge">Up to ₹{priceValue.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="500"
                        max="5000"
                        step="100"
                        value={priceValue}
                        onChange={(e) => handleSliderChange(e.target.value)}
                        className="price-slider"
                    />
                    <div className="slider-labels">
                        <span>₹500</span>
                        <span>₹5000</span>
                    </div>
                </div>
            </div>

            {/* Body Type */}
            <div className="filter-section">
                <h4>🚗 Car Type</h4>
                <div className="chip-group">
                    {bodyTypes.map((type) => (
                        <button
                            key={type}
                            className={`filter-chip ${(filters.bodyTypes || []).includes(type) ? 'active' : ''}`}
                            onClick={() => handleCheckboxChange('bodyTypes', type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Transmission */}
            <div className="filter-section">
                <h4>⚙️ Transmission</h4>
                <div className="chip-group">
                    {transmissionTypes.map((type) => (
                        <button
                            key={type}
                            className={`filter-chip ${filters.transmission === type ? 'active' : ''}`}
                            onClick={() => onFilterChange({ ...filters, transmission: type })}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fuel Type */}
            <div className="filter-section">
                <h4>⛽ Fuel Type</h4>
                <div className="chip-group">
                    {fuelTypes.map((type) => (
                        <button
                            key={type}
                            className={`filter-chip ${(filters.fuelTypes || []).includes(type) ? 'active' : ''}`}
                            onClick={() => handleCheckboxChange('fuelTypes', type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default FilterSidebar;
