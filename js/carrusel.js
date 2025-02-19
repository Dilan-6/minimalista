const testimonials = [
    {
        img: "./image/png/client/one.png",
        name: "Matthew Paul",
        text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend."
    },
    {
        img: "./image/png/client/one.png",
        name: "Sarah Johnson",
        text: "Re,    ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "./image/png/client/one.png",
        name: "Daniel Brown",
        text: "Lore,    ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "./image/png/client/one.png",
        name: "Juan Perez",
        text: "Fase,    ipsum dolor asasd sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];
let currentIndex = 0;
function changeTestimonial(index) {
    currentIndex = index;
    document.getElementById("testimonial-img").src = testimonials[index].img;
    document.getElementById("testimonial-name").textContent = testimonials[index].name;
    document.getElementById("testimonial-text").textContent = testimonials[index].text;
    updateDots();
}
function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}
function autoChange() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    changeTestimonial(currentIndex);
}
setInterval(autoChange, 6000);
