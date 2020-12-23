//alert("js bish!!");
//SOLID principal - ek banda ek kaam
const render = {
    init(gameObj)
    {
        gameObj.tool.fillStyle = "#3499db"; //blue color
        //draw sky.
        gameObj.tool.fillRect(0,0,window.innerWidth,window.innerHeight);
        //gameObj.tool.drawImage(castleImage,400,400,200,150);
        let mario = gameObj.entity.mario;
        gameObj.tool.drawImage(mario.sprite.img
                                    ,mario.sprite.srcX
                                    ,mario.sprite.srcY
                                    ,mario.sprite.srcW
                                    ,mario.sprite.srcH
                                    ,mario.posX,mario.posY,mario.width,mario.height);
        gameObj.levelBuilder.stock(gameObj);
    }
    ,
    update(gameObj)
    {
        gameObj.tool.fillStyle = "#3499db"; //blue color
        //draw sky.
        gameObj.tool.clearRect(0,0,window.innerWidth,innerHeight);
        gameObj.tool.fillRect(0,0,window.innerWidth,window.innerHeight);
        gameObj.levelBuilder.render(gameObj);
        let mario = gameObj.entity.mario;
        gameObj.tool.drawImage(mario.sprite.img
                                    ,mario.sprite.srcX
                                    ,mario.sprite.srcY
                                    ,mario.sprite.srcW
                                    ,mario.sprite.srcH
                                    ,mario.posX,mario.posY,mario.width,mario.height);
                                    
    }
}
class Game
{
    init() // basic setup of game;
    {
        preload().then(()=>{
            const canvas = document.querySelector(".board"); //selecting canvas
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            const tool = canvas.getContext("2d");
            let entity = {}

            let gameObj = {
                tool,canvas,entity,animFrame:0,
                levelBuilder:new LevelBuilder(levelOne)
            }
            
            tool.scale(2.74,2.74);
            let mario = new Mario(spriteSheetImage,175,0,18,18);
            gameObj.entity.mario = mario;
            gameObj.entity.scenery = [];
            render.init(gameObj);
            input.init();
            this.update(gameObj);
        })
    }
    update(gameObj)
    {
        function gameloop()
        {
            //console.log("hello",Math.random());
            input.update(gameObj);
            animation.update(gameObj);
            physx.update(gameObj);
            render.update(gameObj);
            gameObj.animFrame++;
            requestAnimationFrame(gameloop);
        }
        gameloop();
    }
    reset() // resets the game using reload function;
    {
        location.reload();
    }
}
const game = new Game();
game.init();

