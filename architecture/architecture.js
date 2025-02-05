//DOM
const lightboxImg = document.createElement('img');
const lightbox = document.createElement('div');
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
lightbox.classList.add("lightbox");
lightbox.id = "lightbox";
lightbox.setAttribute("onclick", "closeImage()");
gallery.insertAdjacentElement("afterend", lightbox);


lightboxImg.id = "lightbox-img";
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);


function openImage(src){
    console.log(src)
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}
function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}






