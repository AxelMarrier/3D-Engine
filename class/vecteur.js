export class Vecteur {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    normalize(){
        let sum = this.x + this.y + this.z;
        this.x = this.x / sum;
        this.y = this.y / sum;
        this.z = this.z / sum;
    }

    static add(vect1, vect2){
        return new Vecteur(vect1.x + vect2.x, vect1.y + vect2.y, vect1.z + vect2.z );
    }

    static sub(vect1, vect2){
        return new Vecteur(vect1.x - vect2.x, vect1.y - vect2.y, vect1.z - vect2.z );
    }

    static cross(vect1, vect2){
        let newX = vect1.y * vect2.z - vect1.z * vect2.y;
        let newY = vect1.z * vect2.x - vect1.x * vect2.z;
        let newZ = vect1.x * vect2.y - vect1.y * vect2.x;
        return new Vecteur(newX, newY, newZ);
    }

    static dot(vect1, vect2){
        return vect1.x * vect2.x + vect1.y * vect2.y + vect1.z + vect2.z;
    }
}