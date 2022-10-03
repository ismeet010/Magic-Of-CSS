
//Sphere Animation
const Texts = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'BOOTSTRAP',
  'REACT',
  'ANGULAR',
  'PYTHON',
  'SASS',
  'GIT',
  'SQL',
  'JQUERY',
  'JAVA',
]

var tagCloud = TagCloud('.Sphere', Texts, {
  // Sphere radius in px
  radius: 240,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)]
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true,
});
// console.log(document.querySelector('.Sphere'));
// Giving color to each text in sphere
// var color = '#67DDF2';
// document.querySelector('.Sphere').style.color = color;

// Giving random colors to the text in sphere
var randomColor = Math.floor(Math.random()*16777215).toString(16);

document.querySelector('.Sphere').style.color = '#'+randomColor;

//colour of the text will change every time you refresh