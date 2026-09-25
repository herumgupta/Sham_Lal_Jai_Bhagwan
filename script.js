const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


// Open / close mobile menu

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});