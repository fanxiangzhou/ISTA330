/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var array_a =A.split('');
    
    var array_b =B.split('');
    
    var sum =0;
    for( i=0 ; i<array_a.length ; i++){
        for ( y=0;y<array_b.length; y++){
            
            if( array_a[i]==array_b[y]){
                sum+=1
            }
        }
    }
    return sum;

};
