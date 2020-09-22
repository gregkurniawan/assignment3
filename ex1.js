const fullName = prompt("Please Enter Full Name:");
const unitsCompleted = Number(prompt("Please Enter Number Of Units Completed in College:"));
console.log(`Hello, ${fullName}`);

if ((unitsCompleted >=0) && (unitsCompleted <=30)) {
    console.log(`${fullName}`);
    console.log(`Your grade standing is Freshmen.`);
}
else if ((unitsCompleted >=31) && (unitsCompleted <=60)) {
    console.log(`${fullName}`);
    console.log(`Your grade standing is Sophomore.`);
}
else if ((unitsCompleted >=61) && (unitsCompleted <=90)) {
    console.log(`${fullName}`);
    console.log(`Your grade standing is Junior.`);
}
else if (unitsCompleted >=91) {
    console.log(`${fullName}`);
    console.log(`Your grade standing is Senior.`);
}
