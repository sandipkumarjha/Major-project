function loadingAnimation(){
    
var tl = gsap.timeline()
tl.from(".line h1",{
y:100,
stagger:0.25,
duration:0.6,
delay:0.5,

})
tl.from("#line1-part1 ",{
opacity:0,
onStart:()=>{
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(() => {
        if(grow < 100) {
            h5timer.innerHTML = grow++;
        }else{
            h5timer.innerHTML = "100";
        }

    }, 33)
},
})
tl.to('.line h2',{
animationName:"anime",
opacity:1,
})
 

tl.to("#loader",{
    y:100,
    opacity:0,
    duration:0.4,
    delay:3,
});
tl.from("#page1",{
y:1200,
opacity:0,
delay:0.5,
duration:0.8,
ease :"power4"
})




tl.to("#loader",{
display:"none",
})
}
loadingAnimation()

