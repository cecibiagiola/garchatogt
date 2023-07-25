const chatHistory = document.querySelector(".chat-history");
const chatInputForm = document.querySelector(".chat-input form");
const chatInput = document.querySelector(".chat-input input[type='text']");
const userAvatar = "./img/user.png";
const botAvatar = "./img/bot.png";
const typingDelay = 50; // Milisegundos entre cada carácter del tipeo
const botResponse = "Y yo qué sé, no ves que este chat es una garcha?."; // Respuesta del bot

// Función para agregar mensajes al historial de chat con efecto de tipeo para la respuesta del bot
function addMessageToChat(message, isBot = false) {
  const messageClass = isBot ? "bot-message" : "user-message";
  const avatarUrl = isBot ? botAvatar : userAvatar;
  const messageContent = `
    <div class="message ${messageClass}">
      <div class="avatar">
        <img src="${avatarUrl}" alt="Avatar">
      </div>
      <div class="message-content">
        <p>${isBot ? "" : message}</p>
      </div>
    </div>
  `;
  chatHistory.insertAdjacentHTML("beforeend", messageContent);

  if (isBot) {
    const messageParagraph = chatHistory.lastElementChild.querySelector("p");
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        const currentText = messageParagraph.textContent;
        messageParagraph.textContent = currentText + message.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingDelay);
  }
}

// Función para procesar la pregunta del usuario
function processUserQuestion(event) {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (question !== "") {
    addMessageToChat(question, false);
    addMessageToChat(botResponse, true);
    chatInput.value = "";
  }
}

// Agregar evento al formulario de entrada para procesar la pregunta del usuario
chatInputForm.addEventListener("submit", processUserQuestion);





