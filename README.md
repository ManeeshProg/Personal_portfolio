# 🚀 AI-Powered Portfolio Website Template

A modern, responsive portfolio website template featuring an AI-powered chat assistant. Perfect for developers, engineers, and tech professionals who want to showcase their skills with cutting-edge technology.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Template-brightgreen)
![AI Assistant](https://img.shields.io/badge/AI-Powered-blue)
![Responsive](https://img.shields.io/badge/Mobile-Responsive-orange)

## 🌟 Features

### 🎯 **Interactive AI Chat Assistant**
- **Real-time AI responses** powered by Google Gemini
- **Floating chat widget** with elegant animations
- **Mobile-responsive** design
- **Professional conversation** about skills, projects, and experience
- **Instant availability** - 24/7 portfolio assistant

### 💼 **Professional Portfolio**
- **Modern design** with dark theme
- **Responsive layout** for all devices
- **Smooth animations** using AOS library
- **Project showcases** with detailed descriptions
- **Contact integration** with social links

### 🛠 **Technical Stack**
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **AI Chat**: React, TypeScript, Google Gemini API
- **Build Tools**: Vite, Node.js
- **Styling**: Custom CSS, Font Awesome icons
- **Animations**: AOS (Animate On Scroll)

## 📂 Project Structure

```
portfolio-template/
├── 📄 index.html                 # Main portfolio page
├── 📄 about.html                 # About page
├── 📄 projects.html              # Projects showcase
├── 📄 contact.html               # Contact page
├── 🎨 css/                       # Stylesheets
├── ⚡ js/                        # JavaScript files
│   ├── main.js                   # Portfolio functionality
│   └── contact-form.js           # Contact form handling
├── 🖼️ images/                    # Portfolio images
├── 🔤 fonts/                     # Web fonts
├── 🤖 personal-portfolio-chatbot/ # AI chat source code
│   ├── 📄 App.tsx                # Main chat application
│   ├── 📄 constants.ts           # Personal information
│   ├── 🧩 components/           # React components
│   ├── 🔧 services/             # API services
│   ├── 📄 .env.example          # Environment variables template
│   └── 📦 package.json          # Dependencies
└── 📚 README.md                  # This file
```

## 🚀 Quick Setup

### 1. **Clone and Customize**
```bash
git clone https://github.com/your-username/portfolio-template.git
cd portfolio-template
```

### 2. **Set Up AI Chat Assistant**
```bash
cd personal-portfolio-chatbot
npm install
```

Create environment file:
```bash
cp .env.example .env
```

Edit `.env` and add your Google Gemini API key:
```bash
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 3. **Customize Your Information**
Edit `personal-portfolio-chatbot/constants.ts` with your details:
```typescript
export const PERSONAL_DATA = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your professional bio...",
  // ... update all sections with your information
};
```

### 4. **Update HTML Files**
Update the following files with your information:
- `index.html` - Main page content
- `about.html` - About page details
- `contact.html` - Contact information
- `projects.html` - Your projects

### 5. **Build and Deploy**
```bash
# Build the chat widget
cd personal-portfolio-chatbot
npm run build:widget

# Return to root and deploy
cd ..
# Deploy to your preferred hosting platform
```

## 🔧 Getting Google Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Click "Get API Key" 
4. Create a new API key
5. Copy the key and add it to your `.env` file

## 🎨 Customization Guide

### **Personal Information**
Update these key files:
- `personal-portfolio-chatbot/constants.ts` - AI chat data
- HTML files (`index.html`, `about.html`, etc.) - Web content
- `js/contact-form.js` - Contact form email

### **Styling**
- `css/style.css` - Main stylesheet
- Modify color schemes, fonts, and layout
- Update images in `images/` folder

### **Chat Widget Appearance**
```css
.chat-widget-container {
    bottom: 30px;  /* Position from bottom */
    right: 30px;   /* Position from right */
}

.chat-toggle-btn {
    background: linear-gradient(135deg, #your-color, #your-color);
}
```

### **Projects Section**
Add your projects in `constants.ts`:
```typescript
projects: [
  {
    name: "Your Project Name",
    description: "Project description...",
    year: "2024",
  },
  // Add more projects
],
```

## 📱 Responsive Design

The template is fully responsive across all devices:
- **Desktop**: Full layout with sidebar chat
- **Tablet**: Optimized layout with accessible chat
- **Mobile**: Compact design with full-screen chat option

## 🌐 Deployment Options

### **GitHub Pages**
1. Push your repository to GitHub
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### **Netlify**
1. Connect your GitHub repository
2. Build command: `cd personal-portfolio-chatbot && npm run build:widget`
3. Publish directory: `/`
4. Add environment variables in Netlify dashboard

### **Vercel**
1. Import your GitHub repository
2. Add environment variables
3. Deploy automatically

### **Custom Domain**
Add a `CNAME` file with your domain name for custom domain deployment.

## 🔒 Environment Variables

Required environment variables:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Optional (for contact form):
```bash
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 🛠 Development

### **Local Development**
```bash
# Start the main portfolio
# Open index.html in your browser

# For chat development
cd personal-portfolio-chatbot
npm run dev
```

### **Building for Production**
```bash
cd personal-portfolio-chatbot
npm run build:widget
```

### **Project Structure Explained**
- `constants.ts` - Your personal/professional data
- `services/geminiService.ts` - AI integration
- `components/` - React chat components
- `js/maneesh-chat-widget.js` - Built chat widget (auto-generated)

## 🎯 Features to Customize

### **Essential Updates**
- [ ] Replace all placeholder text with your information
- [ ] Add your Google Gemini API key
- [ ] Update contact information
- [ ] Add your projects and experience
- [ ] Replace placeholder images
- [ ] Update social media links

### **Optional Enhancements**
- [ ] Add your resume/CV download
- [ ] Integrate contact form service (EmailJS/Formspree)
- [ ] Add Google Analytics
- [ ] Customize color scheme
- [ ] Add more sections (blog, testimonials, etc.)

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs
- Suggest improvements
- Share your customized versions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your API key is correctly set
3. Ensure all dependencies are installed
4. Check the GitHub issues for common problems

## 🌟 Showcase

Built your portfolio with this template? Share it with us! We'd love to see your customizations.

---

<div align="center">

**💡 Create an impressive portfolio with AI-powered interactivity**

*Perfect for developers, engineers, and tech professionals*

**[⭐ Star this repo](https://github.com/your-username/portfolio-template)** if you found it helpful!

</div>