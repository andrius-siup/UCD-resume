function sendMail(contactForm) {
    email.send("Gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, user_Hft1f0wwhp6PvNa61wBb2)
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
       // return false;
}
// var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };

// emailjs.send('Gmail', 'rosie', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });

console.log("hello");
