# Michel Moraes - Form Pages PRO Landing Page

A responsive landing page for WPForms' Form Pages PRO feature, showcasing how users can create "distraction-free" form landing pages to boost conversions without writing code.

## Features

- Responsive design optimized for all device sizes
- Embedded YouTube video integration with play button
- Feature grid highlighting product benefits
- Customer testimonials section
- Product screenshots and visual demonstrations
- Accessibility-compliant markup

## Installation

```bash
# Clone the repository
git clone https://github.com/michelmany/form-pages-pro.git
cd form-pages-pro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
/
├── public/
│   └── assets/
│       ├── icons/       # SVG icons used throughout the site
│       └── images/      # Site images and screenshots
├── src/
│   ├── js/
│   │   ├── VideoPlayer.js  # Video embedding functionality
│   │   └── main.js         # Main JavaScript entry point
│   └── styles/
│       └── main.scss       # SCSS styles
└── index.html              # Main HTML structure
```

## Technologies

- HTML5
- SCSS for styling
- Vanilla JavaScript (ES6+)
- Responsive design with media queries
- YouTube video embedding

## Video Player Implementation

The site features a YouTube video player that replaces the thumbnail image when the play button is clicked:

```javascript
// Initialize with button ID and YouTube video ID
new VideoPlayer('header-video-play-button', 'mUGYPlAgJPw');
```

## Accessibility

This project implements accessibility best practices including:
- Semantic HTML structure
- Visually hidden headings for screen readers
- Proper ARIA attributes
- Keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
