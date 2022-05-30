gsap.registerPlugin(ScrollTrigger);

var t3 = gsap.timeline();
var t2 = gsap.timeline();
var t1 = gsap.timeline();

var t4 = gsap.timeline();
var t5 = gsap.timeline();
var t6 = gsap.timeline();

// t1.to("#one",{
//     scrollTrigger: {
//         trigger: "#one",
//         toggleActions: "play none none none"
//     },
//     x: 1000,
//     ease: "power1.inOut",
//     duration: 2
// })

t1.to("#zero",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})

// t3.to("#two",{
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 1
// })

t2.to("#one",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})

// t4.to("#three",{
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 1
// })

// t5.to("#four",{
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 1
// })

// t6.to("#five",{
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 1
// })


// t1.to("#one",{
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 2
// })

// gsap.to("#two",{
//     scrollTrigger: {
//         trigger: "#two",
//     },
//     opacity: 1,
//     ease: "power1.inOut",
//     duration: 2
// })


ScrollTrigger.create({
    animation: t1,
    trigger: "#zero"
});

ScrollTrigger.create({
    animation: t2,
    start: "top center",
    onEnter: () => console.log("Animation works"),
    trigger: "#one"
    // pin: true
});

// ScrollTrigger.create({
//     animation: t3,
//     trigger: "#two"
//     // pin: true
// });

// ScrollTrigger.create({
//     animation: t4,
//     trigger: "#three"
//     // pin: true
// });

// ScrollTrigger.create({
//     animation: t5,
//     trigger: "#four"
//     // pin: true
// });

// ScrollTrigger.create({
//     animation: t6,
//     trigger: "#five"
//     // pin: true
// });
