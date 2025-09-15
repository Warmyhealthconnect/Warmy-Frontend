import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import '../pages/MedProductspage.css'

function MedProductPage() {
  const [count, setCount] = useState(1);

  return (
    <div className="product-page">
      {/* Image section */}
      <div className="product-image">
        <img
          src="https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg"
          alt="Innovfol"
        />
      </div>

      {/* Info section */}
      <div className="product-info">
        <div className="product-header">
          <h2 className="product-title">Innovfol</h2>
          <div className="quantity-control">
            <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        <div className="product-description">
          <h4>Description</h4>
          <p>
            Offers the advantage of the active form of vitamin B; L-methyl
            folate (B9), mecobalamin 1500mcg (B12), Pyridoxal-5-phosphate (B6)
            along with Veg DHA soft-gel for better patient compliance
          </p>
          <p><strong>Specialty:</strong> Gynecologists</p>
          <p><strong>Segment:</strong> Maintenance of Healthy Pregnancy</p>
          <p><strong>Packaging:</strong> Strip of 10 Capsules</p>
        </div>

        <div className="product-footer">
          <div className="price">₹350</div>
          <button className="add-to-cart">Add to Cart</button>
          <button className="whatsapp-btn">
            <FaWhatsapp size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedProductPage;
