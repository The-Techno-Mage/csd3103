const startnumber = 1;

let currentNumber = startnumber;

const endnumber = 5;

let continueCounting = true;

let sum = 0;

for ( ; continueCounting ; ){
    sum += currentNumber++;
    if (currentNumber > endnumber){ continueCounting = false; }
}   
console.log(" sum is ", sum);

