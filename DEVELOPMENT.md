# Development Guide for shenawy.xyz

This guide will help you set up and use your Hugo website development environment.

## Project Structure

Your Hugo website follows the standard Hugo project structure:

```text
shenawy.xyz/
├── archetypes/       # Content templates
├── content/          # Website content (markdown files)
│   ├── blogs/        # Blog posts
├── data/             # Data files for the website
├── layouts/          # Custom HTML templates
├── static/           # Static files (images, CSS, JS)
├── themes/           # Hugo themes
│   └── hugo-profile/ # Your current theme
├── config.yaml       # Site configuration
└── start-dev-server.ps1 # Development server starter script
```

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) must be installed on your system
- Git for version control

### Starting the Development Server

1. Open PowerShell in your project directory
2. Run the development server script:

    ```powershell
    .\start-dev-server.ps1
    ```

3. Your website will be available at [http://localhost:1313/](http://localhost:1313/)

### Creating New Content

To create a new blog post:

```powershell
hugo new blogs/my-new-post.md
```

Or copy and modify the existing template at `content/blogs/blog-template.md`.

### Building for Production

To build your site for production:

```powershell
hugo --minify
```

The built site will be in the `public/` directory.

## Theme Customization

Your site uses the [Hugo Profile](https://github.com/gurusabarish/hugo-profile) theme. You can customize it by:

1. Modifying the `config.yaml` file
2. Creating custom layouts in the `layouts/` directory (these will override theme layouts)
3. Adding custom CSS/JS in the `static/` directory

## Deployment

Your site is configured to deploy to Netlify. Any changes pushed to your repository will trigger a new build and deployment.

## Troubleshooting

If you encounter any issues:

1. Check the Hugo server output for errors
2. Verify your content frontmatter is correctly formatted
3. Ensure all required dependencies are installed

For more help, refer to the [Hugo documentation](https://gohugo.io/documentation/).
