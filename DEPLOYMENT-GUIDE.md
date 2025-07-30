# Azure Deployment Guide for Maneesh's Portfolio

## 🚀 Azure Static Web Apps Deployment

### Prerequisites
- Azure account (free tier works)
- GitHub account (optional but recommended)

### Files Ready for Deployment
Your portfolio is production-ready with:
- ✅ AI Chat Widget (439KB, fully functional)
- ✅ Contact Form with EmailJS integration
- ✅ Responsive design
- ✅ All assets properly linked

### Deployment Steps

#### Option 1: GitHub + Azure Static Web Apps (Recommended)

1. **Create GitHub Repository**
   ```bash
   # In your ronaldo-master directory
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/maneesh-portfolio.git
   git push -u origin main
   ```

2. **Create Azure Static Web App**
   - Portal: portal.azure.com
   - Resource: Static Web Apps
   - Source: GitHub
   - Repository: maneesh-portfolio
   - Build Details:
     - App location: `/`
     - Output location: `/`

3. **Auto-Deployment**
   - Azure creates GitHub Actions workflow
   - Every push triggers deployment
   - Live URL provided instantly

#### Option 2: Manual Upload

1. **Create Static Web App**
   - Choose "Other" as source
   - Skip GitHub integration

2. **Upload Files**
   - Use Azure Portal file manager
   - Or Azure CLI:
   ```bash
   # Install Azure CLI first
   az staticwebapp deploy --name maneesh-portfolio --resource-group portfolio-rg --source .
   ```

### Post-Deployment Checklist

- [ ] Test live URL
- [ ] Verify chat widget works
- [ ] Test contact form email delivery
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify images load correctly

### Custom Domain (Optional)
1. Buy domain (e.g., maneeshv.com)
2. In Azure Static Web App > Custom domains
3. Add your domain
4. Configure DNS records

### Environment Variables (If needed)
- EmailJS keys are already in the frontend (safe for static sites)
- No backend environment variables needed

### Monitoring
- Azure provides built-in analytics
- Monitor form submissions via EmailJS dashboard
- Check chat widget usage through logs

## 🔗 Expected Result
Your portfolio will be live at:
`https://YOUR_STATIC_WEB_APP_NAME.azurestaticapps.net`

## 💰 Cost
- **Azure Static Web Apps Free Tier:**
  - 100GB bandwidth/month
  - 0.5GB storage
  - Custom domains included
  - **Perfect for portfolios - $0/month**

## 🆘 Troubleshooting

**Chat widget not working?**
- Check browser console for errors
- Verify maneesh-chat-widget.js loads properly

**Contact form not sending emails?**
- Verify EmailJS configuration
- Check EmailJS dashboard for quota
- Test fallback mailto functionality

**Site not loading?**
- Check all file paths are relative (not absolute)
- Verify index.html is in root directory
- Check Azure deployment logs