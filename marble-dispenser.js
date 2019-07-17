$(document).ready(initializeApp);

function initializeApp() {
  var marbleD = new MarbleDispenser();
  marbleD.setUpDispenser();
}

class MarbleDispenser{
  constructor(){
    this.masterHolder = ['red', 'red', 'red', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow'];
    this.dispenserArray = [];
  }

  setUpDispenser() {
    var rowArray = [];
      for (var i = 0; i<5; i++){
        var row = $("<div>").addClass('row');
        $("body").append(row);

        for (var j= 0; j<9; j++ ) {
          this.randomizeMarbles();
              var red = $("<div>").addClass('red marble');
              var blue = $("<div>").addClass('blue marble');
              var yellow = $("<div>").addClass('yellow marble');
              if (this.masterHolder[j] === 'red') {
                rowArray.push(red);
                $(row).append(red);
              } else if (this.masterHolder[j] === 'blue') {
                rowArray.push(blue);
                $(row).append(blue);
              } else if (this.masterHolder[j] === 'yellow') {
                rowArray.push(yellow);
                $(row).append(yellow);
              }
              if (rowArray.length === 9) {
                this.dispenserArray.push(rowArray);
                rowArray = [];
              }
            }


          }
    return this.dispenserArray;
        }

  randomizeMarbles() {
    var tempArray = [];
    while (this.masterHolder.length) {
      var randNum = Math.floor(Math.random() * this.masterHolder.length);
      var randMarble = this.masterHolder[randNum];
      tempArray.push(randMarble);
      this.masterHolder.splice(randNum, 1);
    }

    this.masterHolder = tempArray;
  }
    }
