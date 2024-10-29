# Chatbot Application

**Overview**

This project is a web-based chatbot application that leverages the Llama large language model (LLM) for generating conversational responses. The chatbot provides users with an interactive chat experience, allowing them to ask questions and receive answers in real-time. The design resembles popular messaging applications like WhatsApp, offering a user-friendly interface.

### Need for the Chatbot

In today's digital world, chatbots play a crucial role in enhancing user engagement and providing instant support. This chatbot aims to:
- Provide quick answers to user queries.
- Automate customer support, reducing the load on human agents.
- Offer a 24/7 interaction point for users.
- Facilitate engaging conversations with personalized responses based on user inputs.

## Features

- **User-Friendly Interface**: Modern design resembling WhatsApp with a responsive layout.
- **Real-Time Responses**: Integrated with Llama LLM for generating quick and relevant answers.
- **Dark Mode**: Toggle between light and dark themes for improved user experience.
- **Message Formatting**: Supports bold formatting for messages.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Typing Indicator**: Displays an indicator when the bot is generating a response.
- **Scroll-to-Last**: Automatically scrolls the chat to the latest message.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask
- **LLM Integration**: Hugging Face Inference API
- **Environment**: Python, Flask

## Installation

### Prerequisites

- Python 3.6 or higher
- Flask
- Flask-CORS
- huggingface_hub
- dotenv (for managing environment variables)

### Step-by-Step Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/chatbot-app.git
   cd chatbot-app
   ```

2. **Create a Virtual Environment** (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Required Packages**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add your Hugging Face API key:

   ```bash
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   ```

5. **Run the Application**:

   ```bash
   python app.py
   ```

   The application will run on `http://localhost:8080`.

## Usage Instructions

1. Open your web browser and navigate to `http://localhost:8080`.
2. Click on the chatbot icon in the bottom right corner to open the chat window.
3. Type your message in the input box and press Enter or click the send button.
4. The chatbot will respond to your message in real-time.
5. Use the dark mode toggle switch to change themes.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: syasa3404@gmail.com
- **GitHub**: [Shreyas]([https://github.com/your-username](https://github.com/ssyasa))

---

Feel free to customize this README file further according to your project specifics and any additional features or instructions you want to include.
