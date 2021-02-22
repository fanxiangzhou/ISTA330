/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dict={}
    for(i=0;i<input.length;i++){
        if(!(input[i] in dict)){
            dict[input[i]]=1;

        }else{
            dict[input[i]]+=1;
        }
    }
    
    var max=0
    for(var key in dict){
        if(dict[key]>max){
            max=dict[key]
        }
    }
    for(var key in dict){
        if(dict[key]=max){
            if(dict[key]%key==0){
                return dict[key];

            }else{
                return -1;
            }
        }
    }
    


};
