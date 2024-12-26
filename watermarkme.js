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
    logoImg.style.position = 'fixed';
    logoImg.style.bottom = '20px';  // Distance from the bottom
    logoImg.style.right = '20px';   // Distance from the right
    logoImg.style.width = '40px';   // Width of the image
    logoImg.style.height = '40px';  // Height of the image
    logoImg.style.opacity = '0.5';  // Set the opacity to 0.5
    logoImg.style.zIndex = '100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    logoImg.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5))';

    // Append the image to the anchor tag
    link.appendChild(logoImg);

    // Append the anchor (with the image inside) to the body of the page
    document.body.appendChild(link);

    // Log to verify that the image is added
    console.log("Page watermarked by Loud Monkey Designs™.");
  });
})();
