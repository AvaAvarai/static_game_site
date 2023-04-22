document.addEventListener('keydown', function(event) {
  let player = document.querySelector('#player');
  let computer = document.querySelector('#computer');

  computer.style.left = "500px";

  if (event.key === 'ArrowUp') {
    console.log("Up arrow pressed")
    
  }
  else if (event.key === 'ArrowDown') {
    console.log("Down arrow pressed")
  }
  console.log(event.key);
});
