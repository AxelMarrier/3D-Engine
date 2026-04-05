//import
import { Point } from './class/point.js';
import { Triangle } from './class/triangle.js';
import { Vecteur } from './class/vecteur.js';

//constantes
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const width = 750;
const height = 500;
const Points = [];

document.addEventListener('DOMContentLoaded', function (){
    function init(){
        //setup canvas
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        let point_1 = new Point(new Vecteur(100,100,0));
        let point_2 = new Point(new Vecteur(300,100,0));
        let point_3 = new Point(new Vecteur(100,300,0));
        point_1.draw(ctx);
        point_2.draw(ctx);
        point_3.draw(ctx);

        let triangle_1 = new Triangle(point_1, point_2, point_3);
        triangle_1.draw(ctx);
    }

    function update(){
        ctx.clearRect(0, 0, width, height);


        let point_1 = Points[0];
        point_1.x = point_1.x + 1;
        point_1.draw(ctx);


        requestAnimationFrame(update);
    }
    init()
    //update()
})