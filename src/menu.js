document.getElementById('box-nav-mobile').addEventListener('click', openMenu)


document.getElementById('home-option').addEventListener('click', openMenu)
document.getElementById('about-me-option').addEventListener('click', openMenu)
document.getElementById('skills-option').addEventListener('click', openMenu)
document.getElementById('latest-projects-option').addEventListener('click', openMenu)
document.getElementById('education-option').addEventListener('click', openMenu)

function openMenu(){

    const box_nav = document.getElementById('box-nav')
    const litle_bar = document.getElementsByClassName('litle-bar')

    if(box_nav.style.right==='0px'){

        box_nav.style.right=''

      litle_bar[0].style.position = ''
        litle_bar[1].style.display = ''
        litle_bar[2].style.position = ''

        litle_bar[0].style.transform = ''
        litle_bar[2].style.transform = ''

    } else{

        box_nav.style.right='0px'

        litle_bar[0].style.position = 'absolute'
        litle_bar[1].style.display = 'none'
        litle_bar[2].style.position = 'absolute'

        litle_bar[0].style.transform = 'rotate(45deg)'
        litle_bar[2].style.transform = 'rotate(-45deg)'


    }

}