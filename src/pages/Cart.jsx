import React, { useState } from 'react'
import '../pages/Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
    const pharmacies = [
        {
            id: 1,
            image: "https://5.imimg.com/data5/OR/JS/CQ/SELLER-54778673/img-20200606-wa0030.jpg",
            name: "Paracetamol Tablets IP Dolo-650",
            distance: "2.1 km",
            mrp: "34",
            discount: '10',
            price: '29',
            Link: '/pay'
        },
        {
            id: 2,
            image: "https://5.imimg.com/data5/OR/JS/CQ/SELLER-54778673/img-20200606-wa0030.jpg",
            name: "Paracetamol Tablets IP Dolo-650",
            distance: "2.1 km",
            mrp: "34",
            discount: '10',
            price: '29',
            Link: '/pay'
        },
        {
            id: 3,
            image: "https://5.imimg.com/data5/OR/JS/CQ/SELLER-54778673/img-20200606-wa0030.jpg",
            name: "Paracetamol Tablets IP Dolo-650",
            distance: "2.1 km",
            mrp: "34",
            discount: '10',
            price: '29',
            Link: '/pay'
        }
    ]

    // Track quantity per item by id
    const [counts, setCounts] = useState(
        pharmacies.reduce((acc, pharmacy) => {
            acc[pharmacy.id] = 0
            return acc
        }, {})
    )

    const increment = (id) => {
        setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const decrement = (id) => {
        setCounts((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0
        }))
    }

    return (
        <section className='cart-heading'>
            <h1 className='heading'>My cart</h1>

            <div className="cart-list">
                {pharmacies.map((pharmacy) => (
                    <div className="cart-card" key={pharmacy.id}>
                        <Link className="cart-image" to={pharmacy.Link}>
                            <img src={pharmacy.image} alt={pharmacy.name} />
                        </Link>
                        <div className="cart-name">
                            <h3 className="cart-title">{pharmacy.name}</h3>
                        </div>
                        <div className="cart-info">
                            <button className='cart-buttons' onClick={() => decrement(pharmacy.id)}>-</button>
                            <span className='mx-3'>{counts[pharmacy.id]}</span>
                            <button className='cart-buttons' onClick={() => increment(pharmacy.id)}>+</button>
                        </div>

                        <div className="cart-location">
                            <span className="cart-mrp">MRP: ₹{pharmacy.mrp}</span>
                            <span className="cart-discount">{pharmacy.discount}% off</span>
                            <span className="cart-price">₹{pharmacy.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cart
