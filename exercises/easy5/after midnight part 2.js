/*
P:
Input:
  string time in hh:mm
Output:
  mins after midnight or before midnight depending on function

E:

D:
input as string
convert to array and variables
convert variables to nubmers instead of strings



A:
after midnight
  multiply hours by 60, add mins.

before midnight
  mins in day - multiply hours by 60, add mins, 

C:
*/
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(timeString) {
  let [hours, mins] = timeString.split(':');
  mins = ((Number(hours) % HOURS_PER_DAY) * MINS_PER_HOUR) + Number(mins)
  return mins
}

function beforeMidnight(timeString) {
  let minsAfterMidnight = afterMidnight(timeString);
  let minsBeforeMidnight;
  if (minsAfterMidnight === 0) {
    minsBeforeMidnight = minsAfterMidnight;
  } else {
    minsBeforeMidnight = (MINS_PER_DAY - minsAfterMidnight);
  }
  return minsBeforeMidnight;
}