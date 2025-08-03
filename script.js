const board = document.getElementById("plinko-board");

// Generate pegs
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 7; col++) {
    const peg = document.createElement("div");
    peg.classList.add("peg");
    peg.style.top = `${row * 50 + 20}px`;
    peg.style.left = `${col * 40 + (row % 2 === 0 ? 20 : 0)}px`;
    board.appendChild(peg);
  }
}

function dropBall() {
  const ball = document.createElement("div");
  ball.classList.add("ball");
  board.appendChild(ball);

  let top = 0;
  let left = 145;

  let step = 0;

  const interval = setInterval(() => {
    if (step >= 8) {
      clearInterval(interval);
      return;
    }

    top += 50;
    const dir = Math.random() < 0.5 ? -20 : 20;
    left += dir;

    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`;

    step++;
  }, 200);
}
