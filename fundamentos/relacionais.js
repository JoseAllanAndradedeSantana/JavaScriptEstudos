let num1 = 3;
let num2 = 4;
let cond = num1 > num2;
console.log("01) ", "1" == 1);
console.log("02) ", "1" === 1);
console.log("03) ", "1" != 1);
console.log("04) ", "1" !== 1);
console.log("05) ", 3 < 2);
console.log("06) ", 3 > 2);
console.log("07) ", 3 <= 2);
console.log("08) ", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

console.log("09) ",d1.getTime() === d2.getTime());



if(cond) {
    console.log("Dentro do if");
}