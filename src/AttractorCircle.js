import * as PIXI from 'pixi.js';
import circleImage from '../images/circle.png';

const G = 1;

export let attractorCircle = PIXI.Sprite.fromImage(circleImage);

attractorCircle.anchor.set(0.5);
attractorCircle.tint = 0x22222;

attractorCircle.x = window.innerWidth / 2;
attractorCircle.y = window.innerHeight / 2;

attractorCircle.mass = 1;

attractorCircle.interactive = true;

attractorCircle.moverCircleRef = null;

attractorCircle.attract = function() {

    // subtract attractors location from movers location - direction of the force!
    let force = {
        x: attractorCircle.x - this.moverCircleRef.x,
        y: attractorCircle.y - this.moverCircleRef.y
    };

    // length of vector
    let d = Math.sqrt(force.x * force.x, force.y * force.y);


    // constrain d between 5 and 25
    if(d > 10) {
        d = 10;
    } else if(d < 5) {
        d = 5;
    }

    // normalize that force
    let normalizedVector = {
        x: force.x / d,
        y: force.y / d
    };

    let strength = ((G * attractorCircle.mass * this.moverCircleRef.mass) / (d * d)) / 3;
    console.log('force:  ', force);

    // put magnitude and direction together - force multiplied by strength
    force.x = force.x * strength;
    force.y = force.y * strength;


    return force;

};

// mouse interaction
attractorCircle.on('pointerdown', onDragStart)
  .on('pointerup', onDragEnd)
  .on('pointerupoutside', onDragEnd)
  .on('pointermove', onDragMove);

function onDragStart(event) {
  this.data = event.data;
  this.dragging = true;
}

function onDragEnd() {
  this.dragging = false;
  this.data = null;
}

function onDragMove() {
  if (this.dragging) {
    let newPos = this.data.getLocalPosition(this.parent);
    this.x = newPos.x;
    this.y = newPos.y;
  }
}