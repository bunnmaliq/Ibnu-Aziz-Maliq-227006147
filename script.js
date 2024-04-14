// Select the tab buttons
const tabButtons = document.querySelectorAll(".nav ul li a");

// Define the URLs for each tab
const tabURLs = {
  about: "https://www-example-com.cdn.ampproject.org/c/s/www.example.com", // Replace with your actual About Me page URL
  skills: "https://www.indeed.com/career-advice/resumes-cover-letters/best-resume-skills", // Replace with your actual Skills page URL
  project: "https://docs.djangoproject.com/en/5.0/intro/tutorial01/", // Replace with your actual Project page URL
  contact: "https://discussions.apple.com/thread/3275513" // Replace with your actual Contact Me page URL
};

// Add click event listener to each tab button
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Prevent default link behavior (preventing page from jumping to top)
    event.preventDefault();

    // Get the tab name from the button's data-target attribute
    const tabName = button.getAttribute("data-target");

    // Retrieve the corresponding URL from tabURLs
    const url = tabURLs[tabName];

    // Update the browser's location to navigate to the selected URL
    window.location.href = url;
  });
});