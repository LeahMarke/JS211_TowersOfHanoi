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

// shows stacks in console
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  // moves the end piece of the startStack, moves it to the end of selected endstack

  // .pop removes last element
  let lastElement = stacks[startStack].pop();
  // .push adds element to end
  stacks[endStack].push(lastElement);
};

const isLegal = (startStack, endStack) => {
  if (
    stacks[startStack].slice(-1) < stacks[endStack].slice(-1) ||
    stacks[endStack].length == 0
  ) {
    return true;
  } else {
    return false;
  }
};

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

const towersOfHanoi = (startStack, endStack) => {
  // here is where we put it all together
  // check to see  if legal (pass in start, end)
  // if true, call move piece
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  } else {
    console.log("Invalid Move. Try Again");
  }
  // if its not ok, display "invalid move", don't move piece
  if (checkForWin()) {
    console.log("You won!");
  }
};

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
