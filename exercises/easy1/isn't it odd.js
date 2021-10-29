/*
P:
Input:
  integer (positive, negative or zero) - valid integer value
Output:
  True if input absolute value is odd.

E:
Example 1:
  Input = 1
  Ouput = true
Example 2:
  Input = 0
  Output = nothing/undefined
Example 3:
  Input = -1
  Output = true
Example 4: 
  Input = 2
  Output = nothing/undefined
Example 5:
  Input = -2
  Output = nothing/undefined

D:
No data change needed. Input number.

A:
Take the absolute value fo the input number.  If the absolute value of the input number divided by 2 has a remainder then it is odd and return true.

Examples:
  1:  Absolute value of 1 is 1.  1 divided by 2 = 0 remainder 1.  This means that it is odd. Return true.
  2:  Absolute value of 0 is 0.  0 divided by 2 = 0 remainder 0.  This means that it is even. 
  3:  Absolute value of -1 is 1.  1 divided by 2 = 0 remainder 1.  This means that it is odd. Return true.
  4:  Absolute value of 2 is 2.  2 divided by 2 = 1 remainder 0.  This means that it is even. 
  5:  Absolute value of -2 is 2.  2 divided by 2 = 1 remainder 0.  This means that it is even.

C:
  */
function isItOdd(inpNum) {
  if (inpNum % 2) {
    return true
  }
}

//Create example inputs in array
inputs = [1, 0, -1, 2, -2];

//Loop through inputs and log
for (value of inputs){
  console.log(isItOdd(value));
}
