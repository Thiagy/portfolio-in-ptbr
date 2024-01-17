//Função que gera texto automaticamente após clicar em ler mais
function readMoreText(nameIdTag, text){

    let about_me_text = document.getElementById(nameIdTag)
  
    if(about_me_text){
  
      about_me_text.innerHTML=''
  
      const secondTextAboutme = [text]
      
      showTextEfect(nameIdTag, secondTextAboutme, 40);
    }
  
  }
  
  //'Read more' of main content
  document.getElementById('btn-read-more-main-content').addEventListener('click', ()=>{ 
  
    readMoreText('myExperienceText-2', "Minha jornada não termina aqui; com uma nova oportunidade de trabalho, teria as condições necessárias para fazer um mestrado em Engenharia de Software. Espero que o recrutador me veja como alguém que vai abraçar de todo o coração esta oportunidade de trabalho, que é muito mais que uma fonte de renda – é uma oportunidade de ampliar meus conhecimentos na área de tecnologia.")
  
    document.getElementById('btn-read-more-main-content').style.display = 'none';
  
  })
  
  //'Read more' of about me
  document.getElementById('btn-read-more-about-me').addEventListener('click', ()=>{ 
  
    readMoreText('about-me-text-2', "Movido pela paixão pela programação, transformo desafios em oportunidades de crescimento, ampliando os limites das minhas habilidades. Meu compromisso com a excelência em codificação é evidente em minha disposição de investir muitas horas para garantir a solução perfeita de problemas e a implementação de recursos complexos. Essa dedicação, aliada a uma mentalidade resiliente, me posiciona como um candidato ideal para a função de programador, pronto para contribuir com minha experiência para elevar projetos e superar expectativas.")
  
    document.getElementById('btn-read-more-about-me').style.display = 'none';
  
  })