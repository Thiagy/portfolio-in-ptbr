// Seleciona o ícone do WhatsApp pelo ID
var whatsappIcon = document.getElementById('whatsapp-icon');

// Adiciona um ouvinte de evento de clique ao ícone do WhatsApp
whatsappIcon.addEventListener('click', function() {
  // Define o número de telefone ou link do WhatsApp
  var phoneNumber = '5564996753372';
  
  // Cria o link para o WhatsApp com o número de telefone ou link
  var whatsappLink = 'https://wa.me/' + phoneNumber;
  
  // Abre o link do WhatsApp em uma nova aba
  window.open(whatsappLink);
});