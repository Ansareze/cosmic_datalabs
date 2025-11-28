# 🌌 Cosmic DataLabs - Professional Multi-Page Website

A modern, professional, multi-page website for **Cosmic DataLabs** - Where Data Meets Intelligence. Complete with FAQ, Terms & Conditions, Privacy Policy, Contact, Enrollment, and Thank You pages.

## 🚀 Features

- **Multi-Page Site**: Complete website with 7 pages (Home, FAQ, Terms, Privacy, Contact, Enroll, Thank You)
- **Modern Design**: Dark elegant theme with cosmic aesthetics
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Trust Signals**: MSME registration, secure payment badges, refund policy links
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Form Validation**: Client-side validation for contact and enrollment forms
- **FAQ Accordion**: Collapsible Q&A sections
- **Smooth Animations**: Fade-up effects, scroll animations, and hover interactions
- **Scroll to Top**: Button appears on scroll
- **GitHub Pages Ready**: Plain HTML, CSS, and JS - no build process needed

## 📁 File Structure

```
cosmic_datalabs/
├── index.html          # Home page (landing page)
├── faq.html            # FAQ page with collapsible Q&A
├── terms.html          # Terms & Conditions page
├── privacy.html        # Privacy Policy page
├── contact.html        # Contact page with form
├── enroll.html         # Enrollment page with form
├── thankyou.html       # Thank You / Confirmation page
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactions
├── assets/             # Images and media files
│   └── logo.png        # Brand logo (replace with your logo)
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Cosmic Blue**: `#4C84FF`
- **Cosmic Purple**: `#A259FF`
- **Space Black**: `#0B0D10`
- **Nebula Grey**: `#1B1D22`
- **Neon Aqua**: `#4FE3C1`
- **Cyber Pink**: `#EB64B9`

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🛠️ Setup & Deployment

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

### GitHub Pages Deployment

1. **Create a GitHub Repository**
   - Create a new repository on GitHub (e.g., `cosmic_datalabs`)

2. **Push Your Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cosmic DataLabs website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cosmic_datalabs.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Branch: main** and **/ (root)**
   - Click **Save**

4. **Access Your Site**
   - Your site will be live at: `https://yourusername.github.io/cosmic_datalabs/`
   - It may take a few minutes for the site to be available

### Custom Domain (Optional)

1. Add a `CNAME` file in the root directory with your domain name:
   ```
   yourdomain.com
   ```

2. Configure DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records for GitHub Pages IP addresses

3. Update the domain in GitHub Pages settings

### Alternative Static Hosting

You can also deploy to:
- **Netlify**: Drag and drop the folder or connect GitHub
- **Vercel**: Import GitHub repository
- **Cloudflare Pages**: Connect GitHub repository
- **Any web hosting**: Upload files via FTP

## 📝 Customization Guide

### 1. Replace Logo

**Location**: `assets/logo.png`

1. Replace `assets/logo.png` with your logo file
2. Recommended size: 200x200px (square) or similar aspect ratio
3. Format: PNG with transparent background (preferred)

**Note**: The logo is used in:
- Navigation bar (all pages)
- Footer (all pages)
- Certificate preview (home page)

### 2. Update Contact Information

**File**: All HTML files

Search and replace:
- `cosmicdatalabs@gmail.com` → Your email address
- `UDYAM-DL-09-0020339` → Your MSME registration number

**Locations to update**:
- Footer (all pages)
- Contact page
- Terms & Conditions
- Privacy Policy
- FAQ page

### 3. Update Program Fee

**File**: All HTML files

Search and replace:
- `₹4,999` → Your program fee
- `4999` → Your fee in numbers (for Razorpay integration)

**Locations**:
- Home page hero section
- Floating CTA button
- Enrollment page
- FAQ page
- Terms & Conditions

### 4. Update Social Media Links

**File**: All HTML files (footer section)

Find and replace the `href="#"` in social media links:

```html
<!-- Replace # with your actual links -->
<a href="https://wa.me/YOUR_NUMBER" class="social-link">💬</a>
<a href="https://linkedin.com/company/yourcompany" class="social-link">💼</a>
<a href="https://instagram.com/yourhandle" class="social-link">📷</a>
```

**Locations**:
- Footer (all pages)
- Contact page (social section)

### 5. Integrate Razorpay Payment

**File**: `enroll.html` and `script.js`

