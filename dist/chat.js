var socket = io();

var body = document.getElementById("chatbody"),
    nameIn = document.getElementById("nameinput1"),
    msg = document.getElementById("msginput"),
    btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    socket.emit("chat", {
        name: nameIn.value,
        message: msg.value
    });
    msg.value = "";
});


socket.on('chat', function (data) {
    if (nameIn.value.length > 0 || msg.value.length > 0) {
        body.innerHTML += '<p><strong>' + data.name + ':</strong>' + data.message + '</p>'
    } else {
        alert('name field or message field is empty!');

    }
})