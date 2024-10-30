// Toggle Chatbot Window
function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  chatbotWindow.style.display = chatbotWindow.style.display === "flex" ? "none" : "flex";
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Display Message in Chat Body
function displayMessage(message, sender) {
  const chatBody = document.getElementById("chatBody");

  // Create message container and message element
  const messageContainer = document.createElement("div");
  messageContainer.className = "message-container";
  
  const messageElem = document.createElement("div");
  messageElem.className = `message ${sender}-message`;
  messageElem.innerHTML = message; // Support for HTML formatting

  messageContainer.appendChild(messageElem);
  chatBody.appendChild(messageContainer);

  // Scroll to the latest message
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Send User Message and Get Bot Response
async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  displayMessage(message, "user"); // Show user's message
  userInput.value = ""; // Clear input

  showTypingIndicator(true); // Show typing indicator

  try {
    const response = await fetch("/llama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: message }),
    });

    if (!response.ok) throw new Error("Failed to fetch response");

    const data = await response.json();
    showTypingIndicator(false);
    displayMessage(data.content, "bot"); // Show bot's message

  } catch (error) {
    console.error("Error:", error);
    showTypingIndicator(false);
    displayMessage("An error occurred. Please try again.", "bot");
  }
}

// Show/Hide Typing Indicator
function showTypingIndicator(show) {
  const typingIndicator = document.getElementById("typingIndicator");
  typingIndicator.style.display = show ? "block" : "none";
}

// Typing Indicator Animation with Blinking Dots
document.addEventListener("DOMContentLoaded", () => {
  const typingIndicator = document.getElementById("typingIndicator");
  typingIndicator.innerHTML = "Bot is typing<span>.</span><span>.</span><span>.</span>";
  typingIndicator.querySelectorAll("span").forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.3}s`; // Stagger dot animations
  });
});
