class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
        this.image = loadImage("images/player.png");
        this.visibility =255
       
    }
    display(){
    this.y = mouseY;
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width*3,this.height*3);
    }
    disappear(){
       
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.x,this.y,this.width*3,this.width*3)
    }
}