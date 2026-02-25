🚀 Smart-Context AI Explainer
A Chrome Extension for developers that provides instant, AI-powered explanations for complex code snippets directly within the browser.

💡 The Problem
When browsing documentation, StackOverflow, or GitHub, developers often encounter legacy code or complex logic that breaks their flow. Switching tabs to ask an AI for an explanation is a "context switch" that hurts productivity.

✨ The Solution
Smart-Context allows users to highlight any code snippet on any website, right-click, and get a concise, senior-engineer-level explanation in a non-intrusive, slide-in UI panel.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Custom Glassmorphism & Dark Mode UI), JavaScript (ES6+).

Extension Core: Manifest V3 (Latest standard for security and performance).

AI Engine: Groq API / OpenAI (Llama 3 / GPT-4 models).

Storage: Chrome Storage API (for secure local credential management).

🚀 Key Features
Contextual Awareness: Uses the contextMenus API to capture highlighted text.

Asynchronous Architecture: Implemented Message Passing between the background service worker and content scripts to ensure a smooth UI.

Security First: Implemented a secure settings popup to store API keys locally using chrome.storage, avoiding hardcoded credentials.

Modern IDE Aesthetic: A dark-themed, slide-in panel designed to match developer environments like VS Code.

📥 Installation (Local Development)
Since this is a developer tool, follow these steps to load it into your browser:

Clone the Repository:

Bash
git clone https://github.com/yourusername/smart-context-ai.git
Open Chrome Extensions:
Navigate to chrome://extensions/ in your browser.

Enable Developer Mode:
Toggle the switch in the top-right corner.

Load Unpacked:
Click "Load unpacked" and select the project folder.

Configure API Key:
Click the extension icon in your toolbar, enter your Groq or OpenAI API key, and hit Save.



📄 License
Distributed under the MIT License. See LICENSE for more information.