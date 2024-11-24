
// Code to switch between the dark and light background
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // If on the index.html, use Intersection Observer for color changes
    if (document.body.classList.contains('index-page')) {
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
            if (element) observer.observe(element);
        });
    } else {
        // For option1.html and option2.html, set specific colors directly
        const isOption1 = document.body.classList.contains('option1-page');
        const isOption2 = document.body.classList.contains('option2-page');

        if (isOption1 || isOption2) {
            // Assuming both option1 and option2 have light background color
            navLinks.forEach(link => {
                link.classList.add('light'); // Apply light class to make links white
            });
        }
    }
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

  //Buttons of interactivity 

  let player;

  // This function is called automatically when the YouTube IFrame API is ready
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('main-video', {
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
  }
  
  function onPlayerReady(event) {
      // Player is ready
  }
  
  function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
          // Start checking the time if the video is playing
          checkVideoTime();
      }
  }
  
  function checkVideoTime() {
      const interactionButtons = document.getElementById('interaction-buttons');
  
      const interval = setInterval(() => {
          if (player && player.getCurrentTime) {
              const currentTime = player.getCurrentTime();
              if (currentTime >= 240) { // 4 minutes
                  interactionButtons.style.display = 'block';
                  clearInterval(interval); // Stop checking the time after buttons are shown
              }
          }
      }, 1000); // Check every second
  }
  
