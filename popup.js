document.getElementById('save').onclick = () => {
  const key = document.getElementById('apiKey').value;
  chrome.storage.local.set({ saved_api_key: key }, () => {
    alert("Key saved locally!");
  });
};