function parseInput(input) {
  var parsedInput = []
  for (var i = 0; i < input.length - 1; ++i)
    parsedInput.push({
      'command' : input[i].split(" ")[0],
      'unit'    : parseInt(input[i].split(" ")[1])
    })
  return parsedInput  
}

function requestListener () {
  var horizontal = depth = 0 
  parseInput(this.responseText.split("\n")).forEach(function(movement) {

    switch (movement.command){
      case 'forward': horizontal += movement.unit; break;
      case 'down'   : depth      += movement.unit; break;
      case 'up'     : depth      -= movement.unit; break;
    }
  })
  console.log(horizontal * depth)
}

var request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://adventofcode.com/2021/day/2/input");
request.send();