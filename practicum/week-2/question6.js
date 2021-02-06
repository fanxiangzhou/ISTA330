/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    for(i = 0 ; i < input.length;i++){
        if(input.length%2==1){
            return input[(input.length+1)/2-1]
        }else{
            var temp = (input[input.length/2-1]+input[input.length/2])/2
            return temp;
        }
    }

};
let q4 = median([1,2,2,3,4,7,10,11,13]);
console.log(q4)