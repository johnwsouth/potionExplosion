

class MarbleDispenser{
  constructor(){
    this.masterHolder = ['red', 'red', 'red', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow'];
    this.dispenserArray = [];
    this.marbleHandler = this.marbleHandler.bind(this);
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

  setUpDispenser() {
    var rowArray = [];
      for (var i = 0; i<5; i++){
        var row = $("<div>").addClass('row');
        $(".marbleDispenser").append(row);

        for (var j= 0; j<9; j++ ) {
          this.randomizeMarbles();
          var color = this.masterHolder[j];
          var marble = $("<div>").addClass(color + ' marble');

          rowArray.push(marble);
          $(row).append(marble);
            }
        this.dispenserArray.push(rowArray);
        rowArray = [];
          }
          return this.dispenserArray;
        }


  marbleHandler(event) {
    console.log('DA:', this);
    var currentMarble = $(event.currentTarget);
    var marbleIndex = currentMarble.index();
    var marbleRowIndex = currentMarble.closest('.row').index();
    var currentMarbleBroIndex = marbleIndex + 1;
    var currentMarbleSisIndex = marbleIndex - 1;
    var currentMarbleBro = this.dispenserArray[marbleRowIndex][currentMarbleBroIndex];
    var currentMarbleSis = this.dispenserArray[marbleRowIndex][currentMarbleSisIndex];

    if (currentMarble.attr('class') === currentMarbleBro.attr('class') && currentMarble.attr('class') === currentMarbleSis.attr('class')) {
       currentMarble.remove();
       currentMarbleBro.remove();
       currentMarbleSis.remove();
    }
  }



  marbleClick(){
    $(".marble").on('click', this.marbleHandler);
  }
    }
