import React, { useState, useEffect } from 'react';

function Cart({ cartItems, onRemoveItem, onUpdateQuantity, totalPrice, isOpen, onClose }) {
    const [checkoutStep, setCheckoutStep] = useState(0);

    useEffect(() => {
        if (isOpen && checkoutStep > 0) {
            const interval = setInterval(() => {
                console.log('Processing checkout...');
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isOpen, checkoutStep]);

    // Format INR price with comma separator
    const formatINR = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleCheckout = async () => {
        try {
            setCheckoutStep(1);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCheckoutStep(2);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCheckoutStep(3);
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Checkout completed!');
            setCheckoutStep(0);
            onClose();
        } catch (error) {
            console.error('Checkout failed:', error);
        }
    };

    if (!isOpen) return null;

    if (cartItems.length === 0) {
        return (
            <div className="cart-overlay">
                <div className="cart empty">
                    <div className="cart-header">
                        <h3>Shopping Cart</h3>
                        <button onClick={onClose} className="close-btn">×</button>
                    </div>
                    <p>Your cart is empty</p>
                    <p className="cart-suggestion">Add some tech products to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-overlay">
            <div className="cart open">
                <div className="cart-header">
                    <h3>Shopping Cart ({cartItems.length} items)</h3>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-info">
                                <h4>{item.name}</h4>
                                <p>{formatINR(item.price)} × {item.quantity}</p>
                                <p className="item-total">{formatINR(item.price * item.quantity)}</p>
                            </div>
                            
                            <div className="item-actions">
                                <button 
                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                    className="quantity-btn"
                                >
                                    -
                                </button>
                                
                                <span className="quantity">{item.quantity}</span>
                                
                                <button 
                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                    className="quantity-btn"
                                >
                                    +
                                </button>
                                
                                <button 
                                    onClick={() => onRemoveItem(item.id)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="cart-summary">
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>{formatINR(totalPrice)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping:</span>
                        <span className="free-shipping">FREE</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total:</span>
                        <span className="total-price">{formatINR(totalPrice)}</span>
                    </div>
                </div>
                
                <div className="checkout-section">
                    {checkoutStep > 0 ? (
                        <div className="checkout-progress">
                            <p>Checkout Step: {checkoutStep}/3</p>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill"
                                    style={{ width: `${(checkoutStep / 3) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button 
                                onClick={handleCheckout}
                                className="checkout-btn"
                            >
                                Proceed to Checkout ({formatINR(totalPrice)})
                            </button>
                            <p className="payment-options">
                                Payment Options: UPI • Credit/Debit Card • Net Banking • Cash on Delivery
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;