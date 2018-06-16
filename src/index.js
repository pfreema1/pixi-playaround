// import printMe from './print.js';

(function() {
  class Player {
    constructor() {
      this.name = 'foooooobear';
    }

    sayName() {
      console.log('my name is:  ', this.name);
    }
  }

  let player = new Player();

  player.sayName();
})();
