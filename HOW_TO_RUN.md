# How to Run the Website Locally

## Prerequisites

Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/) if you don't have it already. You'll need Node.js version 18 or higher.

## Step-by-Step Instructions

### 1. Open Terminal/Command Prompt

- **Windows**: Press `Win + X` and select "Windows PowerShell" or "Terminal"
- **Mac/Linux**: Open Terminal

### 2. Navigate to Your Project Folder

```bash
cd "C:\Users\SY\Downloads\my_website"
```

### 3. Install Dependencies

This will install all the necessary packages (Next.js, React, Tailwind CSS, etc.):

```bash
npm install
```

**Note**: This might take a few minutes the first time. You only need to run this once (or whenever dependencies change).

### 4. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
   ▲ Next.js 14.x.x
   - Local:        http://localhost:3000
   - Ready in X.Xs
```

### 5. Open Your Browser

Open your web browser and go to:

**http://localhost:3000**

You should now see your website running locally!

## What's Next?

- The website will automatically reload when you make changes to files
- You can edit content in `content/site.ts` and see changes instantly
- Press `Ctrl + C` in the terminal to stop the server

## Troubleshooting

### "npm: command not found"
- Make sure Node.js is installed
- Try restarting your terminal/command prompt

### Port 3000 is already in use
- Another application is using port 3000
- Stop that application, or Next.js will automatically try the next available port (3001, 3002, etc.)

### Dependencies won't install
- Make sure you have an internet connection
- Try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again

## Building for Production

When you're ready to deploy your site, you can build it:

```bash
npm run build
npm start
```

This creates an optimized production version of your website.

