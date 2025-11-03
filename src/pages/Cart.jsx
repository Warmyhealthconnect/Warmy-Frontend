import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import './Cart.css'; // Import the dedicated CSS file
import { FaRegClock } from "react-icons/fa6";

// Hardcoded delivery charge for demonstration
const DELIVERY_CHARGE = 15;

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

// --- New Component: BillDetails ---
const BillDetails = ({ itemTotal, deliveryCharge }) => {
    const finalTotal = itemTotal + deliveryCharge;

    return (
        <div className='bill-details-box'>
            <h3 className='bill-header'>Bill details</h3>
            <div className='bill-row'>
                <span className='bill-label'>Item Total</span>
                <span className='bill-value'>₹ {itemTotal.toFixed(2)}</span>
            </div>
            <div className='bill-row'>
                <span className='bill-label'>Delivery Charge</span>
                <span className='bill-value'>₹ {deliveryCharge.toFixed(2)}</span>
            </div>
            <div className='bill-total-row'>
                <span className='bill-total-label'>Total</span>
                <span className='bill-total-value'>₹ {finalTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};
// -----------------------------------


function Cart() {
    // Setting isOpen to true to display the sidebar by default for demonstration
    const [isOpen, setIsOpen] = useState(true); 
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Paracetamol - Pyregem',
            subtitle: '10 Tablets',
            price: 20,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop'
        },
        {
            id: 2,
            name: 'Ibuprofenal - bruwell 400',
            subtitle: '10 Tablets',
            price: 35,
            quantity: 1, // Changed quantity to 1 for visual difference
            image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop'
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const itemTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // Calculation: (20 * 2) + (35 * 1) = 75

    const finalOrderTotal = itemTotal + DELIVERY_CHARGE;

    
    return (
        <>
            <div>
                <button
                    className="icon-btn"
                    aria-label="Cart"
                    onClick={() => setIsOpen(true)}
                >
                    {/* Cart icon placeholder */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </div>

            {/* Overlay */}
            {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                </div>
                
                {/* Scrollable Content Area */}
                <div className="cart-content">
                    <div className="cart-content-box">
                        <div className="cart-header-row">
                            <FaRegClock size={34} className='cart-logo' />
                            <h1 className='delivery-time'>Delivery in 10 Minutes</h1>
                        </div>

                        {/* Cart Items */}
                        <div className='cart-items-wrapper'> 
                            {cartItems.map(item => (
                                <div key={item.id} className='cart-item-card'> 
                                    <div className='cart-item-img'>
                                        <img src={item.image} alt={item.name} className='img-fluid' />
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
                        
                        {/* Bill Details Section (New) */}
                        <BillDetails 
                            itemTotal={itemTotal} 
                            deliveryCharge={DELIVERY_CHARGE} 
                        />

                    </div>
                </div>

                {/* Fixed Footer: Place Order Button (New) */}
                <div className="cart-footer">
                    <button className='place-order-btn'>
                        <span className='order-total'>₹ {finalOrderTotal.toFixed(2)}</span>
                        <span>Place Order</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;