// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);





// popup js 

document.addEventListener('DOMContentLoaded', function() {
    var downloadButtons = document.querySelectorAll('.download-button');
    var loadingOverlay = document.getElementById('loading-overlay');

    downloadButtons.forEach(function(downloadButton) {
        downloadButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of clicking the link

            // Show loading overlay
            loadingOverlay.textContent = 'Downloading 0%';
            loadingOverlay.classList.add('active');

            var progress = 0;
            var interval = setInterval(function() {
                progress += 1;
                loadingOverlay.textContent = 'Connecting ' + progress + '%';
                if (progress >= 100) {
                    clearInterval(interval);
                    // Change text to "Downloaded"
                    loadingOverlay.textContent = 'Download Start ✔️';
                    // After 2 seconds, hide loading overlay
                    setTimeout(function() {
                        loadingOverlay.classList.remove('active');
                        // Start download
                        window.location.href = downloadButton.href;
                    }, 2000);
                }
            }, 10); // Adjust the interval here for faster counting
        });
    });
});
