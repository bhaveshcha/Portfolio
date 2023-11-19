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




  async function updateSpotifyInfo() {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Obtain this via OAuth

    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('song-title').textContent = data.item.name;
            document.getElementById('artist-name').textContent = data.item.artists.map(artist => artist.name).join(', ');
            document.getElementById('spotify-song-link').href = data.item.external_urls.spotify;
        } else {
            console.log('Spotify API request failed:', response.status);
            // Handle errors or cases where no song is playing
        }
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
    }
}

// Call the function to update the song info
updateSpotifyInfo();




const request = require('request'); // You may need to install the 'request' package

const client_id = 'd7d2615e130742fd8e3eed1f2e8d3414';
const client_secret = 'ad5c7dbbacaa4f46ab2f75d3bdaaab73';
const redirect_uri = 'https://bhaveshcha.github.io/Portfolio/';
const code = 'AQB4T2s6eSvLciRJAdp8mG68CEVZ3uixRUBK8w8PQ7vwjPwLNt2ccDlBcaX0DpKP5qEVPxR7cE8uhMj7TPJRThDszumXX-USjBZtoXltl2a7Lq9ZyC9igpKPrJx_KHhKdzuFAvLbt9yuz3l5TrC1pXmSRwmmuAf8jTbhyA0_8EXsbTJR7TzmkSu-UT2H5qFoTukVXhqKBr5XXS0hTT8Q3taQRCOJtbM'; // Replace with your actual code

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    code: code,
    redirect_uri: redirect_uri,
    grant_type: 'authorization_code'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const access_token = body.access_token;
    const refresh_token = body.refresh_token;
    // Use the access token to access the Spotify Web API
    // Save the refresh token for later use
    console.log('Access Token:', access_token);
  } else {
    console.error('Error:', body);
  }
});
const client_secret = 'ad5c7dbbacaa4f46ab2f75d3bdaaab73';
const redirect_uri = 'https://bhaveshcha.github.io/Portfolio/';
const code = 'AQB4T2s6eSvLciRJAdp8mG68CEVZ3uixRUBK8w8PQ7vwjPwLNt2ccDlBcaX0DpKP5qEVPxR7cE8uhMj7TPJRThDszumXX-USjBZtoXltl2a7Lq9ZyC9igpKPrJx_KHhKdzuFAvLbt9yuz3l5TrC1pXmSRwmmuAf8jTbhyA0_8EXsbTJR7TzmkSu-UT2H5qFoTukVXhqKBr5XXS0hTT8Q3taQRCOJtbM';

const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
  },
  body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}`
});

const data = await response.json();
console.log(data);







