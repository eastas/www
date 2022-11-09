let config = {
    //设计图的宽度
    paw: 2000,

}
let farmbg;
let catimg, dog, henimg;
//Jitter 类
//云类
function preload() {
    //加载元素
    // 背景
    plowlandBg = loadImage('../images/bullscence/bullBgnull.png');
    //云朵
    cloudImg = loadImage('../images/bullscence/cloud.png');
    //犁耙
    rakeImg = loadImage('../images/bullscence/rake.png');
    //牛 动态
    bullImg = loadImage('../images/bullscence/bull.gif');
    //农民白白动态
    farmerImg = loadImage('../images/bullscence/farmer.gif');
    //静态所有
    staticAll = loadImage('../images/bullscence/static.png');
    //蝴蝶动态 动态
    butterflyImg = loadImage('../images/bullscence/butterfly.gif');
    //太阳公公
    sunImg = loadImage('../images/bullscence/sun.png');


}
// let x, y;


// Jitter 类
let clouds = []; // 声明物件
// let chick = [];

function setup() {
    createCanvas(windowWidth, windowHeight);


    // 创造物件
    for (let i = 0; i < 10; i++) {
        clouds.push(new cloud());
    }
    
  

}

function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(244);
    // image(farmbg, 600, 0, 800, 600)
    background(plowlandBg);

    //循环生成云
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].move();
        clouds[i].display();
    }




}

class cloud {
    constructor() {
        this.img = cloudImg;

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




function tocalthe(pw) {
    let cw = width / 100;

    let rel = ((pw * width) / config.paw); //结果为当前canvan宽度的倍数



    return rel;

}