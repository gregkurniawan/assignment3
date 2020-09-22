const day = prompt("Please Enter A Day Of The Week:");

switch (day) {
    case "mon":
        console.log("You entered: mon")
        console.log("Tomorrow is tuesday");
        break;
    case "tue":
        console.log("You entered: tue")
        console.log("Tomorrow is wednesday");
        break;
    case "wed":
        console.log("You entered: wed")
        console.log("Tomorrow is thursday");
        break;
    case "thu":
        console.log("You entered: thu")
        console.log("Tomorrow is friday");
        break;
    case "fri":
        console.log("You entered: fri")
        console.log("Tomorrow is saturday");
        break;
    case "sat":
        console.log("You entered: sat")
        console.log("Tomorrow is sunday");
        break;
    case "sun":
        console.log("You entered: sun")
        console.log("Tomorrow is monday");
        break;
    default:
        console.log("Not a valid input.");
}