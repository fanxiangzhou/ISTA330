/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
      var output = 0
      var array = input.split('')
      var temp=[]
      for(i = 0;i < array.length ;i++){
        
        if(array[i] == 'a' && array[i+1] == 'b'){
          temp.push(i)
          temp.push(i+1)
          output+=1;

        }else if(temp.includes(i)== false&&temp.includes(i+1) ==false&&array[i]=='b'&& array[i+1] == 'a'){
          output+=1;
        }

      }


      return output;

};
let q12 = maxBalanceNumber('abaabbabab')
console.log(q12)

