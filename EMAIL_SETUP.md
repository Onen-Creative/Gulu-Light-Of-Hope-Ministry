# Email Setup Instructions

## Contact Form Email Configuration

The website contact form now uses **Resend** to send emails to `gulohbcom@gmail.com`.

### Setup Steps:

#### 1. Create a Resend Account
1. Go to: https://resend.com/signup
2. Sign up with your email (can use gulohbcom@gmail.com)
3. Verify your email address

#### 2. Get Your API Key
1. Log into Resend dashboard: https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name it: "GULOHBCOM Website"
4. Select permissions: **"Sending access"**
5. Click **"Create"**
6. **Copy the API key** (you'll only see it once!)

#### 3. Add API Key to Your Project

**For Local Development:**
1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   ```
3. Save the file
4. Restart your development server

**For Vercel (Production):**
1. Go to your Vercel dashboard
2. Select your project (GULOHBCOM)
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (re_xxxxxxxxxxxxxxxxxxxxx)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **"Save"**
6. Redeploy your site (Vercel will do this automatically)

#### 4. Verify Domain (Optional - For Custom Email Address)

Currently, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `lightofhopeuganda.co.ug`
4. Add the DNS records shown to your domain (at Crystal Webhosting or Vercel DNS)
5. Wait for verification (usually 24-48 hours)
6. Update the `from` field in `/app/api/contact/route.ts`:
   ```typescript
   from: 'GULOHBCOM <contact@lightofhopeuganda.co.ug>',
   ```

### How It Works:

1. **Visitor fills out contact form** on your website
2. **Form submits to** `/api/contact`
3. **Resend sends email to** `gulohbcom@gmail.com`
4. **Reply-To is set** to the visitor's email
5. **You can reply directly** from Gmail to the visitor

### Email Features:

✅ Emails sent to: `gulohbcom@gmail.com`
✅ Reply-To: Visitor's email (easy to reply)
✅ Professional HTML formatting
✅ Includes all form data (name, email, phone, subject, message)
✅ Free tier: 100 emails/day, 3,000/month

### Testing:

1. Go to your website contact page
2. Fill out the form
3. Submit
4. Check `gulohbcom@gmail.com` inbox
5. You should receive the email within seconds

### Troubleshooting:

**Form shows error:**
- Check that RESEND_API_KEY is set correctly
- Check Vercel logs for errors
- Verify API key is valid in Resend dashboard

**Not receiving emails:**
- Check spam/junk folder in Gmail
- Verify email address in code is correct
- Check Resend dashboard for delivery logs

**Need help?**
- Resend docs: https://resend.com/docs
- Resend support: https://resend.com/support

---

## Current Configuration:

- **Service**: Resend
- **Recipient**: gulohbcom@gmail.com
- **From**: onboarding@resend.dev (Resend's default)
- **Reply-To**: Visitor's email address
- **Free Tier**: 100 emails/day, 3,000/month
