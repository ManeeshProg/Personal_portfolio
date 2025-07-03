// Example configuration file for portfolio website
// Copy this file to config.js and update with your actual values
const config = {
    // Formspree endpoint for contact form
    // Get this from: https://formspree.io/forms/YOUR_FORM_ID/endpoint
    formspreeEndpoint: 'YOUR_FORMSPREE_ENDPOINT_HERE',
    
    // Personal information
    personalInfo: {
        name: 'YOUR_NAME_HERE',
        email: 'YOUR_EMAIL_HERE',
        phone: 'YOUR_PHONE_HERE',
        location: 'YOUR_LOCATION_HERE',
        linkedin: 'YOUR_LINKEDIN_URL_HERE',
        github: 'YOUR_GITHUB_URL_HERE'
    },
    
    // Resume file name
    resumeFile: 'YOUR_RESUME_FILENAME.pdf'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 