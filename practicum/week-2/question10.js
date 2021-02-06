/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var num = n.toString()
    var max_num=0
    var min_num=num[0]
    for(i=0;i<num.length;i++){
        if(parseInt(num[i])>parseInt(max_num)){
            max_num=parseInt(num[i])
        } 
        if(parseInt(num[i])<parseInt(min_num)){
            
            min_num=parseInt(num[i])
        }
    }
   
    var output=max_num-min_num
    return output;
    

};
let q10 = maxMinusMin(87034)
console.log(q10)