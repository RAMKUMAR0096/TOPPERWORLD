// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//     const navLinks = document.querySelectorAll(".a-s .nav li a");

//     function changeActiveLink() {
//         let index = sections.length;

//         while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

//         navLinks.forEach((link) => link.classList.remove("active"));
//         navLinks[index].classList.add("active");
//     }

//     changeActiveLink();
//     window.addEventListener("scroll", changeActiveLink);

//     navLinks.forEach((link) => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();

//             const targetSection = document.querySelector(this.hash);
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: "smooth",
//             });

//             navLinks.forEach((link) => link.classList.remove("active"));
//             this.classList.add("active");
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const navToggleBtn = document.getElementById("menu-btn");
//     const navMenu = document.getElementById("a-s");

//     // Function to toggle the menu and button visibility
//     function toggleNavMenu() {
//         if (window.innerWidth <= 991) {
//             const body = document.body;

//             if (navMenu.style.display === "none" || navMenu.style.display === "") {
//                 navMenu.style.display = "block";
//                 body.classList.add("menu-open");
//             } else {
//                 navMenu.style.display = "none";
//                 body.classList.remove("menu-open");
//             }
//         }
//     }

//     // Toggle navigation menu and button visibility on click
//     navToggleBtn.addEventListener("click", toggleNavMenu);

//     // Hide navigation menu and button if clicked outside
//     document.addEventListener("click", function(event) {
//         const isClickInsideNav = navMenu.contains(event.target);
//         const isClickOnToggleBtn = navToggleBtn.contains(event.target);

//         if (!isClickInsideNav && !isClickOnToggleBtn && window.innerWidth <= 991) {
//             navMenu.style.display = "none";
//             document.body.classList.remove("menu-open");
//         }
//     });

//     // Reset menu and button visibility when resizing window
//     window.addEventListener("resize", function() {
//         if (window.innerWidth > 991) {
//             navMenu.style.display = "block"; // Show menu on larger screens
//             document.body.classList.remove("menu-open");
//         } else {
//             navMenu.style.display = "none"; // Hide menu on smaller screens
//             document.body.classList.remove("menu-open");
//         }
//     });
// });
// // last attempt

// document.addEventListener("DOMContentLoaded", function() {
//     const navToggleBtn = document.getElementById("menu-btn");
//     const navMenu = document.getElementById("a-s");

//     // Function to toggle the menu and button visibility
//     function toggleNavMenu() {
//         const body = document.body;

//         if (window.innerWidth <= 991) { // Only apply this on tablet and mobile screens
//             if (body.classList.contains("menu-open")) {
//                 body.classList.remove("menu-open");
//             } else {
//                 body.classList.add("menu-open");
//             }
//         }
//     }

//     // Toggle navigation menu and button visibility on click
//     navToggleBtn.addEventListener("click", toggleNavMenu);

//     // Hide navigation menu if clicked outside of it and the button
//     document.addEventListener("click", function(event) {
//         const isClickInsideNav = navMenu.contains(event.target);
//         const isClickOnToggleBtn = navToggleBtn.contains(event.target);

//         if (!isClickInsideNav && !isClickOnToggleBtn && window.innerWidth <= 991) {
//             document.body.classList.remove("menu-open");
//         }
//     });

//     // Reset menu and button visibility when resizing window
//     window.addEventListener("resize", function() {
//         if (window.innerWidth > 991) {
//             navMenu.style.display = "block"; // Show menu on larger screens
//             document.body.classList.remove("menu-open");
//         } else {
//             navMenu.style.display = "none"; // Hide menu on smaller screens
//             document.body.classList.remove("menu-open");
//         }
//     });
// });

//testing

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//     const navLinks = document.querySelectorAll(".a-s .nav li a");

//     // Function to change the active link based on scroll position
//     function changeActiveLink() {
//         let index = sections.length;

//         while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

//         navLinks.forEach((link) => link.classList.remove("active"));
//         navLinks[index].classList.add("active");
//     }

//     // Function to activate the correct link based on the current page
//     function activateCurrentPageLink() {
//         const currentPath = window.location.pathname.split("/").pop();
        
//         navLinks.forEach((link) => {
//             const linkPath = link.getAttribute("href").split("/").pop();
//             if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
//                 link.classList.add("active");
//             } else {
//                 link.classList.remove("active");
//             }
//         });
//     }

//     // Initial activation based on the current page
//     activateCurrentPageLink();

//     // Change active link on scroll
//     window.addEventListener("scroll", changeActiveLink);

//     // Smooth scroll and activate the clicked link
//     navLinks.forEach((link) => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();

//             const targetSection = document.querySelector(this.hash);
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: "smooth",
//             });

//             navLinks.forEach((link) => link.classList.remove("active"));
//             this.classList.add("active");
//         });
//     });
// });

// // Menu toggle functionality
// document.addEventListener("DOMContentLoaded", function () {
//     const navToggleBtn = document.getElementById("menu-btn");
//     const navMenu = document.getElementById("a-s");

//     // Function to toggle the menu visibility and hide/show the button
//     function toggleNavMenu() {
//         const body = document.body;

//         if (window.innerWidth <= 991) { // Only apply this on tablet and mobile screens
//             if (body.classList.contains("menu-open")) {
//                 body.classList.remove("menu-open");
//                 navMenu.style.display = "none";
//                 navToggleBtn.style.display = "block"; // Show the button
//             } else {
//                 body.classList.add("menu-open");
//                 navMenu.style.display = "block";
//                 navToggleBtn.style.display = "none"; // Hide the button
//             }
//         }
//     }

//     // Toggle navigation menu and button visibility on click
//     navToggleBtn.addEventListener("click", toggleNavMenu);

//     // Hide navigation menu and show the button if clicked outside of it or on the menu itself
//     document.addEventListener("click", function (event) {
//         const isClickInsideNav = navMenu.contains(event.target);
//         const isClickOnToggleBtn = navToggleBtn.contains(event.target);

//         if (!isClickOnToggleBtn && window.innerWidth <= 991) {
//             document.body.classList.remove("menu-open");
//             navMenu.style.display = "none"; // Hide the menu
//             navToggleBtn.style.display = "block"; // Show the button
//         }
//     });

//     // Reset menu and button visibility when resizing window
//     window.addEventListener("resize", function () {
//         if (window.innerWidth > 991) {
//             navMenu.style.display = "block"; // Show menu on larger screens
//             navToggleBtn.style.display = "none"; // Hide the button on larger screens
//             document.body.classList.remove("menu-open");
//         } else {
//             navMenu.style.display = "none"; // Hide menu on smaller screens
//             navToggleBtn.style.display = "block"; // Show the button on smaller screens
//             document.body.classList.remove("menu-open");
//         }
//     });
// });


// //before
// document.addEventListener("DOMContentLoaded", function() {
//     const navToggleBtn = document.getElementById("menu-btn");
//     const navMenu = document.getElementById("a-s");

//     // Function to toggle the menu visibility and hide/show the button
//     function toggleNavMenu() {
//         const body = document.body;

//         if (window.innerWidth <= 991) { // Only apply this on tablet and mobile screens
//             if (body.classList.contains("menu-open")) {
//                 body.classList.remove("menu-open");
//                 navMenu.style.display = "none";
//                 navToggleBtn.style.display = "block"; // Show the button
//             } else {
//                 body.classList.add("menu-open");
//                 navMenu.style.display = "block";
//                 navToggleBtn.style.display = "none"; // Hide the button
//             }
//         }
//     }

//     // Toggle navigation menu and button visibility on click
//     navToggleBtn.addEventListener("click", toggleNavMenu);

//     // Hide navigation menu and show the button if clicked outside of it or on the menu itself
//     document.addEventListener("click", function(event) {
//         const isClickInsideNav = navMenu.contains(event.target);
//         const isClickOnToggleBtn = navToggleBtn.contains(event.target);

//         if (!isClickOnToggleBtn && window.innerWidth <= 991) {
//             document.body.classList.remove("menu-open");
//             navMenu.style.display = "none"; // Hide the menu
//             navToggleBtn.style.display = "block"; // Show the button
//         }
//     });

//     // Reset menu and button visibility when resizing window
//     window.addEventListener("resize", function() {
//         if (window.innerWidth > 991) {
//             navMenu.style.display = "block"; // Show menu on larger screens
//             navToggleBtn.style.display = "none"; // Hide the button on larger screens
//             document.body.classList.remove("menu-open");
//         } else {
//             navMenu.style.display = "none"; // Hide menu on smaller screens
//             navToggleBtn.style.display = "block"; // Show the button on smaller screens
//             document.body.classList.remove("menu-open");
//         }
//     });
// });

//second testing

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".a-s .nav li a");
    const navToggleBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("a-s");

    // Function to change the active link based on scroll position
    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    // Function to activate the correct link based on the current page
    function activateCurrentPageLink() {
        const currentPath = window.location.pathname.split("/").pop();
        
        navLinks.forEach((link) => {
            const linkPath = link.getAttribute("href").split("/").pop();
            if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Function to toggle the menu visibility and hide/show the button
    function toggleNavMenu() {
        const body = document.body;

        if (window.innerWidth <= 991) { // Only apply this on tablet and mobile screens
            if (body.classList.contains("menu-open")) {
                body.classList.remove("menu-open");
                navMenu.style.display = "none";
                navToggleBtn.style.display = "block"; // Show the button
            } else {
                body.classList.add("menu-open");
                navMenu.style.display = "block";
                navToggleBtn.style.display = "none"; // Hide the button
            }
        }
    }

    // Hide navigation menu and show the button if clicked outside of it or on the menu itself
    document.addEventListener("click", function (event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggleBtn = navToggleBtn.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggleBtn && window.innerWidth <= 991) {
            document.body.classList.remove("menu-open");
            navMenu.style.display = "none"; // Hide the menu
            navToggleBtn.style.display = "block"; // Show the button
        }
    });

    // Initial activation based on the current page
    activateCurrentPageLink();

    // Change active link on scroll
    window.addEventListener("scroll", changeActiveLink);

    // Smooth scroll and activate the clicked link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetSection = document.querySelector(this.hash);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });

            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");

            if (window.innerWidth <= 991) {
                navMenu.style.display = "none";
                navToggleBtn.style.display = "block";
                document.body.classList.remove("menu-open");
            }
        });
    });

    // Toggle navigation menu and button visibility on click
    navToggleBtn.addEventListener("click", toggleNavMenu);

    // Reset menu and button visibility when resizing window
    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) {
            navMenu.style.display = "block"; // Show menu on larger screens
            navToggleBtn.style.display = "none"; // Hide the button on larger screens
            document.body.classList.remove("menu-open");
        } else {
            navMenu.style.display = "none"; // Hide menu on smaller screens
            navToggleBtn.style.display = "block"; // Show the button on smaller screens
            document.body.classList.remove("menu-open");
        }
    });
});



//text typing automatic

var typed=new Typed(".typing",{
    strings:["","Web Developer","Frontend Developer","Backend Developer","Full Stack Developer","Mern Stack Developer","Web Designer","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})