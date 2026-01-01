import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    // Format INR price
    const formatINR = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const handleClick = () => {
        setClickCount(prev => prev + 1);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                        if (e.currentTarget.dataset.fallback) return;
                        e.currentTarget.dataset.fallback = 'true';
                        e.currentTarget.src = '/images/fallback.png';
                    }}
                />


                <div className="click-count">Clicks: {clickCount}</div>

                {product.rating && (
                    <div className="rating-badge">⭐ {product.rating}</div>
                )}
            </div>

            <div className="product-info">
                <h3>{product.name}</h3>

                <p className="price">{formatINR(product.price)}</p>

                {product.discountedPrice && (
                    <p className="discounted-price">
                        {formatINR(product.discountedPrice)}
                    </p>
                )}

                <p className="category">{product.category.toUpperCase()}</p>

                {isExpanded && (
                    <div className="expanded-info">
                        <p className="description">{product.description}</p>

                        <div className="product-specs">
                            <span className="spec-badge">🔄 10-Day Replacement</span>
                            <span className="spec-badge">💰 Cash on Delivery</span>
                            <span className="spec-badge">🚚 Free Delivery</span>
                        </div>
                    </div>
                )}

                <div className="product-actions">
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Add to Cart
                    </button>

                    <button className="expand-btn" onClick={toggleExpand}>
                        {isExpanded ? 'Show Less' : 'Show Details'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
