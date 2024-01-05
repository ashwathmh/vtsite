// Get the elements by class name
var downloadButton = document.querySelector(".download-button");
var bannerHeading = document.querySelector(".banner-heading");

// Retrieve stored values from localStorage
var storedValue = localStorage.getItem("myKey");
var storedHref = localStorage.getItem("myDow");

// Set the href attribute of the download button
downloadButton.href = storedHref;

// Update banner heading with stored value
bannerHeading.innerHTML = storedValue;

// Define the JavaScript function
function myFunction(p, q, r) {
  // Set values in localStorage
  localStorage.removeItem("myKey");
  localStorage.removeItem("myDow");
  localStorage.setItem("myKey", p);
  localStorage.setItem("myDow", q);
}
