// Your code goes here

//nav enlarges text size on double click, goes back to normal font size when mousing out
const nav = document.querySelector('nav');
nav.addEventListener('dblclick', event => {
    event.target.style.fontSize = "2rem";
})

nav.addEventListener('mouseout', event => {
    event.target.style.fontSize = "1.6rem";
})


//logo hover effect to blue


const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
})

logo.addEventListener('mouseout', event => {
    event.target.style.color = 'black';
})


//adds a border upon imgs loading 

const imgs = document.querySelectorAll('img');
imgs.forEach(img => img.addEventListener('load', function(event){
    event.target.style.border = '2px solid red';
}))

// const navBtn = document.querySelectorAll('button');
// navBtn.forEach(item => item.addEventListener('mouseover', event => {
//     event.target.style.color = 'blue';
// }))



//Debugging code with Tommy for his project - inverts images on hover
// const images = document.querySelectorAll('img');
// images.forEach(image => image.addEventListener('mouseover', event =>{
//     event.target.style.filter = 'invert(1)';
//     event.preventDefault();
// }))