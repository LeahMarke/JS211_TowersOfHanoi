"use strict";

const assert = require("assert");
const { normalize } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

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
  let lastElement = stacks[startStack].pop();
  // console.log(lastElement);
  // .push adds element to end, need to tell it to push onto the endStack???? what to put for endStack?
  stacks[endStack].push(lastElement);
  // console.log(newElement);
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // is startstack > endstack? false
  if (
    stacks[startStack].slice(-1) < stacks[endStack].slice(-1) ||
    stacks[endStack].length == 0
  ) {
    return true;
  } else {
    return false;
  }
  // if (stacks[startStack].slice(-1) == stacks[endStack].slice(-1)) {
  //   return false;
  // }
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // if(endstack.length )
  // if all 4 numbers are in stack b or c
  // check that length is equal to 4
  if (stacks["b"].length === 4 || stacks["c"].length === 4) {
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // here is where we put it all together
  // grab the arguments (a and b or c) and set variables
  // let startStack = startStack;
  // let endStack = endStack;
  // check to see  if legal (pass in start, end)
  // if true, call move piece
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  } else {
    console.log("Invalid Move. Try Again");
  }
  // if its not ok, display "invalid move", don't move piece
  // checkForWin();
  if (checkForWin()) {
    console.log("You won!");
  }
};
// towersOfHanoi("a", "c");

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
