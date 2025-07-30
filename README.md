# 🚀 Maneesh V - Portfolio with AI Chat Assistant

A modern, interactive portfolio website featuring an AI-powered chat assistant built with cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
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
ronaldo-master/
├── 📄 index.html                 # Main portfolio page
├── 📄 about.html                 # About page
├── 📄 projects.html              # Projects showcase
├── 📄 contact.html               # Contact page
├── 🎨 css/                       # Stylesheets
├── ⚡ js/                        # JavaScript files
│   ├── main.js                   # Portfolio functionality
│   └── maneesh-chat-widget.js    # AI chat widget
├── 🖼️ images/                    # Portfolio images
├── 🔤 fonts/                     # Web fonts
├── 🤖 personal-portfolio-chatbot/ # AI chat source code
│   ├── 📄 App.tsx                # Main chat application
│   ├── 📄 constants.ts           # Personal information
│   ├── 🧩 components/           # React components
│   ├── 🔧 services/             # API services
│   └── 📦 package.json          # Dependencies
└── 📚 README.md                  # This file
```

## 🚀 Quick Start

### 1. **View the Portfolio**
Simply open `index.html` in your web browser to see the complete portfolio with AI chat assistant.

### 2. **Test the AI Chat**
- Look for the **floating purple chat button** in the bottom-right corner
- Click to open the AI assistant
- Ask questions like:
  - "Tell me about your experience at MacV AI"
  - "What programming languages do you know?"
  - "Describe your disaster rescue drone project"
  - "How can I contact you?"

### 3. **Development Setup** (Optional)
If you want to modify the chat assistant:

```bash
cd personal-portfolio-chatbot
npm install
npm run dev          # Development server
npm run build:widget # Build for production
```

## 🤖 AI Chat Assistant Features

### **What the AI Can Tell You About:**
- 🎓 **Education**: B.Tech in AI & ML, St. Joseph's College (CGPA: 8.40)
- 💼 **Experience**: Computer Vision Intern at MacV AI, VLSI Intern at IIITDM Chennai
- 🛠️ **Skills**: Python, TensorFlow, PyTorch, OpenCV, Deep Learning, and more
- 🚀 **Projects**: 
  - Disaster Rescue Drone with ML/DL
  - Smart Camera with real-time processing
  - Automatic Internship Agent
  - Face-Based Attendance System
- 📞 **Contact**: Email, LinkedIn, GitHub, phone information

### **Chat Features:**
- ✅ **Instant responses** with streaming text
- ✅ **Professional conversation** style
- ✅ **Accurate information** about Maneesh's background
- ✅ **Mobile-friendly** interface
- ✅ **Beautiful animations** and smooth UX

## 🎨 Customization

### **Styling the Chat Widget**
The chat widget automatically matches your portfolio's theme. To customize:

```css
.chat-widget-container {
    bottom: 30px;  /* Position from bottom */
    right: 30px;   /* Position from right */
}

.chat-toggle-btn {
    background: linear-gradient(135deg, #your-color, #your-color);
}
```

### **Updating Chat Information**
Edit `personal-portfolio-chatbot/constants.ts` to update:
- Personal information
- Skills and technologies
- Project descriptions
- Contact details

## 📱 Mobile Responsiveness

The portfolio and chat assistant are fully responsive:
- **Desktop**: Full sidebar + chat widget
- **Tablet**: Optimized layout with accessible chat
- **Mobile**: Compact design with full-screen chat option

## 🔧 Technical Implementation

### **Chat Widget Integration**
The AI assistant is integrated as a single JavaScript file:
```html
<script src="js/maneesh-chat-widget.js"></script>
```

### **Build Process**
```bash
# Development
npm run dev

# Production build
npm run build:widget
```

### **API Configuration**
The chat uses Google Gemini AI with hardcoded API key for demo purposes. For production, implement proper environment variable management.

## 🌐 Deployment

### **GitHub Pages**
1. Upload repository to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Access via `https://yourusername.github.io/repository-name`

### **Custom Domain**
Add `CNAME` file with your domain name for custom domain deployment.

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Maneesh V**
- 📧 Email: maneeshprog@gmail.com
- 💼 LinkedIn: [Profile](https://www.linkedin.com/in/maneesh-v-5a2303256)
- 🐙 GitHub: [ManeeshProg](https://github.com/ManeeshProg)
- 📱 Phone: +91 7358112574

---

<div align="center">

**💡 Showcasing AI/ML expertise through an interactive portfolio experience**

*Built with passion for innovation and cutting-edge technology*

</div>