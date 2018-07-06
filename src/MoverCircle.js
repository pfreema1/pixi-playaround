import * as PIXI from 'pixi.js';
import circleImage from '../images/circle.png';

export let moverCircle = PIXI.Sprite.fromImage(circleImage);

moverCircle.anchor.set(0.5);

moverCircle.x = 470;
moverCircle.y = 90;

moverCircle.mass = 1;


moverCircle.velocity = {
  x: 25,
  y: .1
};

moverCircle.applyForce = function(force, delta) {
    // update velocity
    moverCircle.velocity.x += force.x;
    moverCircle.velocity.y += force.y;

    moverCircle.x += moverCircle.velocity.x * delta;
    moverCircle.y += moverCircle.velocity.y * delta;
};
