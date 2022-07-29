const button = document.querySelector('.dark')
const paragraph = document.querySelector('p')
const arrow = document.querySelectorAll('i')
const list = document.querySelectorAll('.list')
const arr = document.querySelectorAll('.arr')
const cancel = document.querySelector('.close')
const ham = document.querySelector('.open')
const nav = document.querySelector('.all')
const navbar = document.querySelector('nav')
const container = document.querySelector('.container')
let every = document.body
button.addEventListener('click', ()=>{
    every.classList.toggle('dark-mode')
   nav.style.backgroundColor = 'rgb(47, 48, 48)'
   nav.style.color = 'white'
   navbar.style.backgroundColor = 'white'
   navbar.style.margin = '0'
    console.log('dark mode!!!')
    button.innerHTML = 'light';
})
if (every.classList.contains('dark-mode')) {
    paragraph.style.color = 'white';
    console.log('hello');
} else {
    paragraph.style.color = 'gray';
}
for (let i = 0; i < arrow.length; i++) {
arrow[i].addEventListener('click', ()=>{
       list[i].classList.toggle('show')
       arr[i].classList.toggle('.turn')
       console.log('kayy');
})

}

ham.addEventListener('click', ()=>{
    nav.style.display = 'block';
    nav.style.opacity = '1';
    container.style.opacity = '0.4';
    nav.style.opacity = '1';
    nav.style.zIndex = '1';
    ham.style.transitionDuration = '2s';

    })

cancel.addEventListener('click', ()=>{
nav.style.display = 'none';
container.style.opacity = '1';
container.style.opacity = '1';

})