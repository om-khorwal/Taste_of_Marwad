var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrb.style.left = dets.x - 100+ "px";
    crsrb.style.top = dets.y -100 + "px";
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border ="0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    });
}); 

var food = document.getElementById("nav");
food.addEventListener("mouseover" , ()=>{
    // window.location.href = "./Cloths.html";
        crsr.style.display = "none";
});
food.addEventListener("mouseleave" , ()=>{
    // window.location.href = "./Cloths.html";
        crsr.style.display = "block";
});

var topspices = document.getElementById("topspices");
topspices.addEventListener("click" , ()=>{
    window.location.href = "./Top_spices.html";
})

gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
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
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }

})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub:2
//     },

// });
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:false,
        start:"top 55%",
        end:"top 45%",
        scrub:1

    },

});
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:false,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    },
    
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:false,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    },
    
})