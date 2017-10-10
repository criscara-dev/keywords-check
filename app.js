// INPUT TEXT

// 1) transform text into words:

document.getElementById('btn').addEventListener('click', function() {

 // capture the input text
 var string = document.getElementById('inputText').value;
 // output the text into the html...
 //document.getElementById('output').innerHTML = string;

 // now I eliminate chars that I don't need plus I filter to eliminate empty spaces:
 var array = string.split(/[ ,()'!`"=_¬|{.#@<}+>;:/]+/).filter(Boolean);
 //console.log(array);

 // find and print array lenght
 var arrayLength = array.length;
 //console.log(arrayLength);

 // make a copy of the original array:
 var arCopy = array.slice();
 console.log(arCopy);

 
 // loop through array and print result to the html
 for (i = 0; i < arrayLength; i++) {
  // this will show each word on a new line 
  // 1) document.write(array[i],"</br>"); 
  // 2) document.write("<h1>" + array[i] + "</h1>"); 
 // 3) write to the console the words
  (function() {
   var y = i;
   array.valueOf[i] = function() {return y};
  })();
  console.log(array[i]);
  
 }


 // 4) loop over my array
 array.forEach(function(currentValue, index, ar) {
  //console.log(currentValue, index, ar);
  document.getElementById('output').innerHTML = ar;
 });

 // examples of accessing an element of array
 //console.log(array[0]); // first element of array
 //console.log(Array.isArray(array));// checking if array is really an array:
 //console.log(array.sort()); // sorting an array (aplphabetical order)











});









