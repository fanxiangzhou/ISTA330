
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        var total=[]
        var num =0
        for(i=0;i<input.length;i++){
                for(y=num;y<input.length;y++){
                        var temp=[]
                        for(z=i;z<y+1;z++){
                                temp.push(input[z])
                        }
                        total.push(temp)

                }
                num+=1
        }
        var output=0
        for(i=0;i<total.length;i++){
                var temp=0
                for(y=0;y<total[i].length;y++){
                        temp+=total[i][y]
                }
                if(temp>output){
                        output=temp
                }

        }
        return output

    
 };

