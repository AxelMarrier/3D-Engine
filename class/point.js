export class Point{
    constructor(vecteur, isVisible){
        this.position = vecteur
        this.isVisible = true;
    }

    draw(ctx){
        if(this.isVisible){
            ctx.fillStyle = "black";
            ctx.beginPath()
            ctx.arc(this.position.x, this.position.y, 5, 0, 2*Math.PI, false);
            ctx.fill()
        }   
    }
}