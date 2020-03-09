function getFirstSelector(selector) {
 return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  // this is interesting?
  return document.querySelector('#grand-node div div div div');
}

function inccreaseRankBy(n) {
  
}