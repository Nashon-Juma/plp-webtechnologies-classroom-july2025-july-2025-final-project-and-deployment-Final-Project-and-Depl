// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');
        
        // Validation functions
        function validateName() {
            const name = nameInput.value.trim();
            if (name === '') {
                nameError.textContent = 'Name is required';
                return false;
            } else if (name.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                return false;
            } else {
                nameError.textContent = '';
                return true;
            }
        }
        
        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email === '') {
                emailError.textContent = 'Email is required';
                return false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = 'Please enter a valid email address';
                return false;
            } else {
                emailError.textContent = '';
                return true;
            }
        }
        
        function validateSubject() {
            const subject = subjectInput.value;
            if (subject === '') {
                subjectError.textContent = 'Please select a subject';
                return false;
            } else {
                subjectError.textContent = '';
                return true;
            }
        }
        
        function validateMessage() {
            const message = messageInput.value.trim();
            if (message === '') {
                messageError.textContent = 'Message is required';
                return false;
            } else if (message.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                return false;
            } else {
                messageError.textContent = '';
                return true;
            }
        }
        
        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        subjectInput.addEventListener('change', validateSubject);
        messageInput.addEventListener('blur', validateMessage);
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                // In a real application, this would send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                
                // Clear any remaining error messages
                nameError.textContent = '';
                emailError.textContent = '';
                subjectError.textContent = '';
                messageError.textContent = '';
            } else {
                alert('Please fix the errors in the form before submitting.');
            }
        });
    }
});