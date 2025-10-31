import React, { useState } from 'react';
// import './Cart.css'; // Removed: CSS is now in a separate file block

// Placeholder Icon Components (since we can't install react-icons here)
const MinusIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
const PlusIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

// New Clock Icon to replace FaRegClock from react-icons/fa6
const ClockIcon = ({ size = 20, className = 'cart-logo' }) => (
    <svg 
        className={className} 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);


function Cart() {
    // CRITICAL FIX: Ensure this is FALSE to prevent auto-opening on load.
    const [isOpen, setIsOpen] = useState(false); 
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Paracetamol - Pyregem',
            subtitle: '10 Tablets',
            price: 20,
            quantity: 2,
            image: 'https://placehold.co/75x75/E8A69E/white?text=MED'
        },
        {
            id: 2,
            name: 'Ibuprofenal - bruwell 400',
            subtitle: '10 Tablets',
            price: 35,
            quantity: 2,
            image: 'https://placehold.co/75x75/B8D0D2/white?text=PILL'
        },
        {
            id: 3,
            name: 'Antacid Liquid',
            subtitle: '200ml bottle',
            price: 50,
            quantity: 1,
            image: 'https://placehold.co/75x75/A4B3A8/white?text=LIQ'
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            ).filter(item => item.quantity > 0) // Remove item if quantity drops to 0 (optional logic)
        );
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const itemTotal = totalAmount;
    const deliveryFee = 0; // Assuming free delivery for simplicity
    const finalTotal = itemTotal + deliveryFee;

    // Calculate item count for button badge (optional)
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <div>
                <button
                    className="icon-btn cart-icon-btn"
                    aria-label="Cart"
                    onClick={() => setIsOpen(true)}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </button>
            </div>

            {/* Overlay */}
            {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close cart">×</button>
                </div>
                
                {/* Scrollable Content Area */}
                <div className="cart-content">
                    <div className="cart-content-box">
                        
                        {/* Delivery Time Info */}
                        <div className="cart-header-row">
                            {/* Using ClockIcon component */}
                            <ClockIcon size={34} className='cart-logo' /> 
                            <h3 className='delivery-time'>Delivery in 10 Minutes</h3>
                        </div>

                        {/* Cart Items List */}
                        <div className='cart-items-wrapper'>
                            {cartItems.map(item => (
                                <div key={item.id} className='cart-item-card'>
                                    <div className='cart-item-img'>
                                        <img src={item.image} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/75x75/f0f0f0/333?text=Item"; }} />
                                    </div>
                                    <div className="cart-med-details">
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-subtitle">{item.subtitle}</p>
                                        <p className="item-price">₹ {item.price}</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button 
                                            className="qty-btn" 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            aria-label="Decrease quantity"
                                        >
                                            <MinusIcon size={14} />
                                        </button>
                                        <span className="qty-value">{item.quantity}</span>
                                        <button 
                                            className="qty-btn" 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            aria-label="Increase quantity"
                                        >
                                            <PlusIcon size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bill Details Section (Inside scrolling content) */}
                        <div className="bill-details-box">
                            <h4 className="bill-details-title">Bill details</h4>
                            <div className="bill-row">
                                <p>Item Total</p>
                                <span>₹ {itemTotal.toFixed(2)}</span>
                            </div>
                            <div className="bill-row">
                                <p>Delivery Charge</p>
                                <span>{deliveryFee > 0 ? `₹ ${deliveryFee.toFixed(2)}` : 'Free'}</span>
                            </div>
                            
                            {/* Total bar for visual separation within bill details */}
                            <div className="bill-total-bar">
                                <p className="total-label">Total</p>
                                <span className="total-amount-display">₹ {finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed Checkout Footer (Outside scrolling area) */}
                <div className="cart-checkout-footer">
                    <div className="checkout-btn-box">
                        <div className="total-info">
                            <span className="total-amount-footer">₹ {finalTotal.toFixed(2)}</span>
                            <span className="total-label">Grand Total</span>
                        </div>
                        <button className="place-order-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
