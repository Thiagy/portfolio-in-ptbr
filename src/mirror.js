//Função que permite exibir um feixe de luz sobre a tag.
function showLight(tag) {
    // Selecionar o elemento .main-image
    const element = document.querySelector(tag);
  
    // Verificar se o atributo data-apply-styles está definido
    const applyStyles = element.getAttribute('data-apply-styles');
  
    // Adicionar ou remover a classe com base no valor do atributo
    if (applyStyles === 'true') {
      element.classList.add('applyStyles');
      element.setAttribute('data-apply-styles', 'false');
    } else {
      element.classList.remove('applyStyles');
      element.setAttribute('data-apply-styles', 'true');
    }
  }
  
  // Inicializar o atributo data-apply-styles como true para .main-image
  document.querySelector('.main-image').setAttribute('data-apply-styles', 'true');
  
  // Passar um feixe de luz na imagem do dono do portfólio
  setInterval(() => { showLight('.main-image') }, 3000);