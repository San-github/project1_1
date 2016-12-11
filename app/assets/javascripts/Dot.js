function Dot() {
  this.show = function(tempX, tempY, rX, rY) {
    this.x = tempX;
    this.y = tempY;
    ellipse(this.x, this.y, rX, rY)
  }
}
