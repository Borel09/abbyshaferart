let sigBox= document.getElementById("sigBox");


window.addEventListener("scroll", function(){
    console.log("test test test");
    if(window.scrollY > 0){
        sigBox.classList.add("visible");
    } else {
        sigBox.classList.remove("visible");
    }
});

function openImage(src){
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = src;
    lightbox.style.display = "flex";
   

}
function closeImage(){
    document.getElementById("lightbox").style.display = "none";
    
}