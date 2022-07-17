let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  // move the end piece of the startStackmove it to eht end of selected endstack

  // .pop removes last element, what to put for "startStack"?
  let lastElement = startStack.pop();
  // .push adds element to end, need to tell it to push onto the endStack???? what to put for endStack?
  let newElement = endStack.push(lastElement);
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // is startstack > endstack? false
  if (startStack > endStack) {
    return false;
  } else if (endStack.length < 1) {
    return true;
  } else if (startStack === endStack) {
    return false;
  }

  // is startSTack < endstack? true (don't need to code this, is implied)
  // is the endstack empty? yes
  // can I try to move the piece to the same stack?
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // if(endstack.length )
  // if all 4 numbers are in stack b or c
  // check that length is equal to 4
  if (stacks["b"].length == 4 || stacks["c"].length == 4) {
    return true;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // here is where we put it all together
  // grab the arguments (a and b or c) and set variables
  let start = startStack;
  let end = endStack;
  // check to see  if legal (pass in start, end)
  // if true, call move piece
  if (isLegal(start, end)) {
    movePiece(start, end);
  } else {
    console.log("Invalid Move. Try Again");
  }
  // if its not ok, display "invalid move", don't move piece
  // checkForWin();
  if (checkForWin()) {
    console.log("You won!");
  }
};
towersOfHanoi("a", "c");
