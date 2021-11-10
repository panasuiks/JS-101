/*
P:
Input:
  number that is minutes before or after midnight
Output:
  string time in 24 hour format (24:00) or 13:40

E:

D:
input as number
turn into hours and mins
add to string with colon, return
  

A:
set mins in hour
set hour in day
set mins in day
set mins
if mins -
  mins = mins in day - mins

divisor = floor (mins / mins in a day)
mins = mins - divisor * mins in a day

hours = floor (mins / hour/day)
remainder = mins - (hour * hour/day)
mins = remainder / mins in day  

C:
*/
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

function convertToDayAndMins(inpMins) {
  day = Math.floor(inpMins / MINS_PER_DAY);
  if (day < 0) {
    day = 8 + day;
  }
  if (inpMins < 0) {
    dayMins = MINS_PER_DAY + (inpMins % MINS_PER_DAY)
  } else {
    dayMins = (inpMins % MINS_PER_DAY)
  let dayString = ''
  switch (day % 7) {
    case 0:
      dayString = 'Sunday';
      break;
    case 1:
      dayString = 'Sunday';
      break;
    case 2:
      dayString = 'Monday';
      break;
    case 3:
      dayString = 'Tuesday';
      break;
    case 4:
      dayString = 'Wednesday';
      break;
    case 5:
      dayString = 'Thursday';
      break;
    case 6:
      dayString = 'Friday';
      break;
    case 7:
      dayString = 'Saturday';
      break;
  }

  return [dayString, dayMins]
}

function timeOfDay(inpMins) {
  let [day, totalMins] = convertToDayAndMins(inpMins);
  let hours = Math.floor(totalMins / MINS_PER_HOUR);
  let mins = totalMins % MINS_PER_HOUR
  return formatTimeString(day, hours, mins);
}

function formatTimeString(day, hours, mins) {
  return `${day} ${addPadToNumberReturnString(hours)}:${addPadToNumberReturnString(mins)}`
}

function addPadToNumberReturnString(number, dig = 2) {
  let numString = String(number);
  while (numString.length < dig) {
    numString = '0' + numString;
  }
  return numString
}
