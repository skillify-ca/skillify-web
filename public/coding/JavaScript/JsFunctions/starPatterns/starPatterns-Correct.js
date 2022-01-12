function drawStar() {
  process.stdout.write("*");
}

function starPattern() {
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      drawStar();
    }
    console.log("");
  }
}
function starPattern2() {
  for (let i = 5; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      drawStar();
    }
    console.log("");
  }
}

starPattern();
console.log("");
starPattern2();
