
function get_message(){
    chat_message = document.getElementById("chat_message_text").value;
    return chat_message;
}

function post_message(message){
    document.getElementById("new_message").innerText = message;
}

function lets_chat(){
    // post_message(get_message);
    chat_message = document.getElementById("chat_message_text").value;
    console.log(chat_message);
    document.getElementById("new_message").innerText = chat_message;
    document.getElementById("chat_message_text").value = '';
}

function changeChat() {
    let chat = document.getElementsByClassName('chat_content');
    chat[0].classList.toggle('joke')

}

let send_message_button = document.getElementById("Send_message_button");
send_message_button.addEventListener('click', changeChat);