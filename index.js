//Looping a triangle

let call = [];
while (call.length < 7) {
  call = call + "#";
    console.log(call);
}

call;

//FizzBuzz

let numberList = 0;

while (numberList < 100) {
    numberList = numberList + 1;
    if (numberList % 3 == 0 && numberList % 5 == 0) {
      console.log("FizzBuzz");
      continue;
    } else if (numberList % 3 == 0) { 	 
      console.log("Fizz");
      continue;
    } else if (numberList % 5 == 0 && numberList % 3 != 0) {
      console.log("Buzz");
      continue;
    } else {
    console.log(numberList);
    }
}
numberList;


//Chessboard
let grid =" # # # #\n# # # # \n";

console.log(grid + grid + grid + grid);




