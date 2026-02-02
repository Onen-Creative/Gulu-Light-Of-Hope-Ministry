# Gulu Light of Hope Bible Church & Outreach Ministries Website

A modern, responsive website built with Next.js 14 for Gulu Light of Hope Bible Church & Outreach Ministries (GULOHBCOM).

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Next.js 14**: Latest version with App Router for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Media Gallery**: Interactive photo and video gallery
- **Contact Forms**: Contact form with validation
- **SEO Optimized**: Meta tags and structured content
- **Accessibility**: WCAG compliant design

## Pages

- **Home**: Hero section, ministry overview, vision/mission, leadership messages
- **About**: Detailed ministry information, core values, mission/vision/goals
- **Projects**: Comprehensive overview of all ministry projects and future plans
- **Media**: Interactive gallery for photos and videos with filtering
- **Contact**: Contact information, service times, branches, and contact form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "GULU LIGHT OF HOPE BIBLE CHURCH & OUTREACH MINISTRIES"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── media/             # Media gallery page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
└── ...config files
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Orange/amber tones
- Secondary: Blue tones
- Additional colors for different sections

### Content
All content is embedded in the components. To update:
1. Edit the respective page files in the `app/` directory
2. Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
3. Modify ministry information throughout the pages as needed

### Media Gallery
The media gallery in `app/media/page.tsx` currently uses placeholder images. To add real media:
1. Replace the `mediaItems` array with actual media data
2. Update image URLs to point to your media files
3. Implement video player functionality as needed

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Features

- **Image Optimization**: Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **SEO**: Optimized meta tags and structured data
- **Responsive**: Mobile-first responsive design
- **Accessibility**: WCAG compliant components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for Gulu Light of Hope Bible Church & Outreach Ministries.

## Contact

For questions about this website, contact:
- Email: gulohbcom@gmail.com
- Phone: +256 782 509 058 / +256 779 756 720

---

**"You are the light of the world. A city set on a hill cannot be hidden."** - Matthew 5:14 (NKJV)