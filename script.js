const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky", window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
})



sr.reveal('.home-text,.portfolio,.contact', {delay:100, origin: 'left' ,distance: '150px'})


sr.reveal('.about,.services', {delay:100, origin: 'right',distance: '150px'})



//EmailJs

function SendMail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_bhpvypt" , "template_6nntzpr" , params)
    .then(function (res){
        alert("Mail Sent!" + res.status);
    })
}

