const colors = [
  "#FF6B6B",
  "#FFA500",
  "#FFD700",
  "#FF1493",
  "#9370DB",
  "#00CED1",
];

export function drawCircularPattern(ctx) {
  const centerX = 300;
  const centerY = 300;

  // Outer petals
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
    const x = centerX + Math.cos(angle) * 150;
    const y = centerY + Math.sin(angle) * 150;

    ctx.beginPath();
    ctx.arc(x, y, 60, 0, Math.PI * 2);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
  ctx.fillStyle = "#FF1493";
  ctx.fill();
  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 5;
  ctx.stroke();

  // Inner decoration
  ctx.beginPath();
  ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
}

export function drawStarPattern(ctx) {
  const centerX = 300;
  const centerY = 300;

  for (let layer = 0; layer < 3; layer++) {
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const radius = 100 + layer * 50;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.lineTo(
        centerX + Math.cos(angle + Math.PI / 8) * (radius * 0.5),
        centerY + Math.sin(angle + Math.PI / 8) * (radius * 0.5)
      );
      ctx.closePath();
      ctx.fillStyle = colors[(i + layer) % colors.length];
      ctx.fill();
      ctx.strokeStyle = "#FFD700";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Center star
  ctx.beginPath();
  ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.strokeStyle = "#FF6B6B";
  ctx.lineWidth = 4;
  ctx.stroke();
}

export function drawMandalaPattern(ctx) {
  const centerX = 300;
  const centerY = 300;

  // Outer rings
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8;

    for (let j = 1; j <= 3; j++) {
      const radius = j * 60;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        30,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.strokeStyle = "#FFD700";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Center mandala
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * 80, centerY + Math.sin(angle) * 80);
    ctx.strokeStyle = colors[i % colors.length];
    ctx.lineWidth = 8;
    ctx.stroke();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#FF1493";
  ctx.fill();
  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 5;
  ctx.stroke();
}
