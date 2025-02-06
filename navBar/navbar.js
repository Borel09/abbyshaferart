//automatically highlight the link of the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a"); // Select all navigation links
    let currentPath = window.location.pathname;

    let galleryParent = document.querySelector('.nav-links .dropdown > p');
    let isGalleryPage = false;

    navLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname;
        console.log(linkPath)

        if(linkPath === currentPath){
            link.classList.add("active");
        }

        if(linkPath.startsWith("/architecture/") && linkPath === currentPath){
            link.classList.add("active-dropdown");
        } else if(linkPath.startsWith("/otherWorks/") && linkPath === currentPath){
            link.classList.add("active-dropdown");
        }

    });
    // if current page belongs to the gallery dropdown, highlight the main "gallery" link
    if(isGalleryPage && galleryParent){
        galleryParent.classList.add("active");
    }
});



var navbar = document.getElementById("navBar");
window.addEventListener("scroll", function(){
    navbar.classList.toggle("fixed", window.scrollY > 0);
    navbar.classList.toggle("shrink", window.scrollY > 0);
});
