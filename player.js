
class NewPlayer{
  constructor(playerNumber){
    this.completePotions = 0;
    this.hand = [];
    this.myTurn = false;
    this.playerNumber = playerNumber;

  }
  endTurn() {
    this.myTurn = false;
    player2.myTurn = true;
    //MarbleDispenser.takeMarbles();
  }
  render(){
    this.playerTile = $("<div>");
    //this.playerTile.attr("data-player",this.playerNumber);
    this.playerTile.addClass("player");


    var body = $("body");
    body.append(this.playerTile);


  }
}
