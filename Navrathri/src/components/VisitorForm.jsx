import React from "react";

function VisitorForm({ visitorName, setVisitorName, onSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="visitor-form">
      <div className="form-container">
        <label className="form-label">Enter Your Name:</label>
        <div className="form-input-group">
          <input
            type="text"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Your name here..."
            className="form-input"
          />
          <button onClick={onSubmit} className="form-button">
            Join 🪔
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisitorForm;
