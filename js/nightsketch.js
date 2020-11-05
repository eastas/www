let config = {
    //设计图的宽度
    paw: 2000,

}
let farmbg;
let catimg, dog, henimg;
//Jitter 类
//云类

class clouds {
    constructor() {
        this.img = movecloudimg;

        this.x = random(width);
        this.y = random(height / 9);
        // this.diameter = random(10, 30);
        this.speed = random(.8, 1.5);
        this.flag = random(4, 8);
        this.width = this.img.width / this.flag;
        this.height = this.img.height / this.flag;
    }

    // mouseClicked(tchange);

    // tchange() {
    //     fill(255, 110, 24, .5)
    // }


    move() {
        // this.x += random(-this.speed, this.speed);
        // this.y += random(-this.speed, this.speed);
        if (this.x > width) {



            this.x = -this.img.width;
            this.y = random(height / 10);
            this.speed = random(0.8, 1.5);
            this.flag = random(4, 8);

            this.width = this.img.width / this.flag;
            this.height = this.img.height / this.flag;
            if (windowWidth >= 1000) {

                this.flag = random(3.5, 7.5);

            } else if (windowWidth >= 800) {
                this.flag = random(4, 8);

            } else if (windowWidth >= 400) {
                this.flag = random(3.5, 6.5);

            }

        }
        this.x += this.speed;

        // this.y += this.speed;
    }

    display() {
        image(this.img, this.x, this.y, this.width, this.height)
            // ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

class chicks {
    //  imgBox=[];
    constructor() {

        this.img = chickimg2;
        this.x = random(width / 15, width / 5);

        this.y = random(height / 2, height / 2.4);
        this.width = this.img.width / 2;
        this.height = this.img.height / 2;
        rotate(random(radians(90), radians(-10)));


        translate(this.x + this.width / 2, this.y + this.height / 2);

    }
    move() {
        
        if (this.x > width / 3.9) {
            this.x = random(width / 15, width / 5);
            this.y = random(height / 2, height / 2.5);
            
            
            
        } else {
            
            this.x = this.x + random(-.3, .8);
            // this.y = random(height / 2, height / 2.4);
            
        }
        
        // this.y = random(height / 2, height / 2.4);
    }
    display() {

        image(this.img, this.x, this.y, this.width, this.height);
        // image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);

    }


}


function preload() {
    //加载元素
    nightbg = loadImage('../images/nightscence/nightbg.png');
    movecloudimg = loadImage('../images/nightscence/grayCloud.png');
    // farmcloud2 = loadImage('../images/farmscene/farmcloud2.png');
   
}
// let x, y;


// Jitter 类
let cloud = []; // 声明物件
let chick = [];

// function setup() {
//     createCanvas(windowWidth, windowHeight);


//     // 创造物件
//     for (let i = 0; i < 8; i++) {
//         cloud.push(new clouds());
//     }
   


// }

// function draw() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(244);
//     // image(farmbg, 600, 0, 800, 600)
//     background(nightbg);

//     //循环生成云
//     for (let i = 0; i < clouds.length; i++) {
//         cloud[i].move();
//         cloud[i].display();
//     }
  


// }




