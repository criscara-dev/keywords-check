/* this way remove duplicated... */


// 1) transform text into words:

document.getElementById('btn').addEventListener('click', function() {

 // capture the input text
 var string = document.getElementById('inputText').value;
 
 var array = string.split(/[ ,()'!-"[=_¬|{.#@<}+.>;?:/]+/).filter(Boolean);

 var arrayLength = array.length;

 // make a copy of the original array and sort it out:
 var arCopySorted = array.slice().sort();
 console.log(arCopySorted);

  // create a function lowerCaseWords:
 var  lowerCaseWords = function(inputWords){
  var outputWords = [];
  for(var i = 0; i<arrayLength;i++){
  var firstLetter = inputWords[i][0];
  var rest = inputWords[i].slice(1);
  outputWords.push(firstLetter.toLowerCase() + rest);
  var arCopySortedLower = (inputWords.join(', ') );
  //console.log(arCopySortedLower);
 }
  return outputWords;
 }
 
 console.log(lowerCaseWords(arCopySorted).join(', '));
 
 var A = lowerCaseWords(arCopySorted);
 
 console.log(A);
 //console.log(lowerCaseWords(arCopySorted));
 
 Array.prototype.byCount= function(){
    var itm, a= [], L= this.length, o= {};
    for(var i= 0; i<L; i++){
        itm= this[i];
        if(!itm) continue;
        if(o[itm]== undefined) o[itm]= 1;
        else ++o[itm];
    }
    for(var p in o) a[a.length]= p;
    return a.sort(function(a, b){
        return o[b]-o[a];
    });
}

// display in the html the words in order of max presence and alphabetic order
console.log(A.byCount());

 document.getElementById('most').innerHTML = A.byCount();

 
 
 


 

 
 
 
 

});