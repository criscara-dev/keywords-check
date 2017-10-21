document.getElementById('btn').addEventListener('click', function() {

 // capture the input text
 var string = document.getElementById('inputText').value;
 
 var array = string.split(/[ ,()'!-"[=_¬|{.#@<}+.>;?:/]+/).filter(Boolean);

 var arrayLength = array.length;

 // make a copy of the original array and sort it out:
 var arCopySorted = array.slice().sort();
 console.log(arCopySorted);

  // create a function lowerCaseWords:
 /*var  lowerCaseWords = function(inputWords){
  var outputWords = [];
  for(var i = 0; i<arrayLength;i++){
  var firstLetter = inputWords[i][0];
  var rest = inputWords[i].slice(1);
  outputWords.push(firstLetter.toLowerCase() + rest);
  var arCopySortedLower = (inputWords.join(', ') );
  
 }
  return outputWords;
 }
 
 console.log(lowerCaseWords(arCopySorted).join(', '));
 
 var A = lowerCaseWords(arCopySorted);
 
 console.log(A);*/


 var A = array.slice();


//words = ['home', 'home', 'ca', 'ma', 'pa', 'home'];
counter = {}
A.forEach(function(word) {
   counter[word] = (counter[word] || 0) + 1;
});
A.sort(function(x, y) {
   return counter[y] - counter[x];
});
console.log(counter);
 //document.getElementById("output").innerHTML = counter;
   
 
   

 

   
   
});