# Contact Form Setup Guide

Your contact form now supports multiple submission methods. Here's how to set them up:

## Option 1: Formspree (Recommended)

1. **Sign up for Formspree**
   - Go to [formspree.io](https://formspree.io)
   - Create a free account (50 submissions/month on free tier)

2. **Create a new form**
   - Click "New Form"
   - Enter your form's URL (your portfolio URL)
   - Choose the HTML form option

3. **Get your Form ID**
   - After creating the form, you'll get a form endpoint like: `https://formspree.io/f/your-form-id`
   - Copy the form ID (the part after `/f/`)

4. **Update the code**
   - In `src/components/Contact.jsx`, find line 83:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   - Replace `YOUR_FORM_ID` with your actual Form ID

## Option 2: Netlify Forms (If deploying on Netlify)

If you deploy your portfolio on Netlify, forms work automatically:

1. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Deploy your site

2. **Form submissions**
   - Netlify will automatically handle form submissions
   - You can view submissions in your Netlify dashboard
   - Set up email notifications in Site settings > Forms > Form notifications

## Option 3: EmailJS (Alternative)

1. **Sign up for EmailJS**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create a free account (200 emails/month on free tier)

2. **Set up email service**
   - Add your email service (Gmail, Outlook, etc.)
   - Create an email template

3. **Update the code** (if you prefer this option)

## How It Works

The form tries these methods in order:

1. **Formspree** - Direct submission, you get email instantly
2. **Netlify Forms** - If Formspree fails and you're on Netlify
3. **Email Client** - Fallback to opening user's email app

## Testing

1. Set up at least one method (Formspree recommended)
2. Fill out the form on your site
3. Check if you receive the submission
4. Test the fallback by temporarily breaking the Formspree endpoint

## Security Notes

- Formspree includes spam protection
- Netlify Forms have built-in spam filtering
- Always validate form data on both client and server side in production

## Customization

You can modify the success message, add more fields, or change the styling in `src/components/Contact.jsx`.

The form is fully responsive and includes:
- Real-time validation
- Loading states
- Success/error messages
- Multiple submission methods with fallbacks
