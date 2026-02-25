const panel = document.createElement("div");
panel.id = "ai-explainer-sidepanel";
panel.innerHTML = `
  <div class="ai-panel-header">
    <h2>AI Code Explainer</h2>
    <span class="close-btn" id="close-ai-panel">×</span>
  </div>
  <div id="ai-content">Highlight code to begin...</div>
`;
document.body.appendChild(panel);

document.getElementById("close-ai-panel").onclick = () => {
  panel.classList.remove("open");
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "show_explanation") {
    const contentDiv = document.getElementById('ai-content');
    panel.classList.add('open');
    
    if (request.text.includes("Analysing")) {
      contentDiv.innerHTML = `<div class="loading-pulse">${request.text}</div>`;
    } else {
      const formattedText = request.text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold formatting
        .split('- ') // Split by bullet points
        .filter(item => item.trim().length > 0) // Remove empty strings
        .map(item => `<div class="explanation-card">${item.trim()}</div>`)
        .join('');
        
      contentDiv.innerHTML = formattedText;
    }
  }
});
