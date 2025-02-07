//DOM
const contactBanner = document.createElement('div');
const header  = document.querySelector("header");
const contactTitle = document.createElement('div');

const bodyContainer = document.createElement("div");
const contactContent = document.createElement('div');
const abbyPic = document.createElement("img");
const pic = "/media/banners/Headshot.png";
const form = document.querySelector("form");
const formBox = document.createElement('div');



//classes
contactTitle.classList.add("contactTitle");
contactTitle.textContent="Contact Me";
contactBanner.classList.add("contactBanner");
bodyContainer.classList.add("body-container");
contactContent.classList.add("contactContent");
abbyPic.classList.add("abbyPic");
abbyPic.src = pic;
formBox.classList.add("formBox");

header.insertAdjacentElement("afterend", contactTitle)
header.insertAdjacentElement("afterend", contactBanner);
contactTitle.insertAdjacentElement("afterend", bodyContainer);
bodyContainer.appendChild(contactContent);
contactContent.appendChild(abbyPic);
contactContent.appendChild(formBox);
formBox.appendChild(form);




function sendMail(){
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let name = `${firstname} ${lastname}`;
    let params = {
        name : name,
        subject : subject,
        email : email,
        message : message
    };
    console.log(params);
       
    
    // const serviceID1 = "service_vnl69si";
    const serviceID = "service_4ddtcc4";
    const templateID = "template_3qlqhl7";

    emailjs.send(serviceID, templateID, params).then(
        res=>{
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully");
        },
        err=>{alert("Something went wrong")}
    )
};







