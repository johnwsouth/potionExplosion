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
      this.handleClick = this.handleClick.bind(this);


    }
    randomizePotion(){

      var randArray = []
      for (var i = 0 ; i < 3 ; i++){
        var randomNum = Math.floor(Math.random() * 3 + 2);
        randArray.push(randomNum);
      }
      this.redMarbleMax = randArray[0];
      this.blueMarbleMax = randArray[1];
      this.yellowMarbleMax = randArray[2];

      this.redTile.text("" + this.redMarbleCurrentVal + "/" + this.redMarbleMax);
      this.blueTile.text("" + this.blueMarbleCurrentVal + "/" + this.blueMarbleMax);
      this.yellowTile.text("" + this.yellowMarbleCurrentVal + "/" + this.yellowMarbleMax);



    }
    completePotion(){
      if (this.redMarbleCurrentVal === this.redMarbleMax && this.blueMarbleCurrentVal === this.blueMarbleMax && this.yellowMarbleCurrentVal === this.yellowMarbleMax) {
        this.isComplete = true;
        this.addPoint();
      }

    }

    addPoint(){
      if(this.potionsPlayer === "1"){
        player1.completePotions += 1;
      }
      else if (this.potionsPlayer === "2") {
        player2.completePotions += 1;
      }
      removePotion();
    }

    removePotion(){
      this.potionContainer.remove();
      gameMaster.generatePotion();
    }

    handleClick(){

      if (gameMaster.player1.myTurn === true){
        for(var i = 0 ; i < gameMaster.player1.hand.length ; i++ ){
          if (gameMaster.player1.hand[i].hasClass("red") && gameMaster.player1Potion.redMarbleCurrentVal < gameMaster.player1Potion.redMarbleMax){
            gameMaster.player1.hand.splice(i,1);
            gameMaster.player1Potion.redMarbleCurrentVal++;
          }
          if (gameMaster.player1.hand[i].hasClass("blue") &&gameMaster.player1Potion.blueMarbleCurrentVal < gameMaster.player1Potion.blueMarbleMax) {
            gameMaster.player1.hand.splice(i, 1);
            gameMaster.player1Potion.blueMarbleCurrentVal++;
          }
          if (gameMaster.player1.hand[i].hasClass("yellow") &&gameMaster.player1Potion.yellowMarbleCurrentVal < gameMaster.player1Potion.yellowMarbleMax) {
            gameMaster.player1.hand.splice(i, 1);
            gameMaster.player1Potion.yellowMarbleCurrentVal++;
          }
        }
      }
      else if (gameMaster.player2.myTurn === true) {
        for (var i = 0; i < gameMaster.player2.hand.length; i++) {
          if (gameMaster.player2.hand[i].hasClass("red") &&gameMaster.player2Potion.redMarbleCurrentVal < gameMaster.player2Potion.redMarbleMax) {
            gameMaster.player2.hand.splice(i, 1);
            gameMaster.player2Potion.redMarbleCurrentVal++;
          }
          if (gameMaster.player2.hand[i].hasClass("blue") &&gameMaster.player2Potion.blueMarbleCurrentVal < gameMaster.player2Potion.blueMarbleMax) {
            gameMaster.player2.hand.splice(i, 1);
            gameMaster.player2Potion.blueMarbleCurrentVal++;
          }
          if (gameMaster.player2.hand[i].hasClass("yellow") &&gameMaster.player2Potion.yellowMarbleCurrentVal < gameMaster.player2Potion.yellowMarbleMax) {
            gameMaster.player2.hand.splice(i, 1);
            gameMaster.player2Potion.yellowMarbleCurrentVal++;
          }
        }
      }
      this.updateDisplay();
    }

    updateDisplay(){
      debugger;
      var player1 = $("[data-player='1']");
      if (gameMaster.player1.myTurn === true){
        player1.children("div:nth-child(1)").text("" + this.redMarbleCurrentVal + "/" + this.redMarbleMax);
        player1.children("div:nth-child(2)").text("" + this.blueMarbleCurrentVal + "/" + this.blueMarbleMax);
        player1.children("div:nth-child(3)").text("" + this.yellowMarbleCurrentVal + "/" + this.yellowMarbleMax);
      }

      var player2 = $("[data-player='2']");
      if (gameMaster.player2.myTurn === true) {
        player2.children("div:nth-child(1)").text("" + this.redMarbleCurrentVal + "/" + this.redMarbleMax);
        player2.children("div:nth-child(2)").text("" + this.blueMarbleCurrentVal + "/" + this.blueMarbleMax);
        player2.children("div:nth-child(3)").text("" + this.yellowMarbleCurrentVal + "/" + this.yellowMarbleMax);
      }
    }

    render(){

      this.potionContainer = $("<div>");
      this.redTile = $("<div>");
      this.blueTile = $("<div>");
      this.yellowTile = $("<div>");

      this.randomizePotion();

      this.redTile.addClass("red-tile tile");
      this.blueTile.addClass("blue-tile tile");
      this.yellowTile.addClass("yellow-tile tile");

      this.potionContainer.append(this.redTile);
      this.potionContainer.append(this.blueTile);
      this.potionContainer.append(this.yellowTile);
      this.potionContainer.addClass("potion-container");
      this.potionContainer.attr("data-player", this.potionsPlayer);

      this.potionContainer.click(this.handleClick)

      if (gameMaster.gameStartPotIndex === 1){
      gameMaster.player1.playerTile.append(this.potionContainer);
      gameMaster.gameStartPotIndex += 1;
      }
      else if (gameMaster.gameStartPotIndex === 2){
      gameMaster.player2.playerTile.append(this.potionContainer);
      }
    }
  }
