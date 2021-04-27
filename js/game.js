class Game{
    constructor(){}

    //read the gameState from the database
    getState(){
        var gamestateRef=database.ref('gamestate');
        gamestateRef.on("value",function(data){
            gameState = data.val();
    })
   }

   //write the gameState in to the database
   update(state){
       database.ref('/').update({
           'gameState':state
       })
   }
   
   //gameState 0 
   start(){

       if(gameState===0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
       }
   }
}