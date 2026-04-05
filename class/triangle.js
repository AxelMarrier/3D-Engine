export class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.isVisible = true;
    }

    draw(ctx){
        if(this.isVisible){
            ctx.fillStyle = "black";
            ctx.beginPath()
            ctx.moveTo(this.point1.position.x, this.point1.position.y);
            ctx.lineTo(this.point2.position.x, this.point2.position.y);
            ctx.lineTo(this.point3.position.x, this.point3.position.y);
            ctx.lineTo(this.point1.position.x, this.point1.position.y);
            ctx.lineWidth = 1;
            ctx.stroke()
        }
    }
}