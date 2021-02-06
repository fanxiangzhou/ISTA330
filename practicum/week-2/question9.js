/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var array_input=input.split('')
    console.log(array_input)
    var ouput=''
    for(i=0;i<shuffleIndices.length;i++){
        
        ouput+=array_input[shuffleIndices[i]]
    
    }
    
    return ouput;

};
let q9 = suffleString('llheo',[2,3,0,1,4])
console.log(q9)
