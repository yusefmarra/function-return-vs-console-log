function returnFunction() {
  // this function uses return

  return prompt("Input a string to return from this function.");
}

function logFunction() {
  // this function logs to the console
  console.log(prompt("Input a string to log to the console."));
}

var str1 = returnFunction();
logFunction();


window.onload = function(){
  document.getElementById('blah').innerHTML += str1;

};
