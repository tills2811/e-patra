const navbar = document.querySelector('.navbar')
const active = document.getElementById('nav')
const scrollFunc = () => {
    const scroll = window.scrollY;


    if (scroll > 100) {
        active.className = "navbar show";
    } else {
        active.className = "navbar hide";
    }
};
window.addEventListener("scroll", scrollFunc);



function star() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "Why do I need this new email e-patra when I have outlook or gmail or yahoo emails?";
    document.getElementById("ans").innerHTML = "Well, We believe once you signup with our email...there is no going back to other email providers.";
}


function email() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = " What better features you have compared to other email providers?";
    document.getElementById("ans").innerHTML = "1.Encryption. <br> 2.Limit free uploads. <br> 3.Upload upto terrabytes <br> 4.Separate attachment data to manage them with folders and drives.";
}


function clock() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "What is diappearing emails?";
    document.getElementById("ans").innerHTML = "Disappearing emails gets deleted automatically after being read based on your schedule.";
}


function fire() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "What is limit free uploads?";
    document.getElementById("ans").innerHTML = "User can upload files upto 1 terrabyte. We dont have to restrict files to just 25MB size compared to other email providers.";
}

function privacy() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "How do I encrypt the data in email?";
    document.getElementById("ans").innerHTML = "Once the email is typed/composed we have to encrypt option. Just click encryption which will basically encrypt your email based on your PGP encryption file.";
}


function key() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "How do I decrypt the data in email?";
    document.getElementById("ans").innerHTML = "If you see your email is encrypted, just click on decypt button within e-patra (within e-patra) to read the contents of email.If you want to decrypt email from gmail or other email provider.";
}


function folder() {
    document.getElementById("text").style.display = "none";
    document.getElementById("ques").innerHTML = "Where are my attachments stored ?";
    document.getElementById("ans").innerHTML = "The attached data/files are stored in a e-patra cloud drive associated by default to every user using the e-patra email service.";
}





// Scroll to top button Starts here
const scrbtn = document.querySelector('.scrbtn')
const showhide = document.getElementById('top')
const ScrollFunc = () => {
  const scroll = window.scrollY;


  if (scroll > 300) {
    showhide.className = "scrbtn show";
  } else {
    showhide.className = "scrbtn hide";
  }
};
window.addEventListener("scroll", ScrollFunc);

scrbtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})
// Scroll to top button Ends here


// FAQ section starts here
var acc = document.getElementsByClassName("qa");
var panel = document.getElementsByClassName('questions');

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    var setClasses = !this.classList.contains('active');
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}


// FAQ section ends here




const burger = document.querySelector(".burger");
// const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    // console.log("click");
});









// Gsap 


const tl = gsap.timeline({defaults:{ease: 'circ'}})


tl.from('body', {
    opacity: 0,
    // duration : 1,
}).from('.navbar' , {
    y: '-110%',
    duration: 0.4,
}).from('.hero .mailicon' , {
    x: '-500px',
    opacity: 0,
    duration: 0.5,
    delay: '1',
}, '-=1').from('.hero .heading' , {
    y: '50px',
    opacity: 0,
    duration: 0.6,
}).from('.hero .Subheading' , {
    y: '50px',
    opacity: 0,
    duration: 0.7,
}).from('.hero .btns' , {
    y: '50px',
    opacity: 0,

    duration: 0.8,
})



const tlScroll =gsap.timeline({
    scrollTrigger:{
        trigger: '.Features',
        start:'400px bottom',
        end:'400px center',
        // markers:true,
        scrub: true, 
    }
})

tlScroll.from('.Features .title',{
    opacity:0,
    x: '-100%'

}, '-=0.5').from('.Features .card' ,{
    opacity: 0,
    x: '100%',
 
    stagger: .3,
} , '-=0.7')



const Scrollsecurity = gsap.timeline({
    scrollTrigger:{
        trigger: '.Security',
        start: '200px bottom',
        end: 'centre end',
        //  markers: true,
        scrub:true,
    }
})


Scrollsecurity.from('.Security .title' , {
    opacity:0,
    x: '-100%',
    duration: 1,

} , '-=0.7').from( '.cardRow .left' ,{
    opacity:0,
    x: '-100%',
    duration: 1.4,

} , '-=0.9').from( '.cardRow .right' ,{
    opacity:0,
    x: '100%',
    duration: 1.8,
} , '-=1')


const Scrollsecurity1 = gsap.timeline({
    scrollTrigger:{
        trigger: '.Security .cardRow1',
        start: '200px bottom',
        end: 'centre end',
        //  markers: true,
        scrub:true,
    }
})


Scrollsecurity1.from( '.cardRow1 .left' ,{
    opacity:0,
    x: '-100%',
    duration: 1.4,

} , '-=0.9').from( '.cardRow1 .right' ,{
    opacity:0,
    x: '100%',
    duration: 1.8,
} , '-=1')


const Scrollsecurity2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.Security .cardRow2',
        start: '200px bottom',
        end: 'centre end',
        //  markers: true,
        scrub:true,
        
    }
})


Scrollsecurity1.from( '.cardRow2 .left' ,{
    opacity:0,
    x: '-100%',
    duration: 1.4,
  

} , '-=0.9').from( '.cardRow2 .right' ,{
    opacity:0,
    x: '100%',
    duration: 1.8,
} , '-=1')



const Scrollapp = gsap.timeline({
    scrollTrigger:{
        trigger: '.App',
        start: '200px bottom',
        end: '150px center',
        // markers: true,
        // scrub:true,
    }
})


Scrollapp.from('.block .left'  ,{
    // opacity: 0,
    y:'100%',
    // duration: 1,
}).from('.block .right .heading'  ,{
    // opacity: 0,
    x:'150%',
    duration: 1,
    // delay: 1,
}).from('.block .right .desc'  ,{
    // opacity: 0,
    x:'150%',
    // duration: 0.6,
}, '-=0.9' ).from('.block .right .btns'  ,{
    // opacity: 0,
    x:'150%',
    // duration: 0.6,
    stagger: .6
} )



const Scrollteam = gsap.timeline({
    scrollTrigger:{
        trigger: '.team',
        start: '150px bottom',
        end: 'top center',
        // markers: true,
        // scrub:true,
    }
})


Scrollteam.from('.team .title' ,{
    opacity:0,
    x: '-100%',
    duration: 0.6,
}).from('.team .profile' ,{
    opacity:0,
    y: '50%',
    stagger: .1,
    duration: 0.5,
})