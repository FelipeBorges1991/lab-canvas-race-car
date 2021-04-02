const ctx = canvas.getContext("2d");

// class player{
//   constructor(x, width, heigth speed){
//     this.speedX = 0;
//     this.x = x;
//     this.width = width;
//     this.height = heigth;
//   }

//   newPos() {
//     this.x += this.speedX;
//   }

//   left() {
//     return this.x;
//   }

//   right() {
//     return this.x + this.width;
//   }
// }

// class game {
//   constructor() {

//   }
// }

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const img = new Image();
    const car = new Image();
    car.src = `../images/car.png`;
    img.src = `../images/road.png`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(car, 225, 620, 50, 80);
    };
  }
};

window.addEventListener("load", () => {
  const car = new player(225, 620, 50, 80);

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowRight": {
        return (car.speedX += 2);
      }
      case "ArrowLeft": {
        return (car.speedX -= 2);
      }
    }
  });

  document.addEventListener("keyup", () => {
    car.speedX = 0;
  });
});
