function getFirstSelector(selector) {
 return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  // this one broke my brain?
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll(".ranked-list li");
  console.log(rankedList);
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}