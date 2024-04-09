var logo = document.getElementById('logo');
logo.addEventListener("click" , ()=>{
    window.location.href = "index.html"
})
var topspices = document.getElementById("Breads");
topspices.addEventListener("click" , ()=>{
    window.location.href = "./Breads.html";
})

var Sweets = document.getElementById("Sweets");
Sweets.addEventListener("click" , ()=>{
    window.location.href = "./Sweets.html";
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