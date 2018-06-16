// import printMe from './print.js';

(function() {
  class Player {
    constructor(name) {
      this.name = name;
      this.width = 20;
      this.height = 20;
    }

    sayName() {
      console.log('my name is:  ', this.name);
    }
  }

  // set up canvas
  const c = document.getElementById('myCanvas');
  const ctx = c.getContext('2d');
  c.width = window.innerWidth;
  c.Height = window.innerHeight;

  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();

  let player = new Player('poophead');

  player.sayName();
})();
