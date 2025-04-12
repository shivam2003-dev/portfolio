# Deploying Your Portfolio to GitHub Pages

This guide will walk you through the process of deploying your DevSecOps portfolio to GitHub Pages.

## Prerequisites

Before you begin, make sure you have:

1. A GitHub account
2. Git installed on your machine
3. The complete portfolio code from this repository

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio" or "devsecops-portfolio")
4. Choose "Public" visibility
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

1. Initialize a Git repository in your local project folder (if not already done):
   ```bash
   git init
   ```

2. Add all files to the staging area:
   ```bash
   git add .
   ```

3. Commit the files:
   ```bash
   git commit -m "Initial commit"
   ```

4. Add your GitHub repository as the remote origin:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

5. Push the code to GitHub:
   ```bash
   git push -u origin main
   ```

## Step 3: Configure GitHub Pages Deployment

1. Before deployment, you'll need to update a few configuration files to work with GitHub Pages.

2. Create a custom Vite configuration for GitHub Pages deployment by creating a file named `vite.github-pages.config.ts` with the following content:
   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
   import path from "path";

   // This config is specifically for GitHub Pages deployment
   export default defineConfig({
     plugins: [
       react(),
       themePlugin(),
     ],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "client", "src"),
         "@shared": path.resolve(__dirname, "shared"),
         "@assets": path.resolve(__dirname, "attached_assets"),
       },
     },
     root: path.resolve(__dirname, "client"),
     base: "./", // Ensures proper paths for GitHub Pages
     build: {
       outDir: path.resolve(__dirname, "dist"),
       emptyOutDir: true,
     },
   });
   ```

3. Create a `.github/workflows/deploy.yml` file for GitHub Actions:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main  # Set this to your default branch

     # Allows you to run this workflow manually from the Actions tab
     workflow_dispatch:

   # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write

   # Allow only one concurrent deployment
   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build portfolio
           run: npm run build:github-pages
         
         - name: Setup Pages
           uses: actions/configure-pages@v3
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: './dist'

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

4. Add a build script for GitHub Pages in your `package.json`:
   ```json
   "scripts": {
     "build:github-pages": "vite build --config vite.github-pages.config.ts"
   }
   ```

## Step 4: Enable GitHub Pages in Your Repository

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. Save the changes

## Step 5: Trigger the Deployment

1. Push a commit to your main branch, or
2. Go to the "Actions" tab in your repository
3. Select the "Deploy to GitHub Pages" workflow
4. Click "Run workflow" and select the main branch
5. Click "Run workflow" to trigger the deployment manually

## Step 6: Access Your Deployed Portfolio

After the workflow completes successfully, your portfolio will be available at:
```
https://your-username.github.io/your-repo-name/
```

## Adding Blog Content via Markdown Files

The portfolio is configured to read blog posts from Markdown files in the `docs/blog` directory. To add a new blog post:

1. Create a new Markdown file in the `docs/blog` directory
2. Add the necessary frontmatter at the top of the file:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "YYYY-MM-DD"
   slug: "unique-url-slug"
   tags: ["Tag1", "Tag2"]
   excerpt: "A brief summary of your blog post."
   ---

   # Your Blog Post Content Here
   ```

3. Write your blog post content using Markdown syntax
4. Commit and push the file to your GitHub repository
5. The blog post will appear in your portfolio after deployment

## Customizing Your Portfolio

To customize your portfolio further:

1. Update personal information in the data files in the `client/src/data` directory
2. Modify the theme in the `theme.json` file
3. Add your profile picture and other assets to the `attached_assets` directory
4. Commit and push your changes to trigger a new deployment

## Troubleshooting

If you encounter issues with your deployment:

1. Check the Actions tab in your GitHub repository for any workflow errors
2. Ensure your repository has GitHub Pages enabled
3. Verify that your Vite configuration is correctly set up for GitHub Pages
4. Check that all file paths in your application use relative paths 

Remember that GitHub Pages deployments may take a few minutes to propagate changes after a successful deployment.