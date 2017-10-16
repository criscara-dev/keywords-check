// INPUT TEXT

// 1) transform text into words:

document.getElementById('btn').addEventListener('click', function() {

 // capture the input text
 var string = document.getElementById('inputText').value;
 // output the text into the html...
 //document.getElementById('output').innerHTML = string;

 // now I eliminate chars that I don't need plus I filter to eliminate empty spaces:
 var array = string.split(/[ ,()'!-"[=_¬|{.#@<}+.>;?:/]+/).filter(Boolean);
 //console.log(array);

 // find and print array lenght
 var arrayLength = array.length;
 //console.log(arrayLength);

 // make a copy of the original array and sort it out:
 var arCopySorted = array.slice().sort();
 console.log(arCopySorted);

 // make all the words in array lowercase:
 for(var i = 0; i<arrayLength;i++){
  var firstLetter = arCopySorted[i][0];
  var rest = arCopySorted[i].slice(1);
  arCopySorted[i] = firstLetter.toLowerCase() + rest;
  var arCopySortedLower = (arCopySorted.join(', ') );
  console.log(arCopySortedLower);
 }
 
 // loop through array and print result to the html
 for (i = 0; i < arCopySorted.length; i++) {
  // this will show each word on a new line 
   document.write(arCopySorted[i],"</br>"); 
  // 2) document.write("<h1>" + array[i] + "</h1>"); 
 
 // console.log(array[i]);
  
 }

/*
 // 4) loop over my array
 array.forEach(function(currentValue, index, ar) {
  //console.log(currentValue, index, ar);
  document.getElementById('output').innerHTML = ar;
 });
*/
 
 
 
 // find if has or not duplicates:
 
 /*function findDuplicate(array) {
  
  var i, iS = 0;
  for (i = 0; i < arrayLength; i++) {
   for (iS = i+1; iS < arrayLength; iS++) {
    if(array[i] === array[iS]) return true;
  }
 }
  return false;
  
  
 }
  if ( findDuplicate(array) ) document.write('yes!');

 else
  document.write( "<H1>no duplicated words</H1>");*/
 
 
 // function that put duplicated elements into a new array
 /*var results = [];
for (var i = 0; i < array.length - 1; i++) {
    if (arCopySorted[i + 1] == arCopySorted[i]) {
        results.push(arCopySorted[i]);
    }
}
document.write(results);*/
 
 var original = arCopySorted;
 function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 //console.log(copy);
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
  
		if (myCount >= 1) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};

var newArray = compressArray(arCopySorted);
  
 console.log(newArray.sort());
 
 

 
 
 


});









