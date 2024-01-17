document.getElementById('right-ball-arrow').addEventListener('click', goToNextImage)
document.getElementById('left-ball-arrow').addEventListener('click', goToPreviousImage)

var left_arrow = document.getElementById('left-arrow')
var right_arrow = document.getElementById('right-arrow')

var scrollX_latest_projects = document.getElementById('scrollX_latest_projects')

const latest_projects = document.getElementById('latest-projects') 

var larguraDaDiv = latest_projects.offsetWidth;

var numberProductVizible 

if(larguraDaDiv >= 1337){
    numberProductVizible = 3
} else if (larguraDaDiv >= 939){
    numberProductVizible = 2
} else if (larguraDaDiv >= 300){
    numberProductVizible = 1
} 


var num = 0

// Função para ir para a próxima imagem
function goToNextImage(){

    if (num < (6 - numberProductVizible)) {
  
      num += 1;
  
      scrollX_latest_projects.style.left = `-${num * 400}px`;
  
    }    
  
    updateArrowNavigation();

    return num
}
    
// Função para ir para a imagem anterior
function goToPreviousImage(){

    if (num >= 1) {
        
        num -= 1;

        scrollX_latest_projects.style.left = `-${num * 400}px`;

    }

    updateArrowNavigation();

    return num
}
    
// Função para atualizar a navegação das setas
function updateArrowNavigation(){

    if (num >= (6 - numberProductVizible)) {

        right_arrow.style.boxShadow = 'inset 3px 3px gray';

    } else {

        right_arrow.style.boxShadow = 'inset 3.5px 3.5px #01EEFE';

    }

    if (num <= 0) {

        left_arrow.style.boxShadow = 'inset 3px 3px gray';

    } else {

        left_arrow.style.boxShadow = 'inset 3.5px 3.5px #01EEFE';
        
    }

}