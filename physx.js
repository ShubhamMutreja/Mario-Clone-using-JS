let physx = {
    update(gameObj)
    {
        this.checkCollision(gameObj.entity.mario);
        this.gravity(gameObj.entity.mario);   
    }
    ,
    gravity(entity)
    {
        entity.velY += 0.8;
        entity.posY += entity.velY;
    }
    ,
    checkCollision(entity)
    {
        if(entity.posY + entity.height >= 180 && entity.velY >0)
        {
            entity.posY = 172;
            entity.velY = 0;
            entity.currentState = entity.states.standingAnim;
        }
    }
}
