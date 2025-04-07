(function() {
  window.addEventListener('load', function() {
    // Create the anchor element
    var link = document.createElement('a');
    link.href = 'http://voxxdevv.is-a.dev';  // Replace with your desired link
    link.target = '_blank';  // Opens the link in a new tab

    // Create the image element
    var logoImg = document.createElement('img');
    logoImg.src = 'https://raw.githubusercontent.com/voxxdevv/lmdesigns/refs/heads/main/images/lmc.png';  // Replace with the actual URL of your logo
    logoImg.alt = 'Page watermarked by Loud Monkey Designs™.';

    // Style the image to appear in the bottom-right corner
    logoImg.style.position = 'fixed'; // Ensure it stays fixed to the viewport
    logoImg.style.bottom = '10px';  // Distance from the bottom
    logoImg.style.right = '10px';   // Distance from the right
    logoImg.style.width = '20px';   // Width of the image
    logoImg.style.height = '20px';  // Height of the image
    logoImg.style.opacity = '0.5';  // Set the opacity to 0.5
    logoImg.style.zIndex = '2147483647'; // Max z-index to avoid interference
    logoImg.style.filter = 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5))';

    // Ensure the image is not affected by any parent element styles
    logoImg.style.pointerEvents = 'auto'; // Allow click events
    logoImg.style.transform = 'none'; // Neutralize transforms from parent elements
    logoImg.style.willChange = 'transform'; // Ensure optimal rendering

    // Append the image to the anchor tag
    link.appendChild(logoImg);

    // Append the anchor (with the image inside) directly to the body
    document.body.appendChild(link);

    // Log to verify that the image is added
    console.log("Page watermarked by Loud Monkey Designs™.");
  });
})();
