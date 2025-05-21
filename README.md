# Ahmed Shenawy's Personal Website

This repository contains the source code for my personal website, built with [Hugo](https://gohugo.io/) and the [Hugo Profile](https://github.com/gurusabarish/hugo-profile) theme.

## 🚀 Features

- Responsive design for all devices
- Dark/light mode toggle with accessibility features
- Contact form with custom feedback modal
- Sections for about, experience, education, and courses
- Blog functionality
- Google Analytics integration

## 📋 Project Structure

```text
shenawy.xyz/
├── archetypes/       # Content templates
├── content/          # Website content (markdown files)
│   ├── blogs/        # Blog posts
├── data/             # Data files for the website
├── layouts/          # Custom HTML templates
├── static/           # Static files (images, CSS, JS)
│   ├── css/          # Custom CSS files
│   ├── js/           # JavaScript files
│   └── images/       # Image assets
├── themes/           # Hugo themes
│   └── hugo-profile/ # Base theme
├── config.yaml       # Site configuration
└── start-dev-server.ps1 # Development server starter script
```

## 🛠️ Setup and Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- Git for version control

### Local Development

1. Clone this repository:

   ```bash
   git clone https://github.com/Rebellion1991/shenawy.xyz.git
   cd shenawy.xyz
   ```

2. Start the development server:

   ```bash
   hugo server -D
   ```
  
   Or use the provided script:

   ```powershell
   .\start-dev-server.ps1
   ```

3. Open your browser and visit [http://localhost:1313/](http://localhost:1313/)

### Creating New Content

To create a new blog post:

```bash
hugo new blogs/my-new-post.md
```

Or copy and modify the existing template at `content/blogs/blog-template.md`.

## 🔧 Customization

### Site Configuration

The main configuration is in `config.yaml`. Here you can modify:

- Site metadata (title, description)
- Navigation menu
- Hero section content
- About section content
- Experience and education details
- Contact form settings
- Theme colors and fonts

### Custom Layouts

Custom layouts and overrides are in the `layouts/` directory. These take precedence over the theme's default layouts.

### Custom CSS/JS

Add custom CSS and JavaScript in the `static/` directory:

- `static/css/` - Custom CSS files
- `static/js/` - Custom JavaScript files

## 📦 Deployment

### Building for Production

To build the site for production:

```bash
hugo --minify
```

The built site will be in the `public/` directory.

### Deployment Options

The site can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository to Netlify for automatic deployments
- **GitHub Pages**: Push the `public/` directory to a GitHub Pages repository
- **Any static hosting**: Upload the contents of the `public/` directory to any static hosting provider

## 🧩 Custom Components

### Contact Form

The contact form uses [Formspree](https://formspree.io/) for handling submissions. The form includes:

- Custom AJAX submission to prevent page redirects
- Feedback modal for success/error messages
- Accessibility features

### Dark/Light Mode Toggle

The site includes a custom dark/light mode toggle with:

- Keyboard navigation support
- ARIA attributes for accessibility
- Visual indicators for current state

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please use the contact form on the website or reach out directly to [ahmed@shenawy.xyz](mailto:ahmed@shenawy.xyz)
