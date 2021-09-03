const btn = document.querySelector('#click-button');
function display () {
    const selectedBox = document.querySelector('.box');
    selectedBox.classList.add('show');
}

btn.addEventListener('click',display);


const closeButton = document.querySelector('#x-button')
function closePop () {
    const selectedBox2 = document.querySelector('.box');
    selectedBox2.classList.remove('show');
}
closeButton.addEventListener('click',closePop)





function display ( {
    const targetedDiv = document.querySelector('.mobile-menu-hidden');
    targetedDiv.classList.add('show');
    menuButton.style.display = 'none';
}
menuButton.addEventListener('click',display);
const closeButton = document.querySelector('#close-button');
function closePop () {
    const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
    targetedDiv2.classList.remove('show');
    menuButton.style.display = 'block';
}
closeButton.addEventListener('click',closePop);
const anchorTagLinks = document.querySelectorAll('.menu-links');
anchorTagLinks.forEach((link) => {
    link.addEventListener('', closePop);
})