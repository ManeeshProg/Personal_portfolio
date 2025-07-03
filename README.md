# 🚀 Maneesh V - AI Engineer Portfolio

A modern, responsive portfolio website showcasing my expertise in AI, Computer Vision, and Machine Learning. Built with HTML5, CSS3, and JavaScript.

![Portfolio Preview](images/bg_1.jpg)

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Multi-page Structure** - Organized content across dedicated pages
- **Contact Form Integration** - Formspree-powered contact form
- **SEO Optimized** - Meta tags and structured content for better search visibility
- **Fast Loading** - Optimized assets and efficient code structure

## 📋 Pages

- **Home** (`index.html`) - Hero section, services, projects preview, and call-to-action
- **About** (`about.html`) - Personal information, education, experience, skills, and awards
- **Projects** (`projects.html`) - Showcase of AI and computer vision projects
- **Contact** (`contact.html`) - Contact form and contact information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript** - Interactive elements and animations
- **Bootstrap** - Responsive framework
- **Formspree** - Contact form backend
- **AOS (Animate On Scroll)** - Scroll animations
- **Owl Carousel** - Image carousels
- **Magnific Popup** - Lightbox functionality

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic understanding of HTML/CSS (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ManeeshProg/portfolio.git
   cd portfolio
   ```

2. **Set up Formspree** (for contact form)
   - Go to [Formspree.io](https://formspree.io)
   - Create an account and a new form
   - Update `config.js` with your form endpoint

3. **Customize the content**
   - Update personal information in `config.js`
   - Replace images in the `images/` folder
   - Modify content in HTML files

4. **Run locally**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

5. **Visit your site**
   - Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects page
├── contact.html            # Contact page
├── config.js               # Configuration file
├── config.example.js       # Example configuration
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── Maneesh_resume_agent.pdf # Resume file
│
├── css/                    # Stylesheets
│   ├── style.css          # Main stylesheet
│   ├── bootstrap.min.css  # Bootstrap framework
│   ├── animate.css        # Animation library
│   └── ...                # Other CSS files
│
├── js/                     # JavaScript files
│   ├── main.js            # Main JavaScript
│   ├── jquery.min.js      # jQuery library
│   ├── bootstrap.min.js   # Bootstrap JS
│   └── ...                # Other JS files
│
└── images/                 # Image assets
    ├── bg_1.jpg           # Background images
    ├── work-1.jpg         # Project images
    ├── IMG_3381.JPG       # Profile image
    └── ...                # Other images
```

## ⚙️ Configuration

### Formspree Setup
1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. Update `config.js`:
   ```javascript
   const config = {
       formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
       // ... other config
   };
   ```

### Personal Information
Update your personal details in `config.js`:
```javascript
const config = {
    personalInfo: {
        name: 'Your Name',
        email: 'your.email@example.com',
        phone: '+1 234 567 8900',
        location: 'Your City, Country',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourusername'
    }
};
```

## 🎨 Customization

### Colors
Main colors are defined in `css/style.css`:
```css
:root {
    --primary-color: #F96D00;
    --secondary-color: #2C3E50;
    --text-color: #333333;
    --light-bg: #F8F9FA;
}
```

### Fonts
The portfolio uses Google Fonts (Poppins). To change:
1. Update the Google Fonts link in HTML files
2. Modify font-family in CSS

### Images
- Replace images in the `images/` folder
- Update image paths in HTML files
- Recommended image sizes:
  - Hero background: 1920x1080px
  - Project images: 600x400px
  - Profile image: 400x400px

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Development

### Adding New Pages
1. Create a new HTML file
2. Copy the structure from existing pages
3. Update navigation links
4. Add page-specific content

### Adding New Projects
1. Add project image to `images/` folder
2. Update `projects.html` with new project details
3. Update project counter in `index.html`

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Custom domain support available

### Azure Static Web Apps
1. Install Azure CLI
2. Run: `az staticwebapp create --name your-portfolio --source .`
3. Follow the deployment prompts

## 📞 Contact

- **Email**: maneeshprog@gmail.com
- **LinkedIn**: [Maneesh V](https://www.linkedin.com/in/maneesh-v-5a2303256/)
- **GitHub**: [ManeeshProg](https://github.com/ManeeshProg)
- **Phone**: +91 73581 12574

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Template inspiration from various portfolio designs
- Icons from [Ionicons](https://ionicons.com/)
- Animation library [AOS](https://michalsnik.github.io/aos/)
- Form handling by [Formspree](https://formspree.io)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Maneesh V](https://github.com/ManeeshProg) 