let snow = [];
let snowImg1, snowImg2;

function preload() {
  snowImg1 = loadImage("nikukyu.png");
  snowImg2 = loadImage("nikukyuu2.png");
}

// 画面全体
function setup() {
  createCanvas(1700, 730);
}

function draw() {
  background(255); // 背景を白に設定

  snow.push(new SnowFlake());

  for (let flake of snow) {
    flake.update();
    flake.display();
  }

  fill(0); // テキストの色を黒に設定
  textSize(50); // テキストのサイズを設定
  textFont("Sawarabi Mincho");
  textAlign(CENTER, CENTER); // テキストの位置を中央に設定
  text("投票完了", width / 2, height / 2); // テキストを中央に描画
}

class SnowFlake {
  constructor() {
    this.pos = createVector(random(width), random(-100, -10));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.03);
    this.r = random(20, 50);
    this.img = random([snowImg1, snowImg2]); // ランダムに画像を選択
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display() {
    image(this.img, this.pos.x, this.pos.y, this.r, this.r);
  }
}
