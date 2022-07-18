<!-- **CODE PLAN/Pseudo code** -->

pieces start with elements 4,3,2,1 on the "a" stack
"b" and "c" are empty
prompt for stackstart: user chooses element 1
prompt for endstack: user can choose "b" or "c"
move the end piece to end of the selected stack (use .push())
.pop removes last element
.push adds element to end
what is a win?...
if(endstack.length )
if all 4 numbers are in stack b or c
check that length is equal to 4

here is where we put it all together
grab the arguments (a and b or c) and set variables
check to see if legal (pass in start, end)
if true, call move piece

if its not ok, display "invalid move", don't move piece
