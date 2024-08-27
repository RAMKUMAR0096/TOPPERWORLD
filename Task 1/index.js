const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class",isOpen?"fa-solid fa-xmark":"fa-solid fa-bars")
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","fa-solid fa-bars")
})
    const scrollRevealOption= {
            reset: true,    
            distance:"50px",
            origin:"bottom",
            duration:1000,
        };
        ScrollReveal().reveal(".header-image img",{
            ...scrollRevealOption,
            origin:"right",
        });
        ScrollReveal().reveal(".header-content h2",{
            ...scrollRevealOption,
            delay:500,
        });
        ScrollReveal().reveal(".header-content h1",{
            ...scrollRevealOption,
            delay:1000,
        });
        ScrollReveal().reveal(".header-content p",{
            ...scrollRevealOption,
            delay:1500,
        });
        ScrollReveal().reveal(".header-content .header-btn",{
            ...scrollRevealOption,
            delay:2000,
        });
        ScrollReveal().reveal(".header-content .social",{
            ...scrollRevealOption,
            delay:2500,
        });
        ScrollReveal().reveal(".header-bar",{
            ...scrollRevealOption,
            delay:3500,
        });


