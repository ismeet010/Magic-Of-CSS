var yearsPassed = 0;

function startCounter() {
  document.getElementById('counter').innerHTML = yearsPassed + " Earth years have passed.";
  
  yearsPassed++;
  setTimeout(startCounter, 3650); //Restarts the function every 3.65 seconds.
}