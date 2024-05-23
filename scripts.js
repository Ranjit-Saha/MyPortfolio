// Add any JavaScript functionality if needed

// For example, you can add form submission handling or any other interactive features here
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        if (name && email && message) {
            // Replace alert with actual form submission logic
            alert(Thank you, ${name}! Your message has been sent.);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});