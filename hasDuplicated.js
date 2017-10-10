 function arrHasDuplicated( A ) {     // finds any duplicate array elements using the fewest possible comparison
  var i, j, n;
  n=A.length;
  // to ensure the fewest possible comparisons
  for (i=0; i<n; i++) {                 // outer loop uses each item i at 0 through n
   for (j=i+1; j<n; j++) {              // inner loop only compares items j at i+1 to n
    if (A[i]==A[j]) return true;
   }	}
  return false;
 }

 if ( arrHasDuplicated( array ) )    // this just calls the function to test it
  document.write( "<H1>yes</H1>");

 else
  document.write( "<H1>no</H1>");