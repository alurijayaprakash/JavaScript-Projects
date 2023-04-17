function myWish(){
    // alert("Please enter")
    let userInput = document.querySelector('#userInput');
    console.log(userInput.value)
    let message = document.querySelector('#message');
    message.innerHTML = "Hello " + userInput.value;
    // document.getElementById("message").innerHTML = "Hello " + userInput.value;
}

function callReset(){
    location.reload(true);
}