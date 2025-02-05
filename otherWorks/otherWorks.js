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




