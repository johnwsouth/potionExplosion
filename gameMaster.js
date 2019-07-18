class GameMaster {
  constructor(){
    this.player1 = new NewPlayer("1");
    this.player2 = new NewPlayer("2");
    this.dispenser = new MarbleDispenser();
    this.gameStartPotIndex = 1;






  }

    gameStartTurn(){
      this.player1.myTurn = true;
    }
    generatePotion(){
      if (this.player1.myTurn){
      var newPotion = new Potion("1");
      }
      else if (this.player1.myTurn){
      var newPotion = new Potion("2")
      }
      return newPotion;
    }

    generatePotionGameStart(){
      this.player1Potion = new Potion("1");
      this.player2Potion = new Potion("2");



      this.player1Potion.render();
      this.player2Potion.render();
      this.player1Potion.randomizePotion();
      this.player2Potion.randomizePotion();


    }

    gameStartRender(){
      this.dispenser.setUpDispenser();
      this.gameStartTurn();
      this.player1.render();
      this.player2.render();
      this.generatePotionGameStart()
    }

}
