/* =========================================================
   NEETHA PORTFOLIO
   PRODIGY INFOTECH - TASK 04
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* ================= CLOSE MOBILE MENU ================= */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP ================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= NAVBAR SHADOW ================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Neetha Portfolio - Prodigy Infotech Task 04"
);