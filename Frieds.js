var logo = document.getElementById('logo');
logo.addEventListener("click" , ()=>{
    window.location.href = "index.html"
})
var topspices = document.getElementById("topspices");
topspices.addEventListener("click" , ()=>{
    window.location.href = "./Top_spices.html";
})
var Breads = document.getElementById("Breads");
Breads.addEventListener("click" , ()=>{
    window.location.href = "./Breads.html";
})
var Sweets = document.getElementById("Sweets");
Sweets.addEventListener("click" , ()=>{
    window.location.href = "./Sweets.html";
})
var Frieds = document.getElementById("Frieds");
Frieds.addEventListener("click" , ()=>{
    window.location.href = "./Frieds.html";
})
var Contact = document.getElementById("Contact");
Contact.addEventListener("click" , ()=>{
    window.location.href = "./Contact.html";
})


gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});
gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:false,
        start:"top -10%",
        end:"top -70%",
        scrub:3
    }
})

gsap.from("#page1 h3 ,#headline span ,#page1 h4" ,{
    y:200,
    duration:1,
    opacity:0,
    stagger:0.3

})
gsap.from("#page2 h2",{
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:false,
        start:"top 95%",
        end:"top 70%",
        scrub:3
    },
})

gsap.from("#b1,#b2,#b3,#b4",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrub:1,
    scrollTrigger:{
        trigger:"#b1,#b2,#b3,#b4",
        scroller:"body",
        // markers:true,
        start:"top 80%"

    },
})