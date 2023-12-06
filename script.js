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




const clientId = "d7d2615e130742fd8e3eed1f2e8d3414"; // Replace with your client ID
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId) {
    // TODO: Redirect to Spotify authorization page
}

async function getAccessToken(clientId, code) {
  // TODO: Get access token for code
}

async function fetchProfile(token) {
    // TODO: Call Web API
}

function populateUI(profile) {
    // TODO: Update UI with profile data
}



























// Function to update the weather information
function updateWeather(data) {
    // Extract relevant weather information
    const city = data.location.name;
    const temperature = data.current.temperature;
    const time = data.current.observation_time;
    const weatherIcon = data.current.weather_icons[0];
  
    // Update the HTML with the new weather information
    document.getElementById('weather-info').innerHTML = `
      <div class="location_col">
        <div class="font-s-small">${city}</div>
      </div>
      <div class="location_col">
        <div id="temperature" class="font-s-small">${temperature}°C</div>
      </div>
      <div class="location_col">
        <div id="time" class="font-s-small">${time}</div>
      </div>
      <div class="location_col weather">
        <img src="${weatherIcon}" loading="lazy" id="weather-icon" alt="" class="weather_icon">
      </div>
    `;
  }
  
  // Function to fetch weather data from the API
// Function to fetch weather data from the API
async function getWeather() {
    try {
      // Replace 'YOUR_ACCESS_KEY' with your actual Weatherstack API key
      const accessKey = 'c1597aa01d177595f2fca9094bfb9082';
      const locationQuery = 'New York';
      const units = 'm';
      const language = 'en'; // Use a valid 2-letter ISO language code
  
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${locationQuery}&units=${units}&language=${language}`);
      const data = await response.json();
  
      // Update the HTML with the new weather information
      updateWeather(data);
  
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  
  // Initial update with the provided data
  getWeather();
  
















