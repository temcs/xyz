
// google map
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

//Google map
$(function(){
  $('.flexslider').flexslider({
    controlNav : false,
    nextText : '',
    prevText : '',
    });
  loadGoogleMap();
});

// Hide mobile menu after clicking on a link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });







    const videos = document.querySelectorAll('.video-player');
    
    videos.forEach(video => {
        video.addEventListener('play', function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
    
            // Apply zoom effect on the video when playing
            const container = video.parentElement;
            container.classList.add('zoomed');
    
            video.addEventListener('ended', function() {
                container.classList.remove('zoomed');
            });
        });
    });


    // flow shake 

    function shakeChild(index) {
        var flowChildren = document.querySelectorAll('.flow-child');
        flowChildren.forEach(function(child, idx) {
            if (idx === index) {
                child.classList.add('shaking');
            } else {
                child.classList.remove('shaking');
            }
        });
    }
    
    function shakeLoop() {
        var index = 0;
        setInterval(function() {
            shakeChild(index);
            index = (index + 1) % 3;
        }, 3000); // Repeat the animation every 3 seconds
    }
    
    shakeLoop();

    // idenhi ivdi balvisi likki 10 arba 

var clickCount = 0;
var clickDiv = document.getElementById("clickDiv");
var hiddenDiv = document.getElementById("hdn");

if (!clickDiv || !hiddenDiv) {
  console.error("Could not find clickDiv or hiddenDiv");
} else {
  clickDiv.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 5) {
      hiddenDiv.style.display = "block";
    }
  });
}



//lazy load videos

const videos = document.querySelectorAll("video");

const lazyLoadVideos = () => {
  videos.forEach((video) => {
    const rect = video.getBoundingClientRect();
    const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (inViewport && video.dataset.src) {
      const source = video.querySelector("source");
      source.src = source.dataset.src; // Move data-src to src
      video.load(); // Load the video
      delete source.dataset.src; // Remove the data-src attribute
    }
  });
};

window.addEventListener("scroll", lazyLoadVideos);


//share button

function shareVideo(buttonElement) {
    const videoContainer = buttonElement.closest('.Videos');
    const videoId = videoContainer.id;
    const videoTitle = videoContainer.querySelector('h4').childNodes[0].textContent.trim();
    const websiteUrl = 'https://8mbets.social/'; // Replace with your website URL
    const shareUrl = `${websiteUrl}#${videoId}`;
    const shareText = `${videoTitle} এখানে ক্লিক করে :- ${shareUrl}`;

    // Copy the share text to the clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        console.log('Link copied to clipboard');

        // Show the custom notification
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000); // Hide notification after 2 seconds
    }).catch(console.error);

    if (navigator.share) {
        navigator.share({
            text: shareText
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support the Web Share API
        prompt('Copy this link to share:', shareText);
    }
}


  
  
