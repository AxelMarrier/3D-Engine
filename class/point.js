export class Point{
    constructor(_x, _y ,_z){
        this.x = _x;
        this.y = _y;
        this.z = _z;
        this.isVisible = true;
    }

    draw(ctx){
        if(this.isVisible){
            ctx.fillStyle = "black";
            ctx.beginPath()
            ctx.arc(this.x, this.y, 20, 0, 2*Math.PI, false);
            ctx.fill()
        }   
    }
}