// Get all the sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current scroll position
    let current = '';

    // Loop through each section
    sections.forEach(section => {
        // Get the top position of the section
        const sectionTop = section.offsetTop;
        // Check if the current scroll position is within the section
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    // Loop through each navigation link
    navLinks.forEach(link => {
        // Remove the 'active' class from all links
        link.classList.remove('active');
        // Add the 'active' class to the link that corresponds to the current section
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Get the form element and response message div
const form = document.getElementById('recommendationForm');
const formResponse = document.getElementById('form-response');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // A simple client-side check to ensure fields are not empty
    if (name.trim() === '' || message.trim() === '') {
        formResponse.textContent = 'Please fill out all fields.';
        formResponse.style.color = 'red';
        return;
    }

    // Display a success message
    formResponse.textContent = 'Thank you for your recommendation!';
    formResponse.style.color = 'green';

    // Log the data to the console (for demonstration)
    console.log(`Recommendation from: ${name}`);
    console.log(`Message: ${message}`);

    // Clear the form fields after a short delay
    setTimeout(() => {
        form.reset();
        formResponse.textContent = '';
    }, 3000);

    // Note: To save this data permanently, you would need to send it to a server.
    // This is a front-end only example and does not save the data.
});

// Get all the sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
