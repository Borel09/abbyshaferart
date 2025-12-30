//automatically highlight the link of the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a"); // Select all navigation links
    const menuToggle = document.getElementById("menuToggle");
    const mobileLinks = document.getElementById("navLinks");
    const galPTag = document.getElementById("galleryID"); 
    
    
    let currentPath = window.location.pathname;

    let galleryParent = document.querySelector('.nav-links .dropdown > p');
    let isGalleryPage = false;

    // Mobile menu toggle
    if(menuToggle && mobileLinks){
        menuToggle.addEventListener("click", function(){
            mobileLinks.classList.toggle("show");
            console.log("firing")
        });
        //mobile active loop
        
    }

    //desktop active loop
    navLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname;
        //console.log(linkPath)

        if(linkPath === currentPath){
            link.classList.add("active");
        }

        if(linkPath.startsWith("/architecture/") && linkPath === currentPath){
            link.classList.add("active-dropdown");
            isGalleryPage = true;
        } else if(linkPath.startsWith("/otherWorks/") && linkPath === currentPath){
            link.classList.add("active-dropdown");
            isGalleryPage = true;
        }

    });
    

    // if current page belongs to the gallery dropdown, highlight the main "gallery" link
    if(isGalleryPage && galleryParent){
        galleryParent.classList.add("active");
        
    }
    

    
});




//forced navigation when clicking on gallery on mobile
document.addEventListener("DOMContentLoaded", function () {
    const galleryToggle = document.getElementById("gallery-toggle");
    const isMobile = window.innerWidth <= 768;
    if(isMobile && galleryToggle){
        galleryToggle.style.cursor = "pointer";
        galleryToggle.addEventListener("click", function(){
            window.location.href = "/architecture/architectureSeries.html";
        });
    }

    // insert a link to other works page at the bottom of the pictures on the architecture page


});

var navbar = document.getElementById("navBar");
window.addEventListener("scroll", function(){
    navbar.classList.toggle("fixed", window.scrollY > 0);
    navbar.classList.toggle("shrink", window.scrollY > 0);
});

