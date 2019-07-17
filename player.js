
class NewPlayer(){
  constructor(playerNumber){
    this.completePotions = 0;
    this.hand = [];
    this.myTurn = false;
    this.playerNumber = playerNumber;

  }
  function endTurn() {
    //callback of click handler
    this.myTurn = false;
    player2.myTurn = true;
    MarbleDispenser.takeMarbles();
  }
  function render(){
    this.playerTile = $("<div>");
    this.playerTile.addClass("player-tile"+playerNumber);

  }
}
