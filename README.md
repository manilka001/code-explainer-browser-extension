# 🚀 Smart-Context AI Explainer

**Smart-Context AI** is a modern Chrome Extension (Manifest V3) designed for developers. It eliminates "context-switching" by providing instant AI-powered explanations for complex code snippets directly on any webpage.

---


## ✨ Features
- **Instant Logic Breakdown:** Highlights complex code and provides a 3-point summary.
- **Secure Key Management:** Uses `chrome.storage` to keep your API keys local and private.
- **Developer-First UI:** A sleek, VS-Code inspired dark mode side-panel.
- **Non-Intrusive:** Works via the right-click context menu to keep your workspace clean.

---

## 🛠️ Technical Stack
- **Extension Framework:** Manifest V3 (Service Workers & Declarative Net Request).
- **Frontend:** JavaScript (ES6+), CSS3 (Flexbox, Transitions).
- **Backend Integration:** Groq Cloud / OpenAI API.
- **Communication:** Asynchronous Message Passing (Background to Content Scripts).

---

## 🔑 Getting Your API Key
To use this extension, you need a free API key from Groq (recommended for speed) or OpenAI.

1. **Visit Groq Cloud:** Go to [console.groq.com](https://console.groq.com/).
2. **Create Key:** Navigate to **API Keys** and click **Create API Key**.
3. **Copy Key:** Keep this key safe. You will paste it into the Extension Popup.

---

## 🚀 Installation & Setup

### 1. Clone the Project
```bash
git clone https://github.com/manilka001/code-explainer-browser-extension.git