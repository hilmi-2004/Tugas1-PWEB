const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

function toggleNavbar() {
    const navbar = document.getElementById('navbarCollapse');
    navbar.classList.toggle('show');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Kamu memilih kategori: ${item.textContent}`);
    });
});

function startImageSlides() {
    const images = document.querySelectorAll('.slide-image');

    images.forEach(img => {
        const imgArray = img.getAttribute('data-images').split(',');
        let index = 0;
        
        setInterval(() => {
            index = (index + 1) % imgArray.length;
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = imgArray[index];
                img.style.opacity = 1;
            }, 500);
        }, 3000);
    });
}

document.addEventListener('DOMContentLoaded', startImageSlides);

const welcomeImages = [
    "gambar/bakwan1.jpg",
    "gambar/tahuisi1.jpg",
    "gambar/tempe1.jpeg",
    "gambar/pisang1.jpg",
    "gambar/bakwan2.webp",
    "gambar/tahuisi123.jpg",
    "gambar/tempe123.jpeg",
    "gambar/pisangcoklat2.jpg"
];

let currentWelcomeIndex = 0;
const welcomeImageElement = document.getElementById("welcomeImage");

function changeWelcomeImage() {
    currentWelcomeIndex = (currentWelcomeIndex + 1) % welcomeImages.length;
    welcomeImageElement.src = welcomeImages[currentWelcomeIndex];
}

setInterval(changeWelcomeImage, 2000);
