

const navLinks = document.querySelectorAll('.nav-link');

// Define sections and their respective colors
const sections = [
  { id: 'section1', color: 'black' }, // Light background
  { id: 'section2', color: 'light' }, // Dark background
  { id: 'section3', color: 'black' }, // Light background
  { id: 'section4', color: 'light' }  // Dark background
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = sections.find(s => s.id === entry.target.id);
      if (section) {
        navLinks.forEach(link => {
          link.classList.toggle('light', section.color === 'light');
        });
      }
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  const element = document.getElementById(section.id);
  observer.observe(element);
});

// W3.CSS Carousel Script

    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

// Show interaction buttons at 4 minutes (240 seconds)
document.addEventListener("DOMContentLoaded", function () {
    const videoIframe = document.getElementById('main-video');
    const interactionButtons = document.getElementById('interaction-buttons');
  
    if (videoIframe) {
      setTimeout(() => {
        interactionButtons.style.display = 'block';
      }, 240000); // 4 minutes = 240000 milliseconds
    }
  });