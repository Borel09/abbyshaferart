const gallery = document.querySelector('.gallery');
const images = [
    "/media/artwork/otherWorks/Ocean.jpg",
    "/media/artwork/otherWorks/All My Thoughts They Come in Pairs.png",
    "/media/artwork/otherWorks/Self Portrait 2023.JPG",
    "/media/artwork/otherWorks/The Howells Wedding.jpg",
    "/media/artwork/otherWorks/Self Portrait 2022.png",
];
const smallDescript = [
    "Untitled, 2022",
    "All My Thoughts They Come in Pairs, 2022-2025",
    "Self-Portrait, 2023",
    "Newlyweds, 2024-2025",
    "Self-Portrain, 2022"
];
const longDes = [
    "Untitled, 2022, oil on canvas, 18x24 inches",
    "All My Thoughts They Come in Pairs, 2022-2025, oil on canvas, 18x24 inches",
    "Self-Portrait, 2023, charcoal, oil pastel on paper, 22x30 inches",
    "Newlyweds, 2024-2025, charcoal, oil pastel on paper, 8x10 inches",
    "Self-Portrait, 2022, charcoal on paper, 9x12 inches"
];

//image overlay DOM
const lightbox = document.createElement('div');
const container = document.createElement('div');
const lightboxImg = document.createElement('img');
const longDescript = document.createElement('div');

lightbox.classList.add("lightbox");
lightbox.setAttribute("onclick", "closeImage()");
lightbox.id = "lightbox";
container.classList.add("image-container");
longDescript.classList.add("long-description");

container.appendChild(lightboxImg);
container.appendChild(longDescript);
lightbox.appendChild(container);
gallery.insertAdjacentElement("afterend", lightbox);

let currentImageIndex = null;

function generatePic (src, index){
    const container = document.createElement('div');
    const divDesrcipt = document.createElement('div');
    container.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Artwork';
    img.onclick = function(){
        openImage(src);
    };
    
    divDesrcipt.classList.add("overlay");
    divDesrcipt.textContent = smallDescript[index] || "No description available";

    container.appendChild(img);
    container.appendChild(divDesrcipt);
    gallery.appendChild(container);
}
images.forEach(generatePic);

function openImage(src){
    lightboxImg.src = src;
    lightbox.style.display = "flex";

    let index = images.indexOf(src);
    if(index !== -1){
        longDescript.textContent = longDes[index];
    }
}

function closeImage(){
    if(currentImageIndex !== null){
        lightboxImg.classList.remove(currentImageIndex.toString());
        currentImageIndex = null;
    }
    document.getElementById("lightbox").style.display = "none";
}

function isMobileScreen() {
    let isMobile = window.innerWidth <= 768;
    return isMobile;
}
