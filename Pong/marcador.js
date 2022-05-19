let marcadorPlayer1;
let marcadorPlayer2;

marcadorPlayer1 = 0;
marcadorPlayer2 = 0;

if (bollaY >= height) {
    bollaY = height/2;
    bollaX = width/2
    marcadorPlayer1 ++;
  }

  if (bollaY <= 0) {
    bollaY = height/2;
    bollaX = width/2;
    marcadorPlayer2 ++;
  }