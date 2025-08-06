# LinkedIn Auto Like & Comment Chrome Extension

This Chrome Extension allows users to automatically like and comment on LinkedIn posts based on user input.

## 🚀 Features

- Two input fields: `Like Count` and `Comment Count`
- Start button is disabled until both fields are filled
- Opens LinkedIn feed and:
  - Likes a number of posts randomly based on input
  - Comments “CFBR” on random posts based on input

## 🛠 Files Used

- `manifest.json`: Configures extension, permissions, and scripts
- `popup.html`: Popup UI when icon is clicked
- `popup.js`: Controls form logic and tab behavior
- `contentScripts.js`: Executes actions on LinkedIn feed
- `style.css`: Styles the popup

## 📦 How to Use

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load Unpacked** and select the extension folder
4. Click the extension icon
5. Enter values for Like Count and Comment Count
6. Click **Start**
7. Make sure you're already logged into LinkedIn

## 📝 Notes

- Default comment: `"CFBR"`
- LinkedIn must be logged in before running
- Only works on LinkedIn Feed page

