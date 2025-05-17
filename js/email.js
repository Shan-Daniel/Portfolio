document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init('0BIiW7EHCBs5FeOp6');  // Your Public Key goes here

    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide previous messages
            formSuccess.classList.add('hidden');
            formError.classList.add('hidden');
            
            // Send the email using your Service ID and Template ID
            emailjs.sendForm('service_8dwfo9b', 'template_7vb1chq', this)
                .then(function() {
                    formSuccess.classList.remove('hidden');
                    contactForm.reset();
                }, function(error) {
                    formError.classList.remove('hidden');
                    console.error('Failed to send message:', error);
                });
        });
    }
});