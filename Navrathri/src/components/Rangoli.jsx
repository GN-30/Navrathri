import React, { useEffect, useRef } from "react";
import {
  drawCircularPattern,
  drawStarPattern,
  drawMandalaPattern,
} from "../utils/rangoliPatterns";

function Rangoli({ pattern, isVisible }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isVisible && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = 600;
      canvas.height = 600;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw based on pattern
      switch (pattern) {
        case 0:
          drawCircularPattern(ctx);
          break;
        case 1:
          drawStarPattern(ctx);
          break;
        case 2:
          drawMandalaPattern(ctx);
          break;
        default:
          drawCircularPattern(ctx);
      }
    }
  }, [pattern, isVisible]);

  return (
    <div className={`rangoli-container ${isVisible ? "visible" : "hidden"}`}>
      <div className="rangoli-header">
        <h2>✨ AI Generated Rangoli ✨</h2>
        <p>Pattern {pattern + 1} of 3</p>
      </div>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="rangoli-canvas" />
      </div>
    </div>
  );
}

export default Rangoli;
