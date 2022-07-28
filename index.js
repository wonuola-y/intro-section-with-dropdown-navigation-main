const button = document.querySelector('button')
const paragraph = document.querySelector('p')
let every = document.body
button.addEventListener('click', ()=>{
    every.classList.toggle('dark-mode')
   
    console.log('dark mode!!!')
})
if (every.classList.contains('dark-mode')) {
    paragraph.style.color = 'white';
    console.log('hello');
} else {
    paragraph.style.color = 'gray';
}