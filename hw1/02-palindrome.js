const elem = document.querySelector('input');
const response = document.getElementById('response');

elem.addEventListener('input', handleInput);

function handleInput() {
    
    let fwd = elem.value.toString();
    let bwd = fwd.split("").reverse().join("");

    (fwd == null || fwd == "") ? response.hidden = true : response.hidden = false;

    if(fwd == bwd) {
        response.innerText = `${fwd} is a palindrome!`;
        response.classList = "alert alert-primary";
    }
    else {
        response.innerText = `${fwd} is not a palindrome!`;
        response.classList = "alert alert-danger";
    }
}
