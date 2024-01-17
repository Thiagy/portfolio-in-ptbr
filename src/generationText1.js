// Função que gera textos automaticamente.
function showTextEfect(idElemento, textoArray, velocidade, callback) {
    let index = 0;
    let textoAtual = '';
    let itIsBlock= false
  
  
    function exibirTexto() {
      textoAtual = textoArray[index];
  
      if (textoAtual.length > 0) {
        document.getElementById(idElemento).innerHTML += textoAtual.charAt(0);
        textoArray[index] = textoAtual.slice(1);
        setTimeout(exibirTexto, velocidade);
      } else {
        index++;
        if (index < textoArray.length) {
          document.getElementById(idElemento).innerHTML += '<br>';
          setTimeout(exibirTexto, 1000);
        } else {
          // Se um callback foi fornecido, chame-o
          if (typeof callback === 'function' && itIsBlock === false) {
            callback();
          }
        }
      }
    }
  
    exibirTexto();
}
  
// Utilização para o texto "mytExperienceText"
const firstTextMyExperience = [

    "Meu nome é Thiago Rodrigues. Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Engenharia de Software. Como programador JavaScript full-stack, tenho 4 anos de experiência."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('myExperienceText-1', firstTextMyExperience, 15, () => {

        // Este código será executado após a conclusão da função showTextEfect
        document.getElementById('btn-read-more-main-content').style.display = 'block';
    });

});

// Utilização para o texto "about-me"
const firstTextAboutMe = [
"Sou uma pessoa que enfrenta as adversidades com determinação, abraçando os desafios, principalmente aqueles que mais tende a evitar. Essa mentalidade perseverante vem sendo cultivada desde a minha infância, fase da vida caracterizada por dificuldades. Na minha prática de programação, aplico as lições tiradas da vida. Tenho o hábito de dedicar longas horas, às vezes até ficar acordado a noite toda, para resolver problemas (bugs) ou contemplar a implementação de funcionalidades mais complexas."
];

document.addEventListener('DOMContentLoaded', () => {

showTextEfect('about-me-text-1', firstTextAboutMe, 15, () => {

    document.getElementById('btn-read-more-about-me').style.display = 'block';
});

});

//Generation Front End Technology List
const FrontEndTechnologyList = [

"HTML | CSS | Javascript | Java | Python | React | Angular | Typescript | Bootstrap | Tailwindcss | Bulma | Gimp | Gestão de Projetos de TI | Metodologia Ágil Scrum | Vercel | Netlify | Render | Git | GitHub."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('languages-front-end', FrontEndTechnologyList, 50, () => {

        return

    });

});

//Generation Back End Technology List
const BackEndTechnologyList = [

"NodeJs | Express | Api | Mongoose | Sequelize | Prisma | MongoDB | MySQL | PostgreSQL | WebSocket | Token | bcrypt."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('languages-back-end', BackEndTechnologyList, 50, () => {

        return

    });

});

//Generation Undergraduate Degree
const textMyUndergraduateDegree = [

    "Graduação em Análise e Desenvolvimento de Sistemas pela Universidade de Goiás 2020 - 2023."

];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-undergraduate-degree', textMyUndergraduateDegree, 50, () => {

        return

    });

});

//Generation Postgraduate Degree
const texPostGraduate = [

    "Pós-Graduação em Engenharia de Software pela Universidade de Goiás 2023 - 2024."
];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-post-graduate', texPostGraduate, 50, () => {

        return

    });

});

//Generation Professional Courses
const texProfessionalCourses = [
    "Curso Python pelo 'Curso em Vídeo' - 2020.",
    "Java Course with Object-Oriented Programming by 'Curso em Video' - 2020.",
    "Curso Java com Programação Orientada a Objetos pelo 'Curso em Vídeo' - 2020.",
    "Curso avançado para Desenvolvedor Javascript Full Stack da OneBitCode - 2021."
];

document.addEventListener('DOMContentLoaded', () => {

    showTextEfect('text-my-professional-courses', texProfessionalCourses, 50, () => {

        return
        
    });

});
