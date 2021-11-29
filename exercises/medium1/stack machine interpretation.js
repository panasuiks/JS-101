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
  error: false,

  'emptyStackError': 'The stack is empty.',

  isStackEmpty() {
    if (this.stack.length === 0) {
      this.error = this.emptyStackError
    }
  },

  getAndClearError() {
    tempError = this.error;
    this.error = false;
    return tempError;
  },

  logEmptyStack() { console.log(emptyStackError) },

  PUSH() {
    this.stack.push(this.register);
  },

  ADD() {
    this.isStackEmpty();
    this.register = this.stack.pop() + this.register;
  },

  SUB() {
    this.isStackEmpty();
    this.register = this.register - this.stack.pop();
  },

  MULT() {
    this.isStackEmpty();
    this.register = this.stack.pop() * this.register;
  },

  DIV() {
    this.isStackEmpty();
    this.register = parseInt(this.register / this.stack.pop());
  },

  REMAINDER() {
    this.isStackEmpty();
    this.register = parseInt(this.register % this.stack.pop());
  },

  POP() {
    this.isStackEmpty();
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
    let currentCommand = inpArray[i].toUpperCase();
    if (isStringNumber(currentCommand)) {
      stack.NUMBERINPUT(currentCommand);
    } else {
      if (stack.hasOwnProperty(currentCommand)) {
        stack[currentCommand]();
        if (stack.error !== false) {
          let error = stack.getAndClearError();
          console.log(error);
          return error;
        }
      } else {
        console.log(`${currentCommand} is not a valid command`);
      }
    }
  }
}

function isStringNumber(inpString) {
  if (inpString.length === 0) return false;
  return !Number.isNaN(Number(inpString));
}
//IF input is number, stack.register = num
