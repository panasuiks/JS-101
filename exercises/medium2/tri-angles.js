/*
P:
Input:
  3 numbers (angles)
Output:
  acute right obtuse invalid
  invalid =/= 180 or <0

E:

D:
input 3 numbers
handle as numbers
output string


A:
set angles
if sum angles != 180, invalid 
if any angle <= 0, invalid
if any angle = 90, right
if any angle > 90, obtuse
else acute

C:
*/
function validTriangle(ang1, ang2, ang3) {
  return (ang1 + ang2 + ang3 === 180) &&
    (ang1 > 0 && ang2 > 0 && ang3 > 0)
}

function getTriangleType(...angles) {
  if (angles.some(angle => angle === 90)) return 'right'
  if (angles.every(angle => angle < 90)) return 'acute'
  return 'obtuse'
}


function triangle(angle1, angle2, angle3) {
  if (validTriangle(angle1, angle2, angle3) === true) {
    return getTriangleType(angle1, angle2, angle3);
  }
  return 'invalid';
}
