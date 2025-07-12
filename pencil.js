const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

canvas.addEventListener("mousedown", (e) => {
  const { x, y } = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const { x, y } = getMousePos(e);
  ctx.lineTo(x, y);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.closePath();
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
  ctx.closePath();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
