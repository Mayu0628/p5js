// 春
var sketch1 = function(p) {
  let snow = [];
  let snowImg1;

  p.preload = function() {
    snowImg1 = p.loadImage("sakura.png");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
  }

  p.draw = function() {
    p.background(0);

    snow.push(new SnowFlake());

    for (let flake of snow) {
      flake.update();
      flake.display();
    }

    p.fill(255);
    p.textSize(40);
    p.textFont("Sawarabi Mincho");
    p.text("春", p.width / 2, p.height / 2);
  }

  class SnowFlake {
    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(-100, -10));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0.03);
      this.r = p.random(20, 50);
      this.angle = p.random(p.TWO_PI); // ランダムな角度を設定
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // ランダムな角度の変化を追加
      this.pos.x += p.cos(this.angle) * 2;
      this.angle += p.random(-0.05, 0.05);
    }

    display() {
      p.image(snowImg1, this.pos.x, this.pos.y, this.r, this.r);
    }
  }
};

// 夏
var sketch2 = function(p) {
  let snow = [];
  let snowImg1;

  p.preload = function() {
    snowImg1 = p.loadImage("leaf.png");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
  }

  p.draw = function() {
    p.background(0);

    snow.push(new SnowFlake());

    for (let flake of snow) {
      flake.update();
      flake.display();
    }

    p.fill(255);
    p.textSize(40);
    p.textFont("Sawarabi Mincho");
    p.text("夏", p.width / 2, p.height / 2);
  }

  class SnowFlake {
    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(-100, -10));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0.03);
      this.r = p.random(20, 50);
      this.angle = p.random(p.TWO_PI); // ランダムな角度を設定
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // ランダムな角度の変化を追加
      this.pos.x += p.cos(this.angle) * 2;
      this.angle += p.random(-0.05, 0.05);
    }

    display() {
      p.image(snowImg1, this.pos.x, this.pos.y, this.r, this.r);
    }
  }
};

// 秋
var sketch3 = function(p) {
  let snow = [];
  let snowImg1;

  p.preload = function() {
    snowImg1 = p.loadImage("momiji.png");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
  }

  p.draw = function() {
    p.background(0);

    snow.push(new SnowFlake());

    for (let flake of snow) {
      flake.update();
      flake.display();
    }

    p.fill(255);
    p.textSize(40);
    p.textFont("Sawarabi Mincho");
    p.text("秋", p.width / 2, p.height / 2);
  }

  class SnowFlake {
    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(-100, -10));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0.03);
      this.r = p.random(20, 50);
      this.angle = p.random(p.TWO_PI); // ランダムな角度を設定
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // ランダムな角度の変化を追加
      this.pos.x += p.cos(this.angle) * 2;
      this.angle += p.random(-0.05, 0.05);
    }

    display() {
      p.image(snowImg1, this.pos.x, this.pos.y, this.r, this.r);
    }
  }
};

// 冬
var sketch4 = function(p) {
  let snow = [];
  let snowImg1;

  p.preload = function() {
    snowImg1 = p.loadImage("snow.png");
  }

  p.setup = function() {
    p.createCanvas(300, 500);
  }

  p.draw = function() {
    p.background(0);

    snow.push(new SnowFlake());

    for (let flake of snow) {
      flake.update();
      flake.display();
    }

    p.fill(255);
    p.textSize(40);
    p.textFont("Sawarabi Mincho");
    p.text("冬", p.width / 2, p.height / 2);
  }

  class SnowFlake {
    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(-100, -10));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0.03);
      this.r = p.random(20, 50);
      this.angle = p.random(p.TWO_PI); // ランダムな角度を設定
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // ランダムな角度の変化を追加
      this.pos.x += p.cos(this.angle) * 2;
      this.angle += p.random(-0.05, 0.05);
    }

    display() {
      p.image(snowImg1, this.pos.x, this.pos.y, this.r, this.r);
    }
  }
};

// スケッチを作成
new p5(sketch1, 'container1');
new p5(sketch2, 'container2');
new p5(sketch3, 'container3');
new p5(sketch4, 'container4');
