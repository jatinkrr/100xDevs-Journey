class rectangle {
    constructor(height,width,color){
        this.width=width;
        this.height = height;
        this.color= color;
    }

    area(){
        const area = this.height * this.width;
        return area;
    }

    paint(){
        console.log(`this is ${this.color} color`)
    }
}

const rect= new rectangle(10,20,"blue");
const area = rect.area();
console.log(area)
console.log(rect.paint())