let sigBox= document.getElementById("sigBox");


window.addEventListener("scroll", function(){
    console.log("test test test");
    if(window.scrollY > 0){
        sigBox.classList.add("visible");
    } else {
        sigBox.classList.remove("visible");
    }
});