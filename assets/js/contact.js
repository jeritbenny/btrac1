src="https://smtpjs.com/v3/smtp.js"



var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').valve;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name:' +name+ '<br/> email:' +email+ '<br/> subject'+ subject+ '<br/> message' + message;
      Email.send({
        Host : "smtp.gmail.com",
        Username : "brandstorekerala2@gmail.com",
        Password : "Abcd-1234",
        To : "brandstorekerala2@gmail.com",
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert("email sent")
    );
})