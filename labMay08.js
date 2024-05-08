const startnumber = 1;

let currentNumber = startnumber;

const endnumber = 100;

let timeToStop = false;

let sum = 0;

for ( ; timeToStop ; ){
    sum += currentNumber++;
    if (currentNumber > endnumber){ timeToStop = true; }
}   
console.log(" sum is ", sum);

