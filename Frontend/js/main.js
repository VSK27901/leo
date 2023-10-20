// Get references to the navigation links
const homeLink = document.querySelector("nav .links li:nth-child(1) a");
const aboutLink = document.querySelector("nav .links li:nth-child(2) a");
const contactLink = document.querySelector("nav .links li:nth-child(3) a");
const joinLink = document.querySelector("div .links li:nth-child(4) a"); 

// Get references to the target sections
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");
const joinSection = document.getElementById("join"); 

// Smooth scroll function
function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Add click event listeners to the navigation links
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection(homeSection);
});

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection(aboutSection);
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection(contactSection);
});

joinLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection(joinSection); 
});



// Define a function to fetch the homepage (index.html)
function fetchHomepage() {
    fetch('/index.html') 
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((htmlContent) => {
            // Assuming you want to replace the current page's content with the fetched homepage
            document.body.innerHTML = htmlContent;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Call the function to fetch the homepage
fetchHomepage();


