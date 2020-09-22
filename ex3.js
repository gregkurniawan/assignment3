const numb1 = Number(prompt("Please Enter A Number:"));
const numb2 = Number(prompt("Please Enter A Second Number:"));

const sum = numb1 + numb2;
const sub = numb1 - numb2;
const mult = numb1 * numb2;
const div = numb1 / numb2;
const rem = numb1 % numb2;

console.log("The following are mathematical operations for the numbers inputted:")
console.log(`${numb1} + ${numb2} = ${sum}`);
console.log(`${numb1} - ${numb2} = ${sub}`);
console.log(`${numb1} * ${numb2} = ${mult}`);
console.log(`${numb1} / ${numb2} = ${div}`);
console.log(`${numb1} % ${numb2} = ${rem}`);