/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
    var output = []
    for (i = 0; i < input.length;i++){
        
        if (i == 0){
            output.push(input[0]);
        }else{
            var temp=output[output.length-1]
            output.push(temp+input[i])
        }
        
    }
    return output
   
};

