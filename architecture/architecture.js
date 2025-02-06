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
    "Ferguson, 2024, watercolor and ink on paper, 9x12 inches",
    "Untitled, 2022, watercolor and ink on paper, 9x12 inches",
    "Untitled, 2025, watercolor, gouache, colored pencil, and ink on paper, 8x10",
    "Sadé, 2023, watercolor and ink on paper, 9x12 inches",
    "Untitled, 2023, watercolor and ink on paper, 9x12 inches",
    "Untitled, 2023, watercolor and ink on paper, 9x12 inches",
    "SB, 2023, watercolor, gouache, colored pencil and ink on paper, 9x12 inches"
];


// galleryTitle Div
galleryTitle.textContent = "Architecture Series";
galleryTitle.classList.add("galleryTitle");
archBanner.insertAdjacentElement("afterend", galleryTitle);


//the gallery itself
gallery.classList.add("gallery");
galleryTitle.insertAdjacentElement("afterend", gallery);


//image overlay 
const lightbox = document.createElement('div');
const container = document.createElement('div')
const lightboxImg = document.createElement('img');
const longDescript = document.createElement('div');

lightbox.classList.add("lightbox");
lightbox.id = "lightbox";
lightbox.setAttribute("onclick", "closeImage()");
container.classList.add('lightbox-container');
longDescript.classList.add('long-description');

container.appendChild(lightboxImg);
container.appendChild(longDescript);
lightbox.appendChild(container);
gallery.insertAdjacentElement("afterend", lightbox);



let currentImageIndex = null;


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


function openImage(src){
    console.log(src)
    lightboxImg.src = src;
    lightbox.style.display = "flex";

    //find the index
    let index = images.indexOf(src);
    if(index !== -1){
        longDescript.textContent = longDes[index];
    }

    // THIS DOES THE SAMETHING AS THE LINES ABOVE (INDEXOF)
    // for(let i = 0; i < longDes.length; i++){
    //     console.log(longDes[i]);
    //     for(let j = 0; j < images.length; j++){
    //         if(i === j && images[i] === src){
    //             longDescript.textContent = longDes[j];
    //             // console.log("working");
    //             return    
    //         }
    //     }    
    // }

}
function closeImage(){
    if(currentImageIndex !== null){
        lightboxImg.classList.remove(currentImageIndex.toString());
        currentImageIndex = null;
    }
    document.getElementById("lightbox").style.display = "none";
}









