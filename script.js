

//const lista = document.querySelector('.animais-lista')
//const animais = document.querySelector('.animais')
//const contato = document.querySelector('.contato');
//const titulo = contato.querySelector('.titulo');
//const mapa  = document.querySelector('.mapa');

//contato.replaceChild(mapa, titulo);



//const novoh1 = document.createElement('h1');

//novoh1.innerText='novo titulo';
//novoh1.classList.add('titulo');

//mapa.appendChild(novoh1)

function iniTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');

            }
            );

            tabContent[index].classList.add('ativo');
        };


        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        }

        );



        

    }
}



iniTabNav();

function initAccordeon(){
const accordeonList = document.querySelectorAll('.js-accordion dt')
const activeClass = 'ativo';
if (accordeonList.length){

accordeonList[0].classList.add(activeClass);
accordeonList[0].nextElementSibling.classList.add(activeClass);


function acctiveAccordion(){
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
}

accordeonList.forEach((item) => {
    item.addEventListener('click', acctiveAccordion);
});




}};


initAccordeon();

function initScrollSusve() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        //window.scrollTo({
        //   top: topo,
        //  behavior: 'smooth',
        // });

    };

        linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

initScrollSusve();
function initAnimacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.5;

function animalScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade)<0;

    if (isSectionVisible){
        section.classList.add('ativo');
    }else{
        section.classList.remove('ativo');
    }
  })
}


window.addEventListener('scroll', animalScroll);

}

initAnimacaoScroll();