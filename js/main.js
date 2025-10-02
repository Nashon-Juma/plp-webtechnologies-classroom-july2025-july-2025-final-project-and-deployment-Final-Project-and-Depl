// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Animal Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const animalItems = document.querySelectorAll('.animal-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter animals
                animalItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Animal Info Toggle
    const infoToggles = document.querySelectorAll('.info-toggle');
    
    infoToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.classList.toggle('active');
            
            // Change button text
            if (details.classList.contains('active')) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'Learn More';
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
            
            // Close other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // Ticket Price Calculator
    const ticketForm = document.getElementById('ticket-form');
    if (ticketForm) {
        const ticketType = document.getElementById('ticket-type');
        const quantity = document.getElementById('quantity');
        const total = document.getElementById('total');
        
        const prices = {
            'adult': 25,
            'child': 15,
            'senior': 20
        };
        
        function calculateTotal() {
            const type = ticketType.value;
            const qty = parseInt(quantity.value) || 0;
            
            if (type && prices[type]) {
                const totalPrice = prices[type] * qty;
                total.value = `$${totalPrice}`;
            } else {
                total.value = '$0';
            }
        }
        
        ticketType.addEventListener('change', calculateTotal);
        quantity.addEventListener('input', calculateTotal);
        
        // Initial calculation
        calculateTotal();
        
        // Form submission
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!ticketType.value) {
                alert('Please select a ticket type');
                return;
            }
            
            if (quantity.value < 1) {
                alert('Please enter a valid quantity');
                return;
            }
            
            // In a real application, this would process the booking
            alert(`Thank you! Your booking for ${quantity.value} ${ticketType.options[ticketType.selectedIndex].text} has been received.`);
            ticketForm.reset();
            calculateTotal();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});