import React, { useState, useEffect } from "react";

function GoddessImage({ isVisible }) {
  const goddesses = [
    {
      name: "Durga",
      symbol: "🕉️",
      text: "दुर्गा",
      desc: "Victory of Good over Evil",
    },
    {
      name: "Lakshmi",
      symbol: "🪷",
      text: "लक्ष्मी",
      desc: "Goddess of Wealth and Prosperity",
    },
    {
      name: "Saraswati",
      symbol: "📿",
      text: "सरस्वती",
      desc: "Goddess of Knowledge and Arts",
    },
  ];

  const [currentGoddess, setCurrentGoddess] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCurrentGoddess((prev) => (prev + 1) % goddesses.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentGoddess]);

  const goddess = goddesses[currentGoddess];

  return (
    <div className={`goddess-container ${isVisible ? "visible" : "hidden"}`}>
      <div className="goddess-header">
        <h2>🙏 Goddess {goddess.name} 🙏</h2>
        <p>Blessing the Festival</p>
      </div>
      <div className="goddess-display">
        <div className="goddess-content animate-pulse-slow">
          <div className="goddess-symbol">{goddess.symbol}</div>
          <p className="goddess-text">{goddess.text}</p>
          <p className="goddess-name-en">Goddess {goddess.name}</p>
          <p className="goddess-desc">{goddess.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default GoddessImage;
