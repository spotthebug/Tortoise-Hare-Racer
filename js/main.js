var car1 = document.getElementById('car-1');
var car2 = document.getElementById('car-2');
car1.style.marginLeft = ".1em";
car2.style.marginLeft = ".1em";

var endOfTrack = 65;
var players = [
  {
    id: 1,
    position: 0,
    keyCode: 38
  },
  {
    id: 2,
    position: 0,
    keyCode: 40
  }
]

var advancePlayer = function(keyCode) {

  for (var i = 0; i < players.length; i++) {
    if (keyCode === players[i].keyCode && players[i].position < endOfTrack) {
      players[i].position += 1;
      console.log()
      if (i === 0) {
        var marginLeft =  parseInt(car1.style.marginLeft, 10);
        car1.style.marginLeft = (marginLeft + 1) + 'em';
      }
      else {
        var marginLeft =  parseInt(car2.style.marginLeft, 10);
        car2.style.marginLeft = (marginLeft + 1) + 'em';
      }
      winner();
    }
  }
};

var winner = function() {
  if (this.players[0].position >= this.endOfTrack) {
    alert ("Player 1 wins!!");
  }
  else if (this.players[1].position >= this.endOfTrack){
    alert ("Player 2 wins!!");
  }
};

document.addEventListener('keydown', (event) => {
  advancePlayer(event.keyCode);
});


