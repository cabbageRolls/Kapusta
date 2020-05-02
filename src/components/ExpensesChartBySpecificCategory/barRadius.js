import Chart from 'chart.js';
Chart.elements.Rectangle.prototype.draw = function () {
  const ctx = this._chart.ctx;
  const vm = this._view;
  let left, right, top, bottom, borderSkipped, radius;
  let borderWidth = vm.borderWidth;
  const cornerRadius = vm.width / 3;
  left = vm.x - vm.width / 2;
  right = vm.x + vm.width / 2;
  top = vm.y;
  bottom = vm.base;
  borderSkipped = vm.borderSkipped || 'bottom';
  if (borderWidth) {
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
  }
  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;
  const corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];
  let borders = ['bottom', 'left', 'top', 'right'];
  let startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }
  // Draw rectangle from 'startCorner'
  let corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (let i = 1; i < 3; i++) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;
    if (nextCornerId === 4) {
      nextCornerId = 0;
    }

    cornerAt(nextCornerId);

    const width = corners[2][0] - corners[1][0];
    const height = corners[0][1] - corners[1][1];
    const x = corners[1][0];
    const y = corners[1][1];

    radius = cornerRadius;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};
