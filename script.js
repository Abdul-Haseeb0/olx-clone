

const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const img1 = selectBtn.querySelector(".img1");

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  img1.classList.toggle("rotate-up");
});


const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;
const interval = 3000; // Change image every 3 seconds

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Automatically advance to the next slide
setInterval(nextSlide, interval);
