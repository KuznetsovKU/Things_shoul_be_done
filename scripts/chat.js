
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
    document.getElementById("new_message").innerText = chat_message;
}