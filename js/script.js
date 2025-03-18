function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
function toggleNavbar() {
    let navbar = document.getElementById("navbar");
    let menuBtn = document.getElementById("menu-btn");
    let closeBtn = document.getElementById("close-btn");

    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
    } else {
        navbar.classList.add("active");
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
}

