import React, { useState } from "react";
import "./Payment.css";
import { FaGooglePay, FaCcPaypal, FaApplePay, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";

const upiOptions = [
  { id: "gpay", name: "Google Pay", logo: <FaGooglePay size={40} /> },
  { id: "paytm", name: "Paytm UPI", logo: <SiPaytm size={40} /> },
  { id: "phonepe", name: "PhonePe", logo: <SiPhonepe size={40} /> },
];

const otherOptions = [
  { id: "master", name: "Master Card", logo: <FaCcMastercard size={40} /> },
  { id: "paypal", name: "PayPal", logo: <FaCcPaypal size={40} /> },
  { id: "visa", name: "Visa", logo: <FaCcVisa size={40} /> },
  { id: "apple", name: "Apple Pay", logo: <FaApplePay size={40} /> },
];

function Payment() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="payment-container">
      <h1 className="payment-heading">Payment Method</h1>

      {/* UPI Block */}
      <div className="payment-upi">
        {upiOptions.map((method) => (
          <div
            key={method.id}
            className={`upi-option ${selected === method.id ? "selected" : ""}`}
            onClick={() => setSelected(method.id)}
          >
            <div className="upi-logo">{method.logo}</div>
            <span className="upi-name">{method.name}</span>
          </div>
        ))}
      </div>

      {/* Other Payment Options */}
      <div className="payment-list">
        {otherOptions.map((method) => (
          <div
            key={method.id}
            className={`payment-card ${selected === method.id ? "selected" : ""}`}
            onClick={() => setSelected(method.id)}
          >
            <div className="payment-info">
              <div className="payment-logo">{method.logo}</div>
              <span className="payment-name">{method.name}</span>
            </div>
            <input
              type="radio"
              name="payment"
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
