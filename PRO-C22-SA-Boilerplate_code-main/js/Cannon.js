class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonimg = loadImage("assests/canon.png")
    this.cannon2 = loadImage("assests/canonBase.png")
    
  }
  
  display() {
push()
translate(this.x,this.y)
rotate(this.angle)
Imagemode(CENTER)
image(this.cannonimg,0,0,this.width,this.height)
pop()
image(this.canon2,70,20,200,200)
  }
}
