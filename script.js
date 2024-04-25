var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


var tl = gsap.timeline();
tl.from(".s1Div", {
  scale: 0.7,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".section3Div", {
  scrollTrigger: {
    trigger: ".section3Div", // selector or element
    start: "0% center",  // [trigger] [scroller] positions
    markers: false, // only during development!
  },
  x: 1000,
  duration: 0.6,
  stagger: 0.3,
})


gsap.from(".s2-part1 h2", {
  scrollTrigger: {
    trigger: ".s2-part1 h2",
    scroller: "body",
    markers: false,
    start: "bottom 90%",
    end: "bottom 70%",
    scrub: 2,
  },
  
  opacity: 0,
  scale:0.8,
  x:-200,
  
  duration: 2.5,
})

gsap.from(".s2h4 h4", {
  scrollTrigger: {
    trigger: ".s2h4 h4",
    scroller: "body",
    markers: false,
    start: "bottom 80%",
    end: "bottom 70%",
    // scrub: 2,
  },
  opacity: 0,
  // delay: 0.5,
  // stagger: true,
  onStart: function () {
    $('.s2h4 h4').textillate({ in: { effect: 'rollIn' } });
  }

})

gsap.from(".s2btn", {
  scrollTrigger: {
    trigger: ".s2btn",
    scroller: "body",
    markers: false,
    start: "-30% 80%",
    end: "bottom 50%",
    // scrub: 2,
  },
  // delay:0.5,
        opacity:0,
        scale:1.2,  

})
gsap.from(".s2-part2 img", {
  scrollTrigger: {
    trigger: ".s2-part2 img",
    scroller: "body",
    markers: false,
    start: "10% 80%",
    end: "bottom 50%",
    // scrub: 2,
  },
  delay:0.5,
        opacity:0,
        scale:0.8,  
        duration:2,

})
gsap.from(".block2", {
  scrollTrigger: {
    trigger: ".block2",
    scroller: "body",
    markers: false,
    start: "bottom 80%",
    end: "bottom 70%",
    // scrub: 2,
  },
  opacity: 0,
  // delay: 0.5,
  // stagger: true,
  onStart: function () {
    $('.block2').textillate({ in: { effect: 'bounceInUp' } });
  }

})

gsap.from("#section5 h1", {
  scrollTrigger: {
    trigger: "#section5 h1",
    scroller: "body",
    markers: false,
    start: "top 90%",
    end: "bottom 70%",
    // scrub: 2,
  },
  x:-100,  
  

})

gsap.from("#section5 .btn3", {
  scrollTrigger: {
    trigger: "#section5 .btn3",
    scroller: "body",
    markers: false,
    start: "top 90%",
    end: "bottom 70%",
    // scrub: 2,
  },
  x:100,  

})



document.querySelector(".s1Button").onclick = function (){
  // alert("hello world 2.0");
  document.querySelector(".menu").style.top= "0%" ;
}
document.querySelector(".menuBtn").onclick = function (){
  // alert("hello world 2.0");
  document.querySelector(".menu").style.top= "-100%" ;
}


let section3Div = document.getElementsByClassName("section3Div")
let section3Video = document.querySelector(".section3Video")
let section3VideoDiv =document.querySelector(".section3VideoDiv")

section3Div[0].addEventListener("mouseover", function(){
  section3VideoDiv.style.width ="100%";
  section3Video.src ="media/s2video1.mp4";

});

section3Div[1].addEventListener("mouseover", function(){
  section3VideoDiv.style.width ="100%";
  section3Video.src ="media/s2video2.mp4"
});

section3Div[2].addEventListener("mouseover", function(){
  section3VideoDiv.style.width ="100%";
  section3Video.src ="media/s2video3.mp4"
});

section3Div[0].addEventListener("mouseout", function(){
  section3VideoDiv.style.width ="0%";
  section3Video.src =""
});

section3Div[1].addEventListener("mouseout", function(){
  section3VideoDiv.style.width ="0%";
  section3Video.src =""
});
section3Div[2].addEventListener("mouseout", function(){
  section3VideoDiv.style.width ="0%";
  section3Video.src =""
});
