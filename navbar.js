//automatically highlight the link of the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a"); // Select all navigation links
    let currentPath = window.location.pathname;

    // console.log("current path: " + currentPath);
    // If the current path "/", treat it as a "index.html"
    if (currentPath === "/index.html") {
        currentPath = currentPath.split("/").pop();
    } 
    

    // console.log("current path: " + currentPath);
    // console.log(window.location.href);

    navLinks.forEach(link => {
       if(link.getAttribute("href") === currentPath){
        // console.log("working");
        link.classList.add("active");
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
