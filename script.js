const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

    document.getElementById("landingPage").classList.add("fadeOut");

    setTimeout(()=>{
        document.getElementById("landingPage").style.display="none";
        document.getElementById("website").style.display="block";
    },800);

});
