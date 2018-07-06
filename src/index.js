import * as PIXI from 'pixi.js';
import circleImage from '../images/circle.png';
import { attractorCircle } from './AttractorCircle';
import { moverCircle } from './MoverCircle';

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
  backgroundColor: 0x323232,
  antialias: true
});

document.body.appendChild(app.view);

const returnArrOfMovers = () => {
  let arrayOfMovers = [];



  return arrayOfMovers;
}



attractorCircle.moverCircleRef = moverCircle;

const blurFilter = new PIXI.filters.BlurFilter(8, 3);
const noiseFilter = new PIXI.filters.NoiseFilter();
app.stage.filters = [blurFilter, noiseFilter];
let count = 0;


app.stage.addChild(attractorCircle, moverCircle);

// animate
app.ticker.add(function(delta) {
  let force = attractorCircle.attract();
  moverCircle.applyForce(force, delta);


  let matrix = blurFilter.matrix;

  count += 0.1;

  blurFilter.blur = force.x * 5;

  
});

