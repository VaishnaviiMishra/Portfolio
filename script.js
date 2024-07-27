document.querySelector('.chat-message button').addEventListener('click', function() {
  const userInputElement = document.querySelector('.chat-message input');
  const userInput = userInputElement.value;
  if (userInput.trim() !== '') {
      addMessage(userInput, 'user');
      userInputElement.value = '';
      getBotResponse(userInput);
  }
});

document.querySelector('.chat-message input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      document.querySelector('.chat-message button').click();
  }
});

function addMessage(text, sender) {
  const chatLog = document.getElementById('chat-log');
  const messageElement = document.createElement('li');
  const avatarElement = document.createElement('span');
  avatarElement.className = `avatar ${sender}`;
  avatarElement.textContent = sender === 'user' ? 'User' : 'AI';
  const textElement = document.createElement('div');
  textElement.className = 'message';
  textElement.textContent = text;

  messageElement.appendChild(avatarElement);
  messageElement.appendChild(textElement);
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(userInput) {
  // Simple bot responses based on user input
  let botResponse = 'This chatbox is just to showcase my skills so I did not see any need to code all the possible responses manually to it. Thank You';
  if (userInput.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I help you today?';
  } else if (userInput.toLowerCase().includes('how are you')) {
      botResponse = 'I am just a bot, but I am here to help you!';
  } else if (userInput.toLowerCase().includes('bye')) {
      botResponse = 'Goodbye! Have a great day!';
  }
  setTimeout(() => {
      addMessage(botResponse, 'bot');
  }, 500);
}


function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}