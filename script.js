  // Make sure your document is fully loaded before running the script
  document.addEventListener("DOMContentLoaded", function() {
    // Get the element you want to animate
    let groupImage = document.querySelector('.hero-section .group');
    
    // Create a GSAP animation
    gsap.to(groupImage, {
      y: "-200px", // Moves the image 200px upwards
      scrollTrigger: {
        trigger: '.main',
        start: "top top", // Starts the animation at the top of the hero section
        end: "bottom top", // Ends the animation at the bottom of the hero section
        scrub: true // Smooth scrolling effect
      }
    });
  });








  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener('load', () => {
      const titles = document.querySelectorAll('.title-gsap');
      
      titles.forEach((title, index) => {
          gsap.fromTo(title, {
              opacity: 0,
              scale: 1.2,
              y: '10vh'
          }, {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power3.out",
              scrollTrigger: {
                  trigger: title,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true
              }
          });
      });
  });





  document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.grid');
    
    var msnry = new Masonry(grid, {
        itemSelector: '.content, .content1',
        columnWidth: '.content',
        percentPosition: true,
        gutter: 16
    });
    
    // Ensure all images are loaded before applying the layout
    imagesLoaded(grid).on('always', function() {
        msnry.layout();
    });
  });




  document.querySelector("#ftext button")
  .addEventListener("mouseover", function() {
      gsap.to("#future video", {
          opacity: 1,
          duration: 1.5,
          ease: Power4
      })
  })

  document.querySelector("#ftext button")
  .addEventListener("mouseleave", function() {
    gsap.to("#future video", {
      opacity: 0,
      duration: 1.5,
      ease: Power4
  })
  })






// images aniamtion



  document.addEventListener("DOMContentLoaded", function() {
    // Function to initialize hover effect
    function initHoverEffect(sectionClass) {
      var sections = document.querySelectorAll(sectionClass);

      sections.forEach(function(section) {
        var images = section.querySelectorAll('.image-wrapper img, .image-wrapper1 img');
        var currentImage = 0;

        function nextImage() {
          images[currentImage].style.opacity = 1; // Hide current image
          currentImage = (currentImage + 1) % images.length; // Move to the next image
          images[currentImage].style.opacity = 1; // Show next image
        }

        section.addEventListener('mouseenter', function() {
          // Start the interval when hovering
          imageInterval = setInterval(nextImage, 1000); // Change image every 2 seconds
        });

        section.addEventListener('mouseleave', function() {
          // Clear the interval when not hovering
          clearInterval(imageInterval);
          // Hide all images except the first one
          images.forEach((img, index) => {
            img.style.opacity = index === 0 ? 1 : 0;
          });
          currentImage = 0; // Reset the counter to the first image
        });
      });
    }

    // Initialize hover effect for both sections
    initHoverEffect('.content1');
    initHoverEffect('.content1.featured');
  });







































  document.getElementById('copyButton').addEventListener('click', function() {
    // Get the email address
    var email = 'bhaveshchaubey37@gmail.com';
  
    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = email;
  
    // Append the input element to the document
    document.body.appendChild(tempInput);
  
    // Select and copy the email address
    tempInput.select();
    document.execCommand('copy');
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Change the button text to "Copied"
    var btnCopied = document.querySelector('.btn_copied');
    btnCopied.textContent = 'Email Copied';
  
    // Optional: Reset the button text after a certain delay (e.g., 2 seconds)
    setTimeout(function() {
      btnCopied.textContent = 'Copy Email';
    }, 500);
  });
  
















  function initMarqueeAnimation() {
    const animationConfig = {
        duration: 5,
        x: "-125%",
        repeat: -1,
        ease: "linear"
    };

    const marqueeContainer = document.querySelector(".js-btn-loop");
    gsap.to(marqueeContainer, {
        ...animationConfig
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Other code ...

    // Call the function to initialize marquee animation
    initMarqueeAnimation();
});












// Function to update Uttarakhand time
function updateUttarakhandTime() {
  const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata", // Updated timeZone for Uttarakhand
  };
  const timeString = new Date().toLocaleString("en-US", options);
  document.getElementById("time").textContent = timeString;
}

// Function to get weather information for Uttarakhand
function getUttarakhandWeather() {
  const cityName = "Dehradun"; // City in Uttarakhand
  const apiKey = "159fee27b0d5c9f3b20d5c9d6d3d511b";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          const temperature = (data.main.temp - 273.15).toFixed(1);
          document.getElementById("temperature").textContent = `${temperature}\xb0C`;
          document.getElementById("weather-icon").src = getWeatherIcon(data.weather[0].main);
      })
      .catch((error) => {
          console.error("Error fetching weather data:", error);
          document.getElementById("temperature").textContent = "Temperature data unavailable";
      });
}

// Function to get weather icon based on weather condition
function getWeatherIcon(weatherCondition) {
  switch (weatherCondition) {
      case "Clear":
      default:
          return "https://res.cloudinary.com/fazurrehman/image/upload/v1697663904/weather-icon/clear.svg";
      case "Clouds":
          return "https://res.cloudinary.com/fazurrehman/image/upload/v1697663904/weather-icon/clouds.svg";
      case "Rain":
          return "https://res.cloudinary.com/fazurrehman/image/upload/v1697663905/weather-icon/rain.svg";
      case "Snow":
          return "https://res.cloudinary.com/fazurrehman/image/upload/v1697663904/weather-icon/snow.svg";
  }
}

// Invoke the functions for Uttarakhand
updateUttarakhandTime();
getUttarakhandWeather();

// Set intervals for updating time and weather
setInterval(updateUttarakhandTime, 1000);
setInterval(getUttarakhandWeather, 600000);

















document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.getElementById('viewMoreCursor');
    var content = document.querySelector('.content1');
  
    // Function to move the cursor
    function moveCursor(e) {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'Power3.easeOut'
      });
    }
  
    // Show and animate cursor on hover
    content.addEventListener('mouseenter', function(e) {
      gsap.to(cursor, { scale: 1, autoAlpha: 1 });
      moveCursor(e);
    });
  
    // Hide cursor on mouse leave
    content.addEventListener('mouseleave', function() {
      gsap.to(cursor, { scale: 0.5, autoAlpha: 0 });
    });
  
    // Move cursor on mouse move
    content.addEventListener('mousemove', moveCursor);
  });
  





















  window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var backgroundPosition = "50% " + (scrollPosition * 0.5) + "px";
    document.querySelector('.full-width').style.backgroundPosition = backgroundPosition;
  });













  