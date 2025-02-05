//DOM

const gallery = document.createElement('div');
const galleryTitle = document.createElement('div');
const archBanner = document.querySelector(".archBanner");

const images = [
    "/media/artwork/archiecture/Ferguson.jpg",
    "/media/artwork/archiecture/Garage.jpg",
    "/media/artwork/archiecture/Lilly.jpg",
    "/media/artwork/archiecture/Sadé.jpg",
    "/media/artwork/archiecture/Sarah 1.png",
    "/media/artwork/archiecture/Sarah 2.png",
    "/media/artwork/archiecture/Shafer Borel.jpg"
];
const smallDescript = [
    "Ferguson, 2024",
    "Untitled, 2022",
    "Untitled, 2025",
    "Sadé, 2023",
    "Untitled, 2023",
    "Untitled, 2023",
    "SB, 2023"
];
const longDes = [
    "one"
    // "two",
    // "three",
    // "four",
    // "five",
    // "six",
    // "seven"
];


// galleryTitle Div
galleryTitle.textContent = "Architecture Series";
galleryTitle.classList.add("galleryTitle");
archBanner.insertAdjacentElement("afterend", galleryTitle);


//the gallery itself
gallery.classList.add("gallery");
galleryTitle.insertAdjacentElement("afterend", gallery);

function generatePic(src, index){
    const container = document.createElement('div');
    const divDesrcipt = document.createElement('div');
    container.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = "Artwork";
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




//image overlay 
const lightbox = document.createElement('div');
const container = document.createElement('div')
container.classList.add('lightbox-container');
const lightboxImg = document.createElement('img');
const longDescript = document.createElement('div');
longDescript.classList.add('long-description')
lightbox.classList.add("lightbox");
lightbox.id = "lightbox";
lightbox.setAttribute("onclick", "closeImage()");
gallery.insertAdjacentElement("afterend", lightbox);


lightboxImg.id = "lightbox-img";
container.appendChild(lightboxImg);
container.appendChild(longDescript);
lightbox.appendChild(container);
document.body.appendChild(lightbox);



let currentImageIndex = null;

function openImage(src){
    console.log(src)
    lightboxImg.src = src;
    addIndexClass(src, images);
    lightbox.style.display = "flex";
    longDescript.textContent = "TEST TEST TEST"
}
function closeImage(){
    if(currentImageIndex !== null){
        lightboxImg.classList.remove(currentImageIndex.toString());
        currentImageIndex = null;
    }
    document.getElementById("lightbox").style.display = "none";
}

function addIndexClass(path, array){
    let index = array.indexOf(path);
    if(index !== -1){
        if(currentImageIndex !== null){
            lightboxImg.classList.remove(currentImageIndex.toString());
        }
        lightboxImg.classList.add(index.toString());
        currentImageIndex = index;
        console.log(index)
    }
}







