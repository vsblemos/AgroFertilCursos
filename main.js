// dropdown question

function dropdown(event){

    let target = event.target
    let node = target.parentNode
    let nodeChild = node.children[1];
    nodeChild.classList.toggle('hide');
}

// testemonial carrousel

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
    1024: {
    slidesPerView: 2,
    setWrapperSize: true
    }
    }
  })

  // menu hamburguer
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
};

const links = document.querySelectorAll('nav ul li a');
for(const link of links){
    link.addEventListener('click',()=>{
        nav.classList.remove('show')  
    })
}