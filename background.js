chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "explain-code",
    title: "Explain with AI",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "explain-code") {

    // 1. Get the key from storage
    const storage = await chrome.storage.local.get("saved_api_key");
    const API_KEY = storage.saved_api_key;

    // 2. Immediate feedback to the user
    if (!API_KEY) {
      chrome.tabs.sendMessage(tab.id, {
        action: "show_explanation",
        text: " No API Key found! Click the extension icon to save your key.",
      });
      return;
    }

    // 3. Show "Loading" state in the sliding window
    chrome.tabs.sendMessage(tab.id, {
      action: "show_explanation",
      text: "Analysing code... ",
    });

    try {
      // 4. The API Call
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful software engineer. Explain the code in exactly 3 bullet points. Start each bullet point with a bold header followed by a colon, like this: **Header**: Description.",
              },
              { role: "user", content: info.selectionText },
            ],
          }),
        },
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const explanation = data.choices[0].message.content;

      chrome.tabs.sendMessage(tab.id, {
        action: "show_explanation",
        text: explanation,
      });
    } catch (error) {
      console.error("AI Fetch Error:", error);
      chrome.tabs.sendMessage(tab.id, {
        action: "show_explanation",
        text: "Error: " + error.message,
      });
    }
  }
});
