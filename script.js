//import
import { Point } from './class/point.js';

//constantes
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const width = 750;
const height = 500;
const Points = [];

document.addEventListener('DOMContentLoaded', function (){
    //setup canvas
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    let point_1 = new Point(100,100,1);
    point_1.draw(ctx);
})