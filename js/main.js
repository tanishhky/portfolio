function toggleCertificate(certId) {
    var certElement = document.getElementById(certId);
    if (certElement.style.display === "none") {
        certElement.style.display = "block";
    } else {
        certElement.style.display = "none";
    }
}

function clickCertificate(certId){
    if(certId=="cert1"||certId=="cert2"){
        toggleCertificate("cert1");
        toggleCertificate("cert2");
    }
    else if(certId=="cert3"||certId=="cert4"){
        toggleCertificate("cert3");
        toggleCertificate("cert4");
    }
    else if(certId=="cert5"||certId=="cert6"){
        toggleCertificate("cert5");
        toggleCertificate("cert6");
    }
    else if(certId=="cert7"||certId=="cert8"){
        toggleCertificate("cert7");
        toggleCertificate("cert8");
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// JavaScript for Parallax Scrolling
window.addEventListener('scroll', function() {
    // Select all parallax elements
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(function(element) {
        let scrollPosition = window.scrollY; // Get the scroll position
        // Adjust the background position based on scroll
        element.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust speed by changing the multiplier
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'section-visible' class to trigger animation
                entry.target.classList.add('section-visible');
                // Optionally, unobserve the section after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold for when the animation should trigger

    // Observe each section on the page
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});