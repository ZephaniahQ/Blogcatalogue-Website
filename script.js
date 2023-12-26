document.addEventListener('DOMContentLoaded', function() {
    var categories = document.getElementsByClassName('selection-box');
    
    // Adding a click listener to each category element
    for (var i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', function() {
            // Retrieve the data-href attribute and redirect to the URL
            var url = this.getAttribute('data-href');
            window.location.href = url;
        });
    }
});

function iframeLoaded(iframeElement) {
    // Hide the loading spinner
    iframeElement.previousElementSibling.style.display = 'none';
    // Show the iframe
    iframeElement.style.visibility = 'visible';
}