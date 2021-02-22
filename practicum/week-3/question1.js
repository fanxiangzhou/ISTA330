/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        
        for(i=0;i<input.length;i++){
                for(y=i+1;y<input.length;y++){
                        if(input[i]>input[y]){
                        var temp =input[y]
                        input[y]=input[i]
                        input[i]=temp
                        }
                }
        
        }
        
        
        if(input[input.length-2]*2>input[input.length-1]){
                return false;
        }
        return true;
   
};


