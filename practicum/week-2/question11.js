/*
Given an array of integers, input, representing a list encoded, decode the list.
Every pair (2*i, 2*i + 1) of elements in the input, 
means in the decoded list we have as many as input[2*i]'s of the quantity  input[2*i + 1].


Example:
input: [2, 5, 4, 2] (this means in the encoded list we will have two 5's and four 2's )
output: [5, 5, 2, 2, 2, 2]
*/

var decode = function(input) {
    var output=[]
    
    for(i=0;i<input.length;i+=2){
        console.log(input[i])
        for(y=0;y<parseInt(input[i]);y++){
            output.push(input[i+1]);

        }
        

    }
    
    return output;


};
let q11 = decode([2,5,4,2])
console.log(q11)