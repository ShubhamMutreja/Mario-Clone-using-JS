let animation = {
    update(gameObj)
    {
        let mario = gameObj.entity.mario;
        mario.currentState(gameObj);
    }
}