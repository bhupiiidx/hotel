// -------------------Home page---------------------------------------------------------------------

var d = new Date();
document.getElementById("data-display").innerHTML = d.toDateString();
var greets=d.getHours();
if(greets>0 && greets<12){
    document.getElementById("greeting").innerHTML = "Good Morning"
}
else if (greets > 12 && greets < 16) {
    document.getElementById("greeting").innerHTML = "Good Evening"
}
else if (greets > 16 && greets < 23) {
    document.getElementById("greeting").innerHTML = "Good Evening"
}
else{
    document.getElementById("greeting").innerHTML = " "
}

// -------------------root page--------------------------------------------------------------------

document.getElementById('form-inline-design').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location = (document.getElementById('inlineFormCustomSelectPref').value);
})

//----------------------root page ------------------------------------------------------------------


// -------------------Home page---------------------------------------------------------------------

$(window).load(function () {
    $("body").removeClass("holdanimation");
});
// -------------------Home page---------------------------------------------------------------------


// -------------------sign up form js---------------------------------------------------------------

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                var pass = document.getElementById("validationCustompass").value;
                var conpass = document.getElementById("validationCustomconpass").value;
                var mail = document.getElementById("validationCustommail").value;
                var conmail = document.getElementById("validationCustomconmail").value;
                if(pass != conpass){
                    event.preventDefault();
                    event.stopPropagation();
                    document.getElementById("chnagepwd").style.color = "red";
                    console.log("password didnt match");
                } else if (mail != conmail) {
                    event.preventDefault();
                    event.stopPropagation();
                    document.getElementById("chnagemail").style.color = "red";
                    console.log("mail didnt match");

                } else {
                    form.classList.add('was-validated');
                }
            }, false);
        });
    }, false);
})();

// -------------------sign up form js---------------------------------------------------------------