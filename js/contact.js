"use strict";
emailjs.init("Og5oRWCL-A2md2J4p");

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all fields.");
    return; // Do not proceed with sending the email
  } else {
    emailjs
      .send("service_e1vs5yg", "template_v97jyfs", {
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        if (response.text === "OK") {
          console.log(name, email, message);
          alert("Your message has been sent. Thank you!");
          // You can also reset the form or perform other actions here.
        } else {
          alert("An error occurred. Please try again later.");
        }
      });
  }
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
  console.log("clicked");
});
