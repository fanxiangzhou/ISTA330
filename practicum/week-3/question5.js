/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    
    var or1=[]
    for(z=0;z<input.length;z++){
        or1.push(input[z])
    }
    
    var origin=input
    for(i=0;i<origin.length;i++){
        for(y=i+1;y<origin.length;y++){
            if(origin[i]>origin[y]){
                var temp =origin[y]
                origin[y]=origin[i]
                origin[i]=temp
            }
        }
        
    }
    var rev=origin.reverse()
    
    for(i=0;i<origin.length;i++){
        if(or1[i]!=rev[i]){
            return false;
        }else if(or1[i]!=origin[i]){
            return false
        }
    }
    return true;


};
