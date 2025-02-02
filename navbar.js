//automatically highlight the link of the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a"); // Select all navigation links
    let currentPath = window.location.pathname;

    
    

    if (currentPath === "/index.html") {
        currentPath = currentPath.split("/").pop();
    } 

    navLinks.forEach(link => {
       if(link.getAttribute("href") === currentPath){
        link.classList.add("active");
       }
       
       if(link.getAttribute("href") === "/navBar/waterColor.html"){
        link.classList.remove("active");
       }

    });
});



var navbar = document.getElementById("navBar");
window.addEventListener("scroll", function(){
    if(window.scrollY > 0) {
        navbar.classList.add("fixed", "shrink");
    } else {
        navbar.classList.remove("fixed", "shrink");
    }
});
