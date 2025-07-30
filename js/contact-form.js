// Contact Form Handler with EmailJS
(function() {
    'use strict';

    // EmailJS Configuration
    const EMAIL_CONFIG = {
        serviceId: 'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        templateId: 'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
    };

    // Initialize EmailJS when page loads
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize EmailJS with public key
        emailjs.init(EMAIL_CONFIG.publicKey);
        
        // Get form elements
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const formMessages = document.getElementById('form-messages');

        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'maneeshprog@gmail.com'
            };

            // Validate form
            if (!validateForm(templateParams)) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Show loading state
            setLoadingState(true);

            // Send email using EmailJS
            emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.templateId,
                templateParams
            )
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                showMessage('✅ Message sent successfully! Maneesh will get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                
                // Fallback: Open default email client
                const subject = encodeURIComponent(templateParams.subject);
                const body = encodeURIComponent(
                    `From: ${templateParams.from_name} (${templateParams.from_email})\n\n${templateParams.message}`
                );
                const mailtoLink = `mailto:maneeshprog@gmail.com?subject=${subject}&body=${body}`;
                
                showMessage(
                    '⚠️ Email service temporarily unavailable. ' +
                    '<a href="' + mailtoLink + '" class="alert-link">Click here to open your email client</a> ' +
                    'or contact directly at maneeshprog@gmail.com',
                    'warning'
                );
            })
            .finally(function() {
                setLoadingState(false);
            });
        }

        function validateForm(data) {
            return data.from_name && 
                   data.from_email && 
                   data.subject && 
                   data.message &&
                   isValidEmail(data.from_email);
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function setLoadingState(loading) {
            if (loading) {
                submitBtn.disabled = true;
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-block';
            } else {
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
            }
        }

        function showMessage(message, type) {
            const alertClass = type === 'success' ? 'alert-success' : 
                             type === 'error' ? 'alert-danger' : 'alert-warning';
            
            formMessages.innerHTML = `
                <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            formMessages.style.display = 'block';

            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 5000);
            }

            // Scroll to message
            formMessages.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // Alternative fallback if EmailJS fails to load
    window.addEventListener('load', function() {
        if (typeof emailjs === 'undefined') {
            console.warn('EmailJS failed to load. Contact form will use mailto fallback.');
            
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const formData = new FormData(contactForm);
                    const subject = encodeURIComponent(formData.get('subject') || 'Contact from Portfolio');
                    const body = encodeURIComponent(
                        `From: ${formData.get('from_name')} (${formData.get('from_email')})\n\n${formData.get('message')}`
                    );
                    const mailtoLink = `mailto:maneeshprog@gmail.com?subject=${subject}&body=${body}`;
                    
                    window.open(mailtoLink);
                });
            }
        }
    });

})();