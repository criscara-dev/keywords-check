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
 console.log(lowerCaseWords(arCopySorted));
 
 
 // loop through array and print result to the html
 for (i = 0; i < arCopySorted.length; i++) {
  // this will show each word on a new line 
   // 1) document.write(arCopySorted[i],"</br>"); 
  // 2) document.write("<h1>" + array[i] + "</h1>"); 
 // 3) console.log(array[i]);
 }


 // show in the console words repeated more than... once with value and count.
 var original = lowerCaseWords(arCopySorted);
 function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
  
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

		if (myCount > 1) {
			var a = new Object(); 
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);        
		}
	}
 
	//return compressed;
  for (var i = 0; i < compressed.length; i++) {
    var message = compressed[i].value + ' : ' + compressed[i].count + ' times.';
    //alert(message);
    document.getElementById("print").innerHTML += message + '</br>';
  }

};

var newArray = compressArray(lowerCaseWords(arCopySorted));
  
 //console.log(newArray);
  
 
 document.getElementById('output').innerHTML = 'The most used word are:';

 
 
 
 

});









