const styleswitchertoggler=document.querySelector(".style-switcher-toggler");
const styleswitcher=document.querySelector(".style-switcher");
styleswitchertoggler.addEventListener("click", ()=>{
    styleswitcher.classList.toggle('open');
})
window.addEventListener("scroll",()=>{
    if(styleswitcher.classList.contains('open')){
        styleswitcher.classList.remove('open');
    }
})
const alternatestyles=document.querySelectorAll(".alternate-style");
function setStyle(color){
    alternatestyles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
const daynight=document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})