# GitHub Pages Deployment Guide

This React project is now configured for free deployment on GitHub Pages.

## Deployment Methods

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys when you push to `main` or `master` branch.

**Setup Steps:**
1. Push this repository to GitHub
2. Go to your repository settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically build and deploy on each push

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

This command will build the project and push the `dist` folder to the `gh-pages` branch.

## Configuration

### For Project Repository (e.g., `username.github.io/project-name`)

If your repository is not `username.github.io`, update the base URL:

1. **Using environment variable (recommended):**
   ```bash
   VITE_BASE_URL=/your-repo-name/ npm run deploy
   ```

2. **Or modify vite.config.ts:**
   ```typescript
   base: '/your-repo-name/',
   ```

### For User/Organization Repository (e.g., `username.github.io`)

The default configuration should work fine with base URL as `/`.

## GitHub Pages Settings

After your first deployment:
1. Go to repository → Settings → Pages
2. Verify "Deploy from a branch" or "GitHub Actions" is selected
3. You'll see your live site URL

## Troubleshooting

- **404 errors on page reload:** Make sure the base URL in vite.config.ts matches your repository structure
- **Blank page:** Check browser console for errors; verify GitHub Actions workflow succeeded
- **CSS/JS not loading:** Clear browser cache (Ctrl+Shift+Del) and verify base URL

## Environment Variables

- `VITE_BASE_URL`: Set the base URL for routing (default: `/`)

## Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

This starts a local server serving the built files exactly as GitHub Pages would.

---

**You now have a GitHub-free deployable React application!** 🚀