1. **Get Razorpay Keys**:
   - Sign up at [Razorpay](https://razorpay.com)
   - Get your Key ID and Key Secret from dashboard

2. **Update `enroll.html`**:
   - Uncomment the Razorpay script tag:
   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   ```

3. **Update `script.js`** (around line 400):
   - Replace the placeholder code with actual Razorpay integration:
   ```javascript
   const options = {
       key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Key ID
       amount: 499900, // Amount in paise (₹4,999 = 499900 paise)
       currency: 'INR',
       name: 'Cosmic DataLabs',
       description: '12-Week ML Training Program',
       handler: function(response) {
           // Handle successful payment
           // Redirect to thank you page or send data to your server
           window.location.href = 'thankyou.html';
       },
       prefill: {
           email: document.getElementById('enrollEmail').value,
           contact: document.getElementById('enrollPhone').value,
           name: document.getElementById('enrollName').value
       },
       theme: {
           color: '#4C84FF'
       }
   };
   const rzp = new Razorpay(options);
   rzp.open();
   ```

4. **Backend Integration** (Recommended):
   - Create a payment endpoint on your server
   - Generate order ID server-side for security
   - Verify payment signature after successful payment

### 6. Update FAQ Content

**File**: `faq.html`

Edit the FAQ items in the HTML:
- Add/remove FAQ categories
- Modify questions and answers
- Update links if needed

**Structure**:
```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>Your Question?</span>
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here...</p>
    </div>
</div>
```

### 7. Update Terms & Conditions

**File**: `terms.html`

Review and customize:
- Refund policy details
- Payment terms
- Certificate requirements
- Code of conduct
- Contact information

### 8. Update Privacy Policy

**File**: `privacy.html`

Review and customize:
- Data collection practices
- Third-party services (Razorpay, analytics)
- Cookie usage
- Data retention policies
- Contact information

### 9. Update Meta Tags for SEO

**File**: All HTML files (in `<head>` section)

Update OpenGraph tags:
```html
<meta property="og:url" content="https://yourusername.github.io/cosmic_datalabs/">
<meta property="og:image" content="https://yourusername.github.io/cosmic_datalabs/assets/logo.png">
```

Update Twitter Card:
```html
<meta name="twitter:image" content="https://yourusername.github.io/cosmic_datalabs/assets/logo.png">
```

### 10. Form Submission (Contact & Enrollment)

**Current Setup**: Forms show success messages but don't actually submit data.

**To Enable Form Submission**:

1. **Option A: Use a Form Service**
   - [Formspree](https://formspree.io)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Google Forms](https://www.google.com/forms)

2. **Option B: Backend Integration**
   - Update `script.js` form handlers
   - Send data to your server endpoint
   - Example:
   ```javascript
   fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   })
   ```

### 11. Color Customization

**File**: `styles.css` (top of file)

Edit CSS variables:
```css
:root {
    --cosmic-blue: #4C84FF;      /* Primary blue */
    --cosmic-purple: #A259FF;    /* Primary purple */
    --space-black: #0B0D10;      /* Background */
    --nebula-grey: #1B1D22;     /* Secondary background */
    /* ... more colors ... */
}
```

### 12. Update WhatsApp Link

**File**: `contact.html`

Replace the placeholder:
```html
<a href="https://wa.me/91YOUR_NUMBER" class="contact-link">Message on WhatsApp</a>
```

Format: `https://wa.me/91XXXXXXXXXX` (include country code, no + or spaces)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Pages Overview

1. **Home (`index.html`)**: Landing page with hero, about, benefits, curriculum, certificate preview, and CTA
2. **FAQ (`faq.html`)**: Frequently asked questions with collapsible sections
3. **Terms (`terms.html`)**: Terms & Conditions, refund policy, code of conduct
4. **Privacy (`privacy.html`)**: Privacy policy, data collection, third-party services
5. **Contact (`contact.html`)**: Contact form, email, WhatsApp, social links
6. **Enroll (`enroll.html`)**: Enrollment form with payment integration
7. **Thank You (`thankyou.html`)**: Confirmation page after enrollment

## 🎯 Key Features by Page

### Home Page
- Hero section with trust signals
- About section with MSME badge
- Benefits grid
- 12-week curriculum overview
- Certificate preview
- Call-to-action section

### FAQ Page
- 8-12 FAQs organized by category
- Collapsible accordion interface
- Categories: Program Content, Certificate, Payment, Eligibility, Learning Format, Support

### Terms & Conditions
- Course usage terms
- Refund policy (7-day guarantee)
- Code of conduct
- Certificate policy
- Intellectual property
- Liability limitations

### Privacy Policy
- Data collection practices
- Razorpay payment processing
- Cookie usage
- Data protection measures
- User rights

### Contact Page
- Contact form with validation
- Email, WhatsApp, social links
- MSME registration display

### Enrollment Page
- Student information form
- Program summary
- Trust badges
- Razorpay payment integration

### Thank You Page
- Success confirmation
- Next steps instructions
- Important information
- Action buttons

## 🚨 Important Notes

1. **Payment Integration**: The Razorpay integration is a placeholder. You must implement actual payment processing before going live.

2. **Form Submission**: Contact and enrollment forms currently show success messages but don't send data. Implement backend integration or use a form service.

3. **Email Configuration**: Update all email addresses throughout the site.

4. **Social Media Links**: Replace placeholder `#` links with actual social media URLs.

5. **Logo**: Replace `assets/logo.png` with your actual logo file.

6. **MSME Registration**: Update the registration number if different.

7. **Program Fee**: Update the fee amount (₹4,999) throughout all pages.

## 📧 Support

For questions or issues:
- **Email**: cosmicdatalabs@gmail.com
- **MSME Registration**: UDYAM-DL-09-0020339

## 📄 License

© 2025 Cosmic DataLabs. All rights reserved.

---

**Built with ❤️ for future ML professionals**

**Ready to deploy? Follow the GitHub Pages deployment steps above and your site will be live in minutes!**
