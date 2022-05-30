confetti.start();

gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();
var t2 = gsap.timeline();
var t3 = gsap.timeline();
var t4 = gsap.timeline();
var t5 = gsap.timeline();
var t6 = gsap.timeline();

var t7 = gsap.timeline();
var t8 = gsap.timeline();
var t9 = gsap.timeline();
var t10 = gsap.timeline();
var t11 = gsap.timeline();
var t12 = gsap.timeline();

var t13 = gsap.timeline();
var t14 = gsap.timeline();
var t15 = gsap.timeline();
var t16 = gsap.timeline();
var t17 = gsap.timeline();
var t18 = gsap.timeline();

var t19 = gsap.timeline();
var t20 = gsap.timeline();
var t21 = gsap.timeline();
var t22 = gsap.timeline();
var t23 = gsap.timeline();

t1.to("#one", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#one", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tone",{
    opacity: 1,
    duration: 1
})


t2.to("#two",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#two", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwo",{
    opacity: 1,
    duration: 1
})

ScrollTrigger.create({
    animation: t1,
    scroller: ".visible",
    trigger: "#one",
});

ScrollTrigger.create({
    trigger: "#two",
    scroller: ".visible",
    animation: t2,
});


t3.to("#three", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#three", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tthree",{
    opacity: 1,
    duration: 1
})


t4.to("#four",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#four", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tfour",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t3,
    scroller: ".visible",
    trigger: "#three"
});

ScrollTrigger.create({
    trigger: "#four",
    scroller: ".visible",
    animation: t4,
});


t5.to("#five", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#five", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tfive",{
    opacity: 1,
    duration: 1
})


t6.to("#six",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#six", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tsix",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t5,
    scroller: ".visible",
    trigger: "#five"
});

ScrollTrigger.create({
    trigger: "#six",
    scroller: ".visible",
    animation: t6,
});



//7-12

t7.to("#seven", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#seven", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tseven",{
    opacity: 1,
    duration: 1
})


t8.to("#eight",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#eight", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#teight",{
    opacity: 1,
    duration: 1
})

ScrollTrigger.create({
    animation: t7,
    scroller: ".visible",
    trigger: "#seven",
});

ScrollTrigger.create({
    trigger: "#eight",
    scroller: ".visible",
    animation: t8,
});


t9.to("#nine", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#nine", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tnine",{
    opacity: 1,
    duration: 1
})


t10.to("#ten",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#ten", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tten",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t9,
    scroller: ".visible",
    trigger: "#nine"
});

ScrollTrigger.create({
    trigger: "#ten",
    scroller: ".visible",
    animation: t10,
});


t11.to("#eleven", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#eleven", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#televen",{
    opacity: 1,
    duration: 1
})


t12.to("#twelve",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#twelve", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwelve",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t11,
    scroller: ".visible",
    trigger: "#eleven"
});

ScrollTrigger.create({
    trigger: "#twelve",
    scroller: ".visible",
    animation: t12,
});

//13-18



t13.to("#thirteen", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#thirteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tthirteen",{
    opacity: 1,
    duration: 1
})


t14.to("#fourteen",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#fourteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tfourteen",{
    opacity: 1,
    duration: 1
})

ScrollTrigger.create({
    animation: t13,
    scroller: ".visible",
    trigger: "#seven",
});

ScrollTrigger.create({
    trigger: "#fourteen",
    scroller: ".visible",
    animation: t14,
});


t15.to("#fifteen", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#fifteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tfifteen",{
    opacity: 1,
    duration: 1
})


t16.to("#sixteen",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#sixteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tsixteen",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t15,
    scroller: ".visible",
    trigger: "#fifteen"
});

ScrollTrigger.create({
    trigger: "#sixteen",
    scroller: ".visible",
    animation: t16,
});


t17.to("#seventeen", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#seventeen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tseventeen",{
    opacity: 1,
    duration: 1
})


t18.to("#eighteen",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#eighteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#teighteen",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t17,
    scroller: ".visible",
    trigger: "#seventeen"
});

ScrollTrigger.create({
    trigger: "#eighteen",
    scroller: ".visible",
    animation: t18,
});

//19-22

t19.to("#nineteen", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#nineteen", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#tnineteen",{
    opacity: 1,
    duration: 1
})


t20.to("#twenty",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#twenty", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwenty",{
    opacity: 1,
    duration: 1
})

ScrollTrigger.create({
    animation: t19,
    scroller: ".visible",
    trigger: "#nineteen",
});

ScrollTrigger.create({
    trigger: "#twenty",
    scroller: ".visible",
    animation: t20,
});


t21.to("#twentyone", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#twentyone", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwentyone",{
    opacity: 1,
    duration: 1
})


t22.to("#twentytwo",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#twentytwo", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwentytwo",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t21,
    scroller: ".visible",
    trigger: "#twentyone"
});

ScrollTrigger.create({
    trigger: "#twentytwo",
    scroller: ".visible",
    animation: t22,
});

t23.to("#twentythree",{
    opacity: 1,
    ease: "power1.inOut",
    duration: 1
})
.to("#twentythree", {
    delay: 2,
    x: -120,
    y: -80,
    scale: 0.9
})
.to("#ttwentythree",{
    opacity: 1,
    duration: 1
})


ScrollTrigger.create({
    animation: t23,
    scroller: ".visible",
    trigger: "#twentythree"
});


