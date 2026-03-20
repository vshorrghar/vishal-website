# Vishal Shorghar — Portfolio Website

Personal portfolio and services website for Vishal Shorghar — Senior Cloud Solutions Architect, AWS SA, GenAI Builder, and Nordic Tech Speaker.

## Project Structure

```
├── index.html              # Single-page HTML document
├── assets/
│   ├── css/                # Stylesheets (main, components, sections, animations, responsive)
│   ├── js/                 # JavaScript modules (particles, typing, ticker, cursor, terminal, forms, main)
│   └── images/             # Profile photo and speaking event images (replace placeholders)
└── README.md
```

## Local Development

Open `index.html` directly in a browser — no build step or dev server required.

```bash
# macOS
open index.html

# Linux
xdg-open index.html
```

## Replacing Placeholder Images

Replace the following files with real images:

- `assets/images/profile-photo.jpg` — Professional headshot
- `assets/images/speaking-1.jpg` — Speaking event photo
- `assets/images/speaking-2.jpg` — Speaking event photo
- `assets/images/speaking-3.jpg` — Speaking event photo

## Deployment to AWS (S3 + CloudFront)

1. **Create an S3 bucket** with static website hosting enabled:
   ```bash
   aws s3 mb s3://vishal-portfolio-site
   aws s3 website s3://vishal-portfolio-site --index-document index.html
   ```

2. **Upload all files** to the bucket:
   ```bash
   aws s3 sync . s3://vishal-portfolio-site --exclude ".kiro/*" --exclude ".git/*" --exclude "node_modules/*" --exclude "*.code-workspace"
   ```

3. **Create a CloudFront distribution** pointing to the S3 bucket origin.

4. **Generate a short link** using TinyURL or similar service pointing to the CloudFront distribution URL.

## Disclaimer

Personal platform. All views are my own as an individual practitioner — not representative of any employer.
