import React, { useState, useEffect } from "react";
import Rangoli from "./components/Rangoli";
import GoddessImage from "./components/GoddessImage";
import VisitorCounter from "./components/VisitorCounter";
import VisitorForm from "./components/VisitorForm";
import BackgroundParticles from "./components/BackgroundParticles";
import "./styles/animations.css";

function App() {
  const [currentView, setCurrentView] = useState("rangoli");
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorName, setVisitorName] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [rangoliPattern, setRangoliPattern] = useState(0);

  // Auto-switch between rangoli and goddess every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((prev) => {
        if (prev === "rangoli") {
          return "goddess";
        } else {
          setRangoliPattern((prev) => (prev + 1) % 3);
          return "rangoli";
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAddVisitor = () => {
    if (visitorName.trim()) {
      setVisitorCount((prev) => prev + 1);
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setVisitorName("");
      }, 3000);
    }
  };

  return (
    <div className="app-container">
      <BackgroundParticles />

      <div className="content-wrapper">
        {/* Header */}
        <header className="header animate-fadeIn">
          <h1 className="main-title">🪔 Navrathri Festival 🪔</h1>
          <p className="subtitle">
            Deep Learning Enabled Festive Display Framework
          </p>
        </header>

        {/* Visitor Counter */}
        <VisitorCounter count={visitorCount} />

        {/* Welcome Message */}
        {showWelcome && (
          <div className="welcome-message animate-scaleIn">
            <h2>🙏 Welcome!</h2>
            <p>{visitorName}</p>
          </div>
        )}

        {/* Main Display Area */}
        <div className="display-container">
          <Rangoli
            pattern={rangoliPattern}
            isVisible={currentView === "rangoli"}
          />
          <GoddessImage isVisible={currentView === "goddess"} />
        </div>

        {/* Visitor Input Form */}
        <VisitorForm
          visitorName={visitorName}
          setVisitorName={setVisitorName}
          onSubmit={handleAddVisitor}
        />
      </div>
    </div>
  );
}

export default App;
