//1

const int1 = 1;
const int2 = 30;

if(int1 >= 50 && int1 <=99) {
    console.log('true');
 } else if(int2 >=50 && int2 <= 90){
    console.log('true');
 }
 else{
     console.log('they are no number above 50');
 }

 //2
 const int3 = 60;

 if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}

 //3

let a = 5
let b = 33
let c = 72

console.log(Math.max(a, b, c));

//4
const str = 'thon';
if(str.includes('Py')){
    console.log(str);
} 
    const newStr = 'Py' + str
    console.log(newStr);

 //5

 const intSum = int1 + int2;
 if (intSum >= 50 && intSum <= 80) {
     console.log(65);
 } else {
     console.log(80);
 }

 //6
 const int4 = 3
 const int5 = 5

if(int4 + int5 === 8 && int4 - int5 === 8){
    console.log(true);
} else{
    console.log(false);
}

//7

if (((int4 == 15) || (int5 == 15)) || (int4 + int5 == 15)) {
console.log(true);

} else{
    console.log(false);
}

//8

if ((int4 % 11 == 0 || int4 % 7 == 0) || (int5 % 11 == 0 || int5 % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}

//9

const sumTwoIntegers = int4 + int5;
const tripleSum = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum);
} else {
    console.log(sumTwoIntegers);
}

//10

let diffFrom19 = Math.abs(int5 - 19);
const diffDouble = 2 * diffFrom19;

if (int5 > 19) {
    console.log(diffDouble);
} else {
    console.log(diffFrom19)
}