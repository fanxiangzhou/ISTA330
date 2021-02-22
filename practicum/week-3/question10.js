/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var total=[]

    for(i=0;i<input.length;i++){
       
        
        for(y=i+1;y<input.length;y++){
            if(input[y]>input[i] ){
                total.push([input[i],input[y]])
                
            }else if(input[i]>input[y]){
                total.push([input[y],input[i]])
            }

        }
    }
        
    
    var temp=total[0][1]-total[0][0]
    
    for(i=1;i<total.length;i++){
        if( temp>(total[i][1]-total[i][0])){
            temp=total[i][1]-total[i][0]
            

        }
    }
    var output=[]
    
    for(i=0;i<total.length;i++){
        if(total[i][1]-total[i][0]==temp){
            output.push(total[i])
        }
    }
    return output.sort();
    

};


