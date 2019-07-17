class Potion {
  constructor(player){
      this.redMarbleMax = null;
      this.blueMarbleMax = null;
      this.yellowMarbleMax = null;

      this.redMarbleCurrentVal = 0;
      this.blueMarbleCurrentVal = 0;
      this.yellowMarbleCurrentVal = 0;

      this.isComplete = false;
      this.potionsPlayer = player;

      this.render = this.render.bind(this);


    }
    function randomizePotion(){

      var randArray = []
      for (var i = 0 ; i < 3 ; i++){
        var randomNum = Math.floor(Math.random() * 3 + 2);
        randArray.push(randomNum);
      }
      this.redMarbleMax = randArray[0];
      this.blueMarbleMax = randArray[1];
      this.yellowMarbleMax = randArray[2];

      redTile.text("" + this.redMarbleCurrentVal + "/" + this.redMarbleMax);
      blueTile.text("" + this.blueMarbleCurrentVal + "/" + this.blueMarbleMax);
      yellowTile.text("" + this.yellowMarbleCurrentVal + "/" + this.yellowMarbleMax);



    }
    function completePotion(){
      if (this.redMarbleCurrentVal === this.redMarbleMax && this.blueMarbleCurrentVal === this.blueMarbleMax && this.yellowMarbleCurrentVal === this.yellowMarbleMax) {
        this.isComplete = true;
        this.addPoint();
      }

    }

    function addPoint(){
      if(this.potionsPlayer === "1"){
        player1.completePotions += 1;
      }
      else if (this.potionsPlayer === "2") {
        player2.completePotions += 1;
      }
      removePotion();
    }

    function removePotion(){
      this.potionContainer.remove();
      gameMaster.generatePotion();
    }

    function render(){
      var potionContainer = ("<div>");
      var redTile = $("<div>");
      var blueTile = $("<div>");
      var yellowTile = $("<div>");


      redTile.addClass("red-tile");
      blueTile.addClass("blue-tile");
      yellowTile.addClass("yellow-tile");

      potionContainer.append(redTile);
      potionContainer.append(blueTile);
      potionContainer.append(yellowTile);

      potionContainer.attr("data-player", this.potionsPlayer);

      NewPlayer.playerTile.append(playerTile);
    }
  }
}
