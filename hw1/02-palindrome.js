const elem = document.querySelector('input');
const response = document.getElementById('response');

//function that checks if the number entered is a palindrome
const handleInput = function handleInput() {

    //quick way to not allow for negative integers or decimal values
    if(elem.value)
        elem.value = Math.floor(Math.abs(elem.value));

    //converting entry to string and making a copy to reverse and compare the values.
    let fwd = elem.value.toString();
    let bwd = fwd.split("").reverse().join("");

    // If the entered value is empty hide the response div.
    (fwd === "") ? response.hidden = true : response.hidden = false;

    // Cases to fill the response div when the user starts to enter numbers
    if(fwd === bwd) {
        response.innerText = `${fwd} is a palindrome!`;
        response.classList = "alert alert-primary";
    }
    else {
        response.innerText = `${fwd} is not a palindrome!`;
        response.classList = "alert alert-danger";
    }
};

// Event Listener to call handleInput
elem.addEventListener('input', handleInput);