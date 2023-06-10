 src="https://smtpjs.com/v3/smtp.js"


function msg(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "brandstorekerala2@gmail.com",
        Password : "Abcd-1234",
        To : "jeritbenny@gmail.com",
        From : document.getElementById('email').value,
        Subject : "Enquiry from website",
        Body : "And this is the body"
    }).then(
      message => alert("email sent")
    );
    
};
