class rectangle{
    constructor(height,width,color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area= this.height * this.width;
        return area;
    }

    paint(){
        console.log(`color is ${this.color}`);
        
    }
}

    const ans = new rectangle(4,2,"blue")
    const area = ans.area();
    console.log(area);
    console.log(ans.paint());