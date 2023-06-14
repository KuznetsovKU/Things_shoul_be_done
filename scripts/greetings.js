
function greetings(){
    userName = document.getElementById("name").value;
    alert(`Hi ${userName} Sorry, but you can't join us right now. It still in progress.`);
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}

function paintButton() {
    let buttons = document.getElementsByClassName("join_btn");
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.toggle("active_button");
    }
    greetings();
}

let enter_button = document.getElementById("Enter_button");
enter_button.addEventListener('click', paintButton)


let register_button = document.getElementById("Register_button");
register_button.addEventListener('click', paintButton)