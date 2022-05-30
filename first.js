var card = document.getElementById("card");
const rec = new Audio("./assets/Best/letter.ogg");
const sbgs1 = new Audio("./assets/Best/sbgs1.mp3");
const sbgs2 = new Audio("./assets/Best/sbgs2.mp3");

card.addEventListener("mouseover",()=>{
    sbgs1.play();
    sbgs1.volume = 0.5;
})

card.addEventListener("click",()=>{
    sbgs1.play();
    sbgs1.volume = 0.5;
    confetti.start();
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    setTimeout(()=>{
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "flex";
        setTimeout(()=>{
            rec.play();
        },500)
    },4000)

})

var msg = document.getElementById("msg");

msg.addEventListener("click", message);

var i = 1;

function message(){
    if(i==1)
    {
        msg.innerHTML = "I wished to thank you both for everything that you have done for me till now. I will always be indebted to you both. I learnt soo much from both of you! Mumma, I still remember the time when you used to teach me while I sat on your lap, with my teady nearby. Your understanding nature has heavily influenced mine. My favourite past time is laying on your lap with you patting my head.";

        i++;
        return;
    }

    if(i==2)
    {
        msg.innerHTML = "Papa, thank you for the late night talks we had. They have always kept me on track. Thankyou for being here with me when Mumma goes to Bhira. I am trying to inculcate your stress free attitude. I wanted to ask you to pardon me if I had ever hurt you. I will definitely try to improve upon my fitness and be more productive. I learnt a lot when you both handled some really tough situations together. You both complete each other’s flaws and I know you care for each other alot.";

        i++;
        return;
    }

    if(i==3)
    {
        msg.innerHTML = "I promise you both, I would never forget the efforts and pains that you have taken for me, and I will try to be the best version of myself in my college life. I promise, you will both be proud. I will definitely call you more often when I’ll be in the hostel. Don’t get sad when you’ll miss me!  I will care for you both more than I ever have. I will be back soon, being better, just for you!";

        i++;
        return;
    }

    if(i==4)
    {
        msg.innerHTML = " I again wish you both a very 20th Happy Anniversary. Keep spending an awesome time together overcoming all the hurdles in your ways! Love you Mumma Papa! Click again! There's more!";

        i++
        return;
    }

    if(i==5)
    {
        window.open("main.html","_self");
    }
}