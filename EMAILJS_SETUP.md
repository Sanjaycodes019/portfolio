# EmailJS Setup Guide

EmailJS is the most reliable solution for your contact form. It sends emails through your own email service, avoiding spam filters.

## Why EmailJS?

✅ **No spam issues** - Uses your own email service  
✅ **Reliable delivery** - Direct to your inbox  
✅ **Free tier available** - 200 emails/month  
✅ **No backend required** - Client-side only  
✅ **Custom templates** - Professional email formatting  

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for free account

### 2. Add Email Service
- Click "Email Services" → "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account
- **Important**: Use the email where you want to receive messages

### 3. Create Email Template
- Click "Email Templates" → "Create New Template"
- Use this template:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from your portfolio contact form
```

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section  
- **Public Key**: Found in Account → API Keys

### 5. Update Your Code
In `src/components/Contact.jsx`, find lines 94-98:

```javascript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

Replace the placeholder values with your actual credentials.

## Security Note

Your Public Key is safe to expose in frontend code. It's designed for client-side use and has limited permissions.

## Testing

1. After setup, test your form
2. Check your email inbox (and spam folder initially)
3. Once you receive a test email, mark it as "Not Spam" to train your email provider

## Fallback System

Your form has multiple fallbacks:
1. **EmailJS** (primary) - Most reliable
2. **Formspree** (backup) - Your existing setup
3. **Netlify Forms** (if deployed on Netlify)
4. **Error message** with direct email option

## Troubleshooting

**If emails still go to spam:**
- Add the sender to your contacts
- Mark test emails as "Not Spam"
- Check your email provider's spam settings

**If EmailJS doesn't work:**
- Verify your Service ID, Template ID, and Public Key
- Check browser console for errors
- Ensure your email service is properly connected

## Customization

You can modify the email template to include:
- Your logo
- Custom styling
- Additional fields
- Auto-reply messages

EmailJS is the most professional and reliable solution for portfolio contact forms!
