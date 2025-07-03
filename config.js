// Configuration file for portfolio website
const config = {
    // Formspree endpoint for contact form
    formspreeEndpoint: 'https://formspree.io/f/xwpbzwae',
    
    // Personal information
    personalInfo: {
        name: 'Maneesh V',
        email: 'maneeshprog@gmail.com',
        phone: '+91 73581 12574',
        location: 'Chennai, India',
        linkedin: 'https://www.linkedin.com/in/maneesh-v-5a2303256/',
        github: 'https://github.com/ManeeshProg'
    },
    
    // Resume file
    resumeFile: 'Maneesh_resume_agent.pdf'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 