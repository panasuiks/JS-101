/*
P:
Input:
  number (year)
Output:
  number of friday the 13ths in the year


E:

D:
input number (year)
create dates
check day


A:
set year
set month array
set sum = 0
create date each month
  if date = friday add one to sum

  return sum
C:
*/
function fridayThe13ths(year) {
  let sum = 0;
  const day = 13;
  for (i = 1; i <= 12; i += 1) {
    const date = new Date(`${year}-${i}-${day}`)
    if (date.getUTCDay() === 5) {
      sum += 1;
    }
  }
  return sum;
}