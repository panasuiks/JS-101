//Sorting
let words = ['go', 'ahead', 'and', 'jump'];
words.sort((a, b) => a.length - b.length);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

//Working with Call Back Functions
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
/* the for each function is being called on the array.
for each entry of the array, we are logging the 0 element to the console.
*/

// example 3
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
    action            on what?                side effect?          return      Is return used?
map method        top level of array            none              array             no
callback function   the two  array entries      none      index zero of argument    yes, added to top return
element access [0]    element                   none       used by return and log   yes
console.log method    0 element of each entry   none            undefined           no
*/
// example 4
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/* 
 action              on what?         side effect?       return      Is return used?
assignment           myArr           sets variable      undefined       no
for each method     top level array   none              undefined       no
callback function  2nd level elements   none             [undefined, undefined]    no
map method            each 2nd level element none       [undefined, undefined]
callback function     numbers           none            undefined    yes, returned to foreach
bitwise function      numbers           none            true/false      yes (if statement)
log method            numbers       outputs string            undefined       yes returned to map   
*/

//example 5
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});


/*
 action              on what?         side effect?       return      Is return used?
map method            top array         no                2 element array   no just returned
callback function     each element of array no        from below            yes written to each element
map method          sub arrays          no               2 element array      yes it's returned on upper map
callback functino     each number       no                number * 2          yes

*/

//example 6
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*
filter method       top array     no side effects     array     just returned
callback function   each object     no side effects     result of below     used as argument in filter
Object.keys method  each object      no side effects    array of keys       used in every method
every method        array of keys    no side effects    result of below     returned in top call back
callback 2          each key of object  no side effects result of below     used in every method
access (key)        access each key of each object  no side effects the value of key    used in next call
access [0]      values          no side effects     char of each key value  used in below
bitwise ===     first char of object  no side effects   true/false   used in every
*/

//Example 8
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

/*
 action              on what?         side effect?       return      Is return used?
map                 top level             no          two element array   just returned
callback            each of the two arrays  no          returns below         yes written to map return
for each            the items inside top level  no        undefined           yes returned with callback
callback             items inside top level     no        returns below       no. forEach doesn't use return.
filter             second level arrays [1]      no        returns array       no returned to forEach which isn't important
callback            individual numbers/letters    no        true/false        yes, filter return dependent on this.
boolean operator >    each entry and length     no          true/false        yes returned to filter
*/

//Example 9
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

/*
action              on what?         side effect?       return      Is return used?
map                 top level             no       two element array   just returned
callback function   2nd level           no          map below           yes in upper map function
map                 2nd level           no            array same length   yes in upper map
callback function   each 3rd level      no            from below            yes used in lower map
if to select return each 3rd level      no              true/false          yes selects
===                   each 3rd level    no            true/false            yes to select
+ 1                 each 3rd level      no             elem + 1             yes used in lower map
else
map                 each 3rd level      no
*/

//Practice Problem 1
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a))

//Practice Problem 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

//Practice Problem 3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1[2][1][3]

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1].third[0]

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2].third[0][0]

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1.b[1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } }
Object.keys(obj2.third)[0]

//Practice Problem 4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;

//Practice Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let munstersArray = Object.values(munsters);
let totalAge = munstersArray.reduce((prev, current) => {
  return current.gender === 'male' ? prev + current.age : prev;
}, 0)

//Practice Problem 6
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};

for (let key in munsters) {
  let name = key[0].toUpperCase() + key.slice(1);
  let age = munsters[key].age;
  let gender = munsters[key].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`)
}

//Practice Problem 7
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//a = 2
//b = [3, 8]

//Practice Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let arr = Object.values(obj);
let string = ''
const VOWELS = 'aeiouAEIOU';
arr.forEach(entry => {
  entry.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char)) {
        string += char
        console.log(char);
      }
    })
  })
})

//Practice Problem 9
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort();
  } else if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => a - b);
  }
})

//Practice Problem 10
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort().reverse();
  } else if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => b - a);
  }
})

arr.map(subArray => {
  return subArray.slice().sort((a, b) => {
    if (typeof a === 'string') {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    } else if (typeof a === 'number') {
      return b - a;
    }
  })
})

//Practice Problem 11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let serializedArr = JSON.stringify(arr);
let arrCopy = JSON.parse(serializedArr);
arrCopy.map(obj => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
})

//Practice Problem 12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subArray => {
  return subArray.filter(value => value % 3 === 0);
})

//Practice Problem 13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let suma = a.reduce((prev, current) => {
    return (current % 2 === 1) ? prev + current : prev
  }, 0)
  let sumb = b.reduce((prev, current) => {
    return (current % 2 === 1) ? prev + current : prev
  }, 0)
  return suma - sumb
})

//cleaner to understand
arr.sort((a, b) => {
  let suma = a.filter(value => value % 2 === 1)
    .reduce((prev, current) => prev + current, 0);
  let sumb = b.filter(value => value % 2 === 1)
    .reduce((prev, current) => prev + current, 0);
  return suma - sumb
})

//Practice Problem 14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arrOfObj = Object.values(obj);
arrOfObj.map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => {
      return color[0].toUpperCase() + color.slice(1).toLowerCase();
    })
  }
  if (obj.type === 'vegetable') return obj.size.toUpperCase()
})

//Practice Problem 15
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).every(subarrays => {
    return subarrays.every(value => {
      return (value % 2 === 0);
    })
  })
})

//Practice Problem 16
let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

let obj = {};
arr.forEach(subArray => {
  obj[subArray[0]] = subArray[1];
})

let obj = {};
arr.forEach(subArray => {
  let key = subArray[0];
  let value = subArray[1];
  obj[key] = value;
})

//Practice Problem 17
const CHARACTERS = '0123456789abcdef'

function getCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

function convertStringToUUID(inpString) {
  let lengths = [8, 4, 4, 4, 12]
  startIndex = 0;
  let array = lengths.map(length => {
    let start = startIndex;
    let finish = startIndex + length
    let returnString = inpString.slice(start, finish)
    startIndex = finish;
    return returnString
  })
  return array.join('-');
}

function generateUUID() {
  let uuidString = ''
  for (i = 1; i <= 32; i += 1) {
    uuidString += getCharacter()
  }
  return convertStringToUUID(uuidString)
}


