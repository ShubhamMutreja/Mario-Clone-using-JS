//sprite sheets cutouts and extract.
class Sprite
{
    constructor(img,srcX,srcY,srcW,srcH)
    {
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
    }
}

//placing entities on the 2d co-ordinate system;
class Entity
{
    constructor(sprite,type,posX,posY,width,height)
    {
        this.sprite = sprite;
        this.type = type;
        //co-ordinates in game;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
}