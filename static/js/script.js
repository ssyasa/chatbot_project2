function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "flex" : "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function displayMessage(message, sender) {
  const chatBody = document.getElementById("chatBody");

  // Create a container for the message
  const messageContainer = document.createElement("div");
  messageContainer.className = "message-container";

  const messageElem = document.createElement("div");
  messageElem.className = `message ${sender}-message`;

  // Use innerHTML to preserve formatting
  messageElem.innerHTML = message; 

  messageContainer.appendChild(messageElem); // Append message to the container
  chatBody.appendChild(messageContainer); // Append container to chat body
  chatBody.scrollTop = chatBody.scrollHeight;  // Auto-scroll to the bottom
}

async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  displayMessage(message, "user");
  userInput.value = "";  // Clear input

  showTypingIndicator(true);

  const response = await fetch("/llama", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_input: message })
  });

  const data = await response.json();
  showTypingIndicator(false);
  displayMessage(data.content, "bot");
}

function showTypingIndicator(show) {
  const typingIndicator = document.getElementById("typingIndicator");
  typingIndicator.style.display = show ? "block" : "none";
}
