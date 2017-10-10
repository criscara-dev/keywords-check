document.getElementById('inputText').addEventListener('keydown', function() {
   // capture the input text
    var input = document.getElementById('inputText').value;
    console.log(input);
    document.getElementById('output').innerHTML = input;