let hours = Number(prompt("Please Enter The Hours:"));
let mins = Number(prompt("Please Enter The Minutes:"));
let secs = Number(prompt("Please Enter The Seconds:"));
console.log(`Time inpit: ${hours}h ${mins}m ${secs}s`);

if (
    hours >= 0  &&
    hours <= 23 &&
    mins >= 0 &&
    mins <= 59 &&
    secs >= 0 &&
    secs <= 59
)
{
    secs++;
    if (secs === 60) {
        secs = 0;
        mins++;
        if (mins === 60) {
            mins = 0;
            hours++;
            if (hours ===24) {
                hours = 0;
            }
        }
    }
    console.log(`One second later: ${hours}h ${mins}m ${secs}s`)
}
else {
    console.log("Incorrect Hour!")
}