
// const submit= document.querySelector(".btn");
// const loginPopup = document.querySelector(".login-popup");
// const close = document.querySelector(".close");

// function sendEmail(formData) {
//   // Get the email address from the login form
//  // const emailAddress = formData.get("email");

//   // Get the desired email address
//   const desiredEmailAddress = "jeritbenny.jbk@gmail.com";

//   // Create a new email message
//   const emailMessage = new EmailMessage();
//   emailMessage.setTo(desiredEmailAddress);
//   emailMessage.setSubject("Login Form Data");
//   emailMessage.setBody(formData);

//   // Send the email message
//   emailMessage.send();
//   event.preventDefault()
// }


// window.addEventListener("load",function(){

// showPopup();
//  // setTimeout(function(){
//  //   loginPopup.classList.add("show");
//  // },5000)

//  })

// function showPopup(){
//       const timeLimit = 5 // seconds;
//       let i=0;
//       const timer = setInterval(function(){
//        i++;
//        if(i == timeLimit){
//         clearInterval(timer);
//         loginPopup.classList.add("show");
//        } 
//        console.log(i)
//       },1000);
// }


// close.addEventListener("click",function(){
//   loginPopup.classList.remove("show");
// })
// submit.addEventListener("click",function(){
//   const formData = new FormData(document.getElementById("myForm"));

//   // Send the login form data to email
//   loginPopup.classList.remove("show");
//   event.preventDefault()
//   sendEmail(formData);

// })