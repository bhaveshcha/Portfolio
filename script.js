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


  // Shery.imageEffect(".mask-group", {
  //   style: 5, //Select Style
  //   debug: true, // Debug Panel
  //   config: {
  //     /* Config made from debug panel */
  //   },
  //   preset: "./presets/wigglewobble.json",
  // });

  // Shery.imageEffect("#music", {
  //   style: 5, //Select Style
  //   debug: true, // Debug Panel
  //   gooey: true,
  // });




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




//   async function updateSpotifyInfo() {
//     const accessToken = 'YOUR_ACCESS_TOKEN'; // Obtain this via OAuth

//     try {
//         const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
//             headers: { 'Authorization': 'Bearer ' + accessToken }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             document.getElementById('song-title').textContent = data.item.name;
//             document.getElementById('artist-name').textContent = data.item.artists.map(artist => artist.name).join(', ');
//             document.getElementById('spotify-song-link').href = data.item.external_urls.spotify;
//         } else {
//             console.log('Spotify API request failed:', response.status);
//             // Handle errors or cases where no song is playing
//         }
//     } catch (error) {
//         console.error('Error fetching Spotify data:', error);
//     }
// }

// // Call the function to update the song info
// updateSpotifyInfo();




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
























