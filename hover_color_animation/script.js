const blueBtn = document.getElementById('blue');
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const purpleBtn = document.getElementById('purple');
const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
})
blueBtn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'blue';
});
redBtn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'red';
});
greenBtn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'green';
});
yellowBtn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'yellow';
});
purpleBtn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'purple';
});
