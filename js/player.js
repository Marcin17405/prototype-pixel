class Player {
    constructor(spriteSheetUrl, frameCount, frameSpeed, frameDelay, canvasWidth, canvasHeight) {
      this.sprite = new Image();
      this.sprite.src = spriteSheetUrl;
      this.spriteWidth = 48;
      this.spriteHeight = 48;
      this.frameCount = frameCount;
      this.frameSpeed = frameSpeed;
      this.frameDelay = frameDelay;
      this.direction = 0; 
      this.frameIndex = 0;
      this.frameDelayCount = 0;
      this.counter = 0;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.x = canvasWidth / 2 - this.spriteWidth / 2;
      this.y = canvasHeight / 2 - this.spriteHeight / 2;
    }

    update(keys) {
      let speed = 2;
      let dx = 0;
      let dy = 0;
      if(keys[16]){
        speed = 3
      }
      if (keys[37] && this.x >-17) { // Left arrow key
        dx -= speed;
        this.animateLeft();
      }
      if (keys[38] && this.y >-16) { // Up arrow key
        dy -= speed;
        this.animateUp();
      }
      if (keys[39] && this.x +this.spriteWidth <657) { // Right arrow key
        dx += speed;
        this.animateRight();
      }
      if (keys[40]&& this.y+this.spriteHeight <416) { // Down arrow key
        dy += speed;
        this.animateDown();
      }
      if (!keys[37] && !keys[38] && !keys[39] && !keys[40]){
        this.animateIdle();
      }
      if (dx !== 0 && dy !== 0) {
        dx *= Math.sqrt(0.5);
        dy *= Math.sqrt(0.5);
      }

      this.x += dx;
      this.y += dy;

      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      }

    draw(ctx) {     
      ctx.drawImage(this.sprite, this.frameIndex * this.spriteWidth, this.direction * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
    }

    animateDown() {
      this.direction = 0;
      if (this.counter % this.frameSpeed === 0) {
        if (this.frameDelayCount >= this.frameDelay) {
          this.frameIndex =2+(this.frameIndex + 1) % this.frameCount;
          this.frameDelayCount = 0;
        } else {
          this.frameDelayCount++;
        }
      }
      this.counter++;
    }

    animateLeft() {
      this.direction = 2;
      if (this.counter % this.frameSpeed === 0) {
        if (this.frameDelayCount >= this.frameDelay) {
          this.frameIndex =2+(this.frameIndex + 1) % this.frameCount;
          this.frameDelayCount = 0;
        } else {
          this.frameDelayCount++;
        }
      }
      this.counter++;
    }

    animateRight() {
      this.direction = 3;
      if (this.counter % this.frameSpeed === 0) {
        if (this.frameDelayCount >= this.frameDelay) {
          this.frameIndex =2+(this.frameIndex + 1) % this.frameCount;
          this.frameDelayCount = 0;
        } else {
          this.frameDelayCount++;
        }
      }
      this.counter++;
    }

    animateUp() {
      this.direction = 1;
      if (this.counter % this.frameSpeed === 0) {
        if (this.frameDelayCount >= this.frameDelay) {
          this.frameIndex =2+(this.frameIndex + 1) % this.frameCount;
          this.frameDelayCount = 0;
        } else {
          this.frameDelayCount++;
        }
      }
      this.counter++;
    }

    animateIdle() {
      this.direction = 0; 
      if (this.counter % this.frameSpeed === 0) {
        if (this.frameDelayCount >= this.frameDelay) {
          this.frameIndex = (this.frameIndex + 1) % 2; 
          this.frameDelayCount = -2;
        } else {
          this.frameDelayCount++;
        }
      }
      this.counter++;
    }
  }
 export {Player}; 