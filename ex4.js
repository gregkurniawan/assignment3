let pw = "secret"
let response;
let count = 0;
let limit = 3;
let error = false;

while(response != pw && !error){ 
    if (count < limit) {
        response = prompt("Please Enter Password:");
        count++;
    } else { 
        error = true;
    }
}
if (error) {
    alert("Your account is locked! You failed to enter the correct password  "+limit+" times.");
} else {
    alert("You entered the correct password after "+count+" attempt(s)");
}