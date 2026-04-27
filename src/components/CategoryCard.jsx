import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ category, index = 0 }) {
    return (
        <Link
            to={`/vehicles?category=${category.name}`}
            className="category-card"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay"></div>
            </div>
            <div className="category-content">
                <h4 className="category-name">{category.name}</h4>
                <p className="category-count">{category.count} vehicles</p>
            </div>
            <div className="category-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </div>
        </Link>
    );
}

export default CategoryCard;
