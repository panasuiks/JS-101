/*
P:
Input:
  number
Output:
  logged triangle of height and width of input

E:

  

D:
insert number
return string
print strings

A:
  GET number 
  IF number < 1
    return ''
  For i = 1 to number
    PRINT * repeat

C:
*/

function triangle(inpValue) {
  if ((Number(inpValue) == NaN) || (Number(inpValue)) < 1) {
    return ''
  }
  for (let i = 0; i <= inpValue; i += 1) {
    let outputString = ' '.repeat(inpValue - i) + '*'.repeat(i);
    console.log(outputString)
  }
}
triangle(5);
triangle(9);
