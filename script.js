let nameSurname = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (nameSurname.value === "" || email.value === "" || subject.value === "" || message.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");
    
    nameSurname.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
});