//left right controls etc
let input = {
    down:{},
    pressed:{},
    init()
    {
        //event listner keyboard
        //e.code throws the key name like space or arrow down
        //when they are pressed.
        
        window.addEventListener("keydown",(e)=>{
            this.down[e.code] = true;
              
        })
        window.addEventListener("keyup",(e)=>{
            //console.log(e.code);
            delete this.down[e.code];
            delete this.pressed[e.code];
        })
    }
    ,
    update(gameObj)
    {
        let mario = gameObj.entity.mario
        if(this.isDown("ArrowLeft"))
        {
            //go left
            mario.posX -= mario.velX;
            mario.currentDirection = "left";
            mario.currentState = mario.states.walkingAnim;
        }
        if(this.isDown("ArrowRight"))
        {
            //go right
            mario.posX += mario.velX;
            mario.currentDirection = "right";
            mario.currentState = mario.states.walkingAnim;
        }
        //console.log(mario.velY)
        if(this.isPressed("Space"))
        {
            if(mario.velY == 0.8)
            {
                mario.velY -= 15;
                mario.currentState = mario.states.jumpingAnim;
            }
        }
    }
    ,
    //checks if key is pressed or not. will tell what to do
    isDown(key)
    {
        return this.down[key];
    }
    ,
    isPressed(key)
    {
        if(this.pressed[key])
        {
            return false;
        }
        else if(this.down[key])
        {
            return true;
        }
    }
}