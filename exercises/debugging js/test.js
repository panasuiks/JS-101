let startsWithPrefix = arr => arr.every(word => {
  console.log(word.slice(0, i));
  return current === word.slice(0, i);
});

function commonPrefix(arr) {
  let result = '';
  let current;
  arr = arr.sort((a, b) => a.length - b.length)
  for (let i = 1; i < arr[0].length; i++) {
    current = arr[0].slice(0, i);

    if (startsWithPrefix(arr)) {
        continue;
    } else return current;
  }

 return "hi";
}