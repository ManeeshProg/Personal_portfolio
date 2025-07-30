# EmailJS Setup Guide for Contact Form

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a FREE account
3. Verify your email

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** 
4. Connect your Gmail account (maneeshprog@gmail.com)
5. Note the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}} - Portfolio Contact

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save and note the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abc123xyz`)

### 5. Update Configuration
Edit `js/contact-form.js` and replace:

```javascript
const EMAIL_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID',     // Replace with your service ID
    templateId: 'YOUR_TEMPLATE_ID',   // Replace with your template ID  
    publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your public key
};
```

With your actual values:

```javascript
const EMAIL_CONFIG = {
    serviceId: 'service_abc123',      // Your Gmail service ID
    templateId: 'template_xyz789',    // Your template ID
    publicKey: 'abc123xyz'            // Your public key
};
```

## ✅ Test the Form
1. Open your portfolio
2. Fill out the contact form
3. Submit it
4. Check maneeshprog@gmail.com for the email!

## 📧 Fallback Feature
If EmailJS fails, the form will automatically open the user's default email client with your email pre-filled.

## 🔒 Security
- EmailJS handles all email sending securely
- No sensitive data is exposed in your frontend code
- FREE plan includes 200 emails/month (plenty for a portfolio)

## 🆘 Troubleshooting

**Form not working?**
- Check browser console for errors
- Verify all IDs match in the configuration
- Make sure Gmail service is connected properly

**Not receiving emails?**
- Check spam folder
- Verify the template has correct variable names
- Test with a different email service in EmailJS

---

**Need help?** EmailJS has great documentation at https://www.emailjs.com/docs/