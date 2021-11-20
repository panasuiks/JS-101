/*
P:
Input: 
  number
Output:
 rotated number
 rotate one, keep first digit in place, rotate, keep first 2 in place, rotate, keep first 3 in place, rotate, keep first 4 in place,


D: 
inp as number
convert to string
process as string
return as number

A:
set string
loop through each character
  keep beginning, rotate end
return

C:
*/

let stack = {
  stack: [],
  register: 0,

  PUSH() {
    this.stack.push(this.register);
  },

  ADD() {
    this.register = this.stack.pop() + this.register;
  },

  SUB() { 
    this.register = this.register - this.stack.pop();
  },

  MULT() {
    this.register = this.stack.pop() * this.register;
  },

  DIV() {
    this.register = parseInt(this.register / this.stack.pop());
  },

  REMAINDER() { 
    this.register = parseInt(this.register % this.stack.pop());
  },

  POP() {
    this.register = this.stack.pop();
  },

  PRINT() {
    console.log(this.register);
  },

  NUMBERINPUT(num) {
    this.register = Number(num);
  }
}

function minilang(inpString) {
  inpArray = inpString.split(' ');
  for (i = 0; i < inpArray.length; i += 1) {
    let currentCommand = inpArray[i];
    if (isStringNumber(currentCommand)) {
      stack.NUMBERINPUT(currentCommand);
    } else {
      stack[currentCommand]();
    }
  } 
}

function isStringNumber(inpString) {
  if (inpString.length === 0) return false;
  return !Number.isNaN(Number(inpString));
}
//IF input is number, stack.register = num
