const hamburgermenu = document.querySelector('#naviga .nav_icon');
const navContent = document.querySelector('#nav_cont');
const closenavbuton = document.querySelector('#nav_cont .close_btn');
const navlinks = document.querySelectorAll('#nav_cont nav ul li a');
const scrollbtn = document.querySelector('.scroll-top');


if(scrollbtn){
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollbtn.style.display = 'flex';
        }
    })
    window.addEventListener('scroll', ()=> {
        if(pageYOffset < (window.innerHeight * 1.2)){
            scrollbtn.style.display = 'none';
        }
    });
    scrollbtn.addEventListener('click', ()=>{
        window.scrollTo(0, 0);
    }) 
}


hamburgermenu.addEventListener('click', ()=>{
    navContent.classList.add('show'); 
    document.body.style.overflow="hidden";
})
closenavbuton.addEventListener('click', ()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
})
navlinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navContent.classList.remove('show');
        document.body.style.overflow="initial";
    })
})