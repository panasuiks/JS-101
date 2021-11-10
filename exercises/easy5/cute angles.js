/*
P:
Input:
  number from 0 to 360 representing degrees
Output:
  string of angle in degrees, minutes and seconds

E:

D:
input as number
calculate as number
return as string including numbers calculated


A:
set min/degree = 60
set seconds/min = 60
set degree = floor remainder of % 10
set rest = input - degree
set minutes = floor (60 * rest);
set rest = rest - (minutes / 60);
set seconds = floor(3600 * rest);
C:
*/
const MIN_PER_DEGREE = 60;
const SECONDS_PER_MIN = 60;
const DEGREE_SIGN = String.fromCharCode(176)
const MINUTE_SIGN = "'";
const SECOND_SIGN = '"';

function convertAngle0to360(angle) {
  const MAX_DEGREE = 360
  let outputAngle
  if (angle < 0) {
    let divisorNeg = Math.ceil(Math.abs(angle / MAX_DEGREE))
    outputAngle = angle + (MAX_DEGREE * divisorNeg);
  }
  if (angle > 360) {
    let divisorPos = Math.floor(Math.abs(angle / MAX_DEGREE))
    outputAngle = angle - (MAX_DEGREE * divisorPos);
  }
  return outputAngle
}

function dms(angle) {  
  if (angle < 0 || angle > 360) {
    angle = convertAngle0to360(angle);
  }
  let degrees = Math.floor(angle);
  let rest = angle - degrees;
  let minutes = Math.floor(rest * MIN_PER_DEGREE);
  rest = rest - (minutes / MIN_PER_DEGREE);
  let seconds = Math.floor(rest * MIN_PER_DEGREE * SECONDS_PER_MIN);
  return degrees + DEGREE_SIGN + padZeros(minutes, 2) + MINUTE_SIGN + padZeros(seconds, 2) + SECOND_SIGN;
}

function padZeros(inpNumber, digits = 2) {
  inpString = String(inpNumber);
  if (inpString.length >= digits) return inpString;
  while (inpString.length < digits) {
    inpString = '0' + inpString;
  }
  return inpString
}