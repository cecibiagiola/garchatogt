const chatHistory = document.querySelector(".chat-history");
const chatInputForm = document.querySelector(".chat-input form");
const chatInput = document.querySelector(".chat-input input[type='text']");
const userAvatar = "./img/user.png";
const botAvatar = "./img/bot.png";


// Función para agregar mensajes al historial de chat
 function addMessageToChat(message, isBot = false) {
  const messageClass = isBot ? "bot-message" : "user-message";
  const avatarUrl = isBot ? botAvatar : userAvatar;
  const messageContent = `
    <div class="message ${messageClass}">
      <div class="avatar">
        <img src="${avatarUrl}" alt="Avatar">
      </div>
      <div class="message-content">
        <p>${message}</p>
      </div>
    </div>
  `;
  chatHistory.insertAdjacentHTML("beforeend", messageContent);
} 

// Función para procesar la pregunta del usuario
function processUserQuestion(event) {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (question !== "") {
    addMessageToChat(question, false);
    addMessageToChat("pa ke kieres saber eso jaja salu2", true);
    chatInput.value = "";
  }
}

// Agregar evento al formulario de entrada para procesar la pregunta del usuario
chatInputForm.addEventListener("submit", processUserQuestion);
