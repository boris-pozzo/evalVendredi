var select = document.getElementById("select");
var input = document.getElementById("input");
var button = document.getElementById("button");

// ========== elements html ========== //
var listLike = document.getElementById("list-like");
var listNotLike = document.getElementById("list-not-like");
var listLearned = document.getElementById("list-learned");
var listNotLearned = document.getElementById("list-not-learned");

var choice;
var tab = { like: [], notLike: [], learned: [], notLearned: [] };

select.onchange = function() {
  choice = parseInt(this.value);
  console.log(choice);
};

button.onclick = function() {
  if (choice === undefined) choice = 1;
  sendToArray(input.value);
};

function sendToArray(phrase) {
  switch (choice) {
    case 1:
      mapArray(tab.like, phrase, listLike);
      break;
    case 2:
      mapArray(tab.notLike, phrase, listNotLike);
      break;
    case 3:
      mapArray(tab.learned, phrase, listLearned);
      break;
    case 4:
      mapArray(tab.notLearned, phrase, listNotLearned);
      break;
    default:
      throw new Error("Vous devez faire un choix...");
  }
  input.value = "";
}

function mapArray(array, textToDisplay, list) {
  if (array.length === 0) {
    array.push(textToDisplay);
    array.map(function(el) {
      list.innerHTML += "<li>" + el + "</li>";
    });
  } else {
    array.push(textToDisplay);
    var lastElement = array.slice(-1);
    lastElement.map(function(el) {
      list.innerHTML += "<li>" + el + "</li>";
    });
  }
}
