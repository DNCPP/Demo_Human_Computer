document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value;
        displayUserMessage(userMessage);
        sendToRasa(userMessage);
    });

    function displayUserMessage(message) {
        chatLog.innerHTML += `<div class="user-message">${message}</div>`;
    }

    function displayBotMessage(message) {
        chatLog.innerHTML += `<div class="bot-message">${message}</div>`;
    }

    function sendToRasa(message) {
        // Sử dụng Ajax hoặc Fetch API để gửi yêu cầu đến máy chủ Rasa và nhận phản hồi ở đây
        // Ví dụ sử dụng Fetch API:
        fetch("http://192.168.0.2:5505/chat", {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const botResponse = data.response;
            displayBotMessage(botResponse);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        userInput.value = ""; // Xóa nội dung ô nhập
    }
});
