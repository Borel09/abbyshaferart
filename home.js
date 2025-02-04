const sigBox= document.getElementById("sigBox");
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = [
    "/media/artwork/Ocean.jpg",
    "/media/artwork/Self Portrait 2023.JPG",
    "/media/artwork/All My Thoughts They Come in Pairs.png"  
];


images.forEach(function(src){
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Artwork';
    img.onclick = function(){
        openImage(src);
    };
    
    gallery.appendChild(img);
    
    
})
gallery.style.marginBottom = '100px';

function openImage(src){
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}
function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}







window.addEventListener("scroll", function(){
    console.log("test test test");
    if(window.scrollY > 0){
        sigBox.classList.add("visible");
    } else {
        sigBox.classList.remove("visible");
    }
});