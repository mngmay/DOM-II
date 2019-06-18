// Your code goes here

//nav enlarges text size on double click, goes back to normal font size when mousing out
const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
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

imgs.forEach(img => img.addEventListener('load', event => {
    event.target.style.border = '2px dashed blue';
}))

imgs.forEach(img => img.addEventListener('dragstart', event => {
    event.target.style.border = '2px solid red';
}))

imgs.forEach(img => img.addEventListener('drag', event => {
    event.target.style.width = '50%';
}))

imgs.forEach(img => img.addEventListener('dragend', event => {
    event.target.style.width = '100%';
    event.target.style.border = 'none';
}))

//button changes border radius and font size on double click and reverts when mousing out

const btn = document.querySelectorAll('.btn');
btn.forEach(button => button.addEventListener('dblclick', event => {
    event.target.style.borderRadius = "200px";
    event.target.style.fontSize = "3rem";
}))

btn.forEach(button => button.addEventListener('mouseout', event => {
    event.target.style.borderRadius = "15px";
    event.target.style.fontSize = "1.6rem";
}))

//paragraphs disappear if you release a mouseclick over
const paragraph = document.querySelectorAll('p');
paragraph.forEach(par => par.addEventListener('mouseup', event => {
    event.target.style.opacity = 0;
}))

paragraph.forEach(par => par.addEventListener('mouseover', event => {
    event.target.style.opacity = 1;
}))

//prevents copying of h2 headers

const hTwo = document.querySelectorAll('h2');
hTwo.forEach(header => header.addEventListener('copy', event => {
    event.preventDefault();
}))





//Debugging code with Tommy for his project - inverts images on hover
// const images = document.querySelectorAll('img');
// images.forEach(image => image.addEventListener('mouseover', event =>{
//     event.target.style.filter = 'invert(1)';
//     event.preventDefault();
// }))
