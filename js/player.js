class Player{
    constructor(){}

    getCount(){
        var playercountRef = database.ref('playerCount');
        playercountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            'playerCount' : count
        })
    }

    update(name){
        //player1 = player + 1
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            'name' : name
        })
    }
}