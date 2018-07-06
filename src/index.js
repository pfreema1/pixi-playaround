import * as PIXI from 'pixi.js';
import circleImage from '../images/circle.png';
import { attractorCircle } from './AttractorCircle';
import { moverCircle } from './MoverCircle';

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
  backgroundColor: 0x323232,
  antialias: true
});

document.body.appendChild(app.view);



attractorCircle.moverCircleRef = moverCircle;

app.stage.addChild(attractorCircle, moverCircle);








// animate
app.ticker.add(function(delta) {
  let force = attractorCircle.attract();
  moverCircle.applyForce(force, delta);

});

