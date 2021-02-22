/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var output=[]
    for(i=0;i<M.length;i++){
        var lens=M[i].length
    }
    var n =0
    for(y=0;y<lens;y++){
        var temp=[]
        
        for(i=0;i<M.length;i++){
            temp.push(M[i][y])

        }
        
        output.push(temp)
    }
    
    return output

};

