const sigBox= document.getElementById("sigBox");
const gallery = document.querySelector('.gallery');

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

const longDes = [
    "Sadé, 2023, watercolor and ink on paper, 9x12 inches",
    "All My Thoughts They Come in Pairs, 2022-2025, oil on canvas, 28x24 inches",
    "Self-Portrait, 2023, charcoal, oil pastel on paper, 22x30 inches"
];

//image overlay
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
lightboxImg.id = "lightbox-img";
const container = document.createElement('div');
container.classList.add('lightbox-container');
const longDescript = document.createElement('div');
longDescript.classList.add('long-description');

//attaching created divs to the document
container.appendChild(lightboxImg);
container.appendChild(longDescript);
lightbox.appendChild(container);


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

    let index = images.indexOf(src);
    if(index !== -1){
        longDescript.textContent = longDes[index];
    }
}
function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}


//detect if screen is mobile sized or not
function isMobileScreen(){
    //console.log(window.innerWidth);
    let isMobile = window.innerWidth <= 768;
    //console.log(isMobile);
    return isMobile;
}



if(!isMobileScreen()){
    window.addEventListener("scroll", function(){
        console.log("test test test");
        if(window.scrollY > 0){
            sigBox.classList.add("visible");
        } else {
            sigBox.classList.remove("visible");
        }
    });
} else {
    let removeSign = document.getElementById("sigBox");
    //delete the child of contaainer to remove the signature box on mobile
    removeSign.parentNode.removeChild(removeSign);
}
