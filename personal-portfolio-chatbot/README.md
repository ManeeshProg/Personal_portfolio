# 🤖 Personal Portfolio Chatbot

A modern, interactive AI chatbot for personal portfolio websites. Built with React, TypeScript, and powered by Google Gemini AI.

## 🌟 Features

- 🤖 **AI-powered conversations** using Google Gemini
- 💬 **Real-time streaming responses**  
- 🎨 **Modern dark theme UI** that matches the portfolio
- 📱 **Fully responsive design**
- ⚡ **Built with Vite** for fast development
- 🎯 **Personalized responses** about Maneesh's portfolio
- 🔧 **Widget integration** for main portfolio website

## 📊 Portfolio Information

The chatbot contains comprehensive information about:

### 🎓 **Education**
- **Degree**: B.Tech in AI & ML
- **Institution**: St. Joseph's College of Engineering
- **CGPA**: 8.40
- **Duration**: 2022-Present

### 💼 **Experience**
- **Computer Vision Intern** at MacV AI (Jan 2025 - Present)
- **VLSI Intern** at IIITDM Chennai (May 2024 - Jul 2024)

### 🛠️ **Skills**
Python, TensorFlow, PyTorch, OpenCV, Computer Vision, Deep Learning, NLP, Edge AI, and 25+ more technologies

### 🚀 **Projects**
- **Disaster Rescue Drone** with ML/DL integration
- **Smart Camera** with real-time processing
- **Automatic Internship Agent** with AI automation
- **Face-Based Attendance System** with DBMS integration

### 📞 **Contact Information**
- Email, phone, LinkedIn, and GitHub links

## 🚀 Development Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Google Gemini API key (optional - currently hardcoded)

### **Installation**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build widget for integration
npm run build:widget
```

### **Environment Variables**
```bash
# Copy example environment file
cp .env.example .env

# Add your Gemini API key (optional - currently using hardcoded key)
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build standalone app
npm run build:widget # Build widget for portfolio integration
npm run preview      # Preview production build
```

## 🏗️ Building Widget for Integration

To create the widget for main portfolio integration:

```bash
# Build the widget
npm run build:widget

# This creates:
# - widget-dist/maneesh-chat-widget.js (production-ready widget)

# Copy to main portfolio:
# FROM: widget-dist/maneesh-chat-widget.js
# TO:   ../js/maneesh-chat-widget.js
```

## 📁 Project Structure

```
personal-portfolio-chatbot/
├── 🧩 components/
│   ├── ChatInterface.tsx         # Main chat interface
│   ├── ChatWidget.tsx           # Floating widget component
│   ├── Message.tsx              # Message display
│   ├── MessageWidget.tsx        # Widget message component
│   ├── PersonalInfo.tsx         # Profile sidebar
│   ├── TypingIndicator.tsx      # Typing animation
│   └── TypingIndicatorWidget.tsx # Widget typing animation
├── 🔧 services/
│   └── geminiService.ts         # Google Gemini API integration
├── 📄 constants.ts              # Personal data and system instructions
├── 📄 types.ts                  # TypeScript type definitions
├── 📄 App.tsx                   # Main application (standalone)
├── 📄 WidgetApp.tsx             # Widget application (for integration)
├── 📄 widget.tsx                # Widget entry point
├── 📄 index.tsx                 # Standalone app entry point
├── 🎨 index.css                 # Base styles
├── ⚙️ vite.config.ts            # Vite configuration (development)
├── ⚙️ vite.widget.config.ts     # Vite configuration (widget build)
├── 📋 build-widget.js           # Widget build script
└── 📦 package.json              # Dependencies and scripts
```

## 🎨 Customization

### **Updating Personal Information**
Edit `constants.ts` to modify:
- Personal details (name, title, bio)
- Education information
- Work experience
- Skills and technologies
- Project descriptions
- Contact information

### **Styling the Widget**
The widget uses inline styles in `WidgetApp.tsx` for easy integration. Key customization points:
- Chat button colors and animations
- Chat window dimensions and positioning
- Message bubble styling
- Typography and spacing

### **AI Responses**
The AI behavior is controlled by the `SYSTEM_INSTRUCTION` in `constants.ts`. Modify this to:
- Change conversation style
- Add new topics
- Adjust response format
- Include additional context

## 🔗 Integration with Main Portfolio

The widget is designed to integrate seamlessly with the main portfolio:

1. **Build the widget**: `npm run build:widget`
2. **Copy widget file** to main portfolio's `js/` folder
3. **Add script tag** to main portfolio's HTML
4. **Widget appears** as floating chat button

See the main portfolio's `SETUP.md` for detailed integration instructions.

## 🧪 Testing

### **Development Testing**
```bash
npm run dev
# Open http://localhost:5173
# Test all chat functionality
```

### **Widget Testing**
```bash
npm run build:widget
# Copy widget to main portfolio
# Open main portfolio in browser
# Test floating chat button
```

### **Test Scenarios**
- Ask about education: "Tell me about your education"
- Ask about experience: "What's your experience at MacV AI?"
- Ask about skills: "What programming languages do you know?"
- Ask about projects: "Tell me about your disaster rescue drone"
- Ask for contact: "How can I contact you?"

## 🔒 Security Notes

- **API Key**: Currently hardcoded for demo purposes
- **Production**: Implement proper environment variable management
- **Rate Limiting**: Consider API usage limits for public deployment

## 📱 Mobile Support

The chatbot is fully responsive:
- **Desktop**: Sidebar + chat interface or floating widget
- **Mobile**: Full-screen optimized interface
- **Touch**: Finger-friendly buttons and interactions

## 🤝 Contributing

This is a personal portfolio project, but suggestions for improvements are welcome!

## 📄 License

MIT License - feel free to use as inspiration for your own portfolio projects.

---

<div align="center">

**Built with React + TypeScript + Google Gemini AI**

*Showcasing modern web development and AI integration skills*

</div>