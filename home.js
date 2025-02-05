const sigBox= document.getElementById("sigBox");
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = [
    "/media/artwork/archiecture/Sadé.jpg",
    "/media/artwork/otherWorks/All My Thoughts They Come in Pairs.png",
    "/media/artwork/otherWorks/Self Portrait 2023.JPG"  
];
const smallDescript = [
    "Sadé, 2023",
    "All My Thoughts They Come in Pairs, 2022-2025",
    "Self-Portrait, 2023"
];



function generatePic(src, index){
    const container = document.createElement('div');
    const divDesrcipt = document.createElement('div');
    container.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.classList.add("favorites");
    img.alt = 'Artwork';
    img.onclick = function(){
        openImage(src);
    };
    
    divDesrcipt.classList.add("overlay");
    divDesrcipt.textContent = smallDescript[index] || "No descriptions available";

    container.appendChild(img);
    container.appendChild(divDesrcipt);
    gallery.appendChild(container);   
}
images.forEach(generatePic);
// gallery.style.marginBottom = '100px';










function openImage(src){
    console.log(src)
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