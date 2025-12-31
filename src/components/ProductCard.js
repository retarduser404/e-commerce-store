import React, { useState, useEffect } from 'react';

function ProductCard({ product, onAddToCart }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    // Format INR price
    const formatINR = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    // Handle image loading
    useEffect(() => {
        // Check if image path is correct
        const img = new Image();
        img.src = product.image;
        
        img.onload = () => {
            console.log('Image loaded successfully:', product.image);
            setImageSrc(product.image);
        };
        
        img.onerror = () => {
            console.error('Image failed to load:', product.image);
            setImageError(true);
            setImageSrc('https://via.placeholder.com/200x150?text=Tech+Product');
        };
    }, [product.image]);

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClick = () => {
        setClickCount(prev => prev + 1);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src={imageError ? 'https://via.placeholder.com/200x150?text=Tech+Product' : imageSrc || product.image} 
                    alt={product.name}
                    onError={() => {
                        console.error('Image error in tag:', product.image);
                        setImageError(true);
                    }}
                    onClick={handleClick}
                    loading="lazy"
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
                    <button 
                        onClick={handleAddToCart}
                        className="add-to-cart"
                    >
                        Add to Cart
                    </button>
                    
                    <button 
                        onClick={toggleExpand}
                        className="expand-btn"
                    >
                        {isExpanded ? 'Show Less' : 'Show Details'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;