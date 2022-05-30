var card = document.getElementById("card");


card.addEventListener("click",()=>{
    confetti.start();
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    setTimeout(()=>{
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "flex";
        setTimeout(()=>{
            window.open("main.html","_self");
        },4000)
    },4000)

})