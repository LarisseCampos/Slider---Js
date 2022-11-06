'use strict';

const images = [
    { 'id': '1', 'url':'./src/images/01.jpg' },
    { 'id': '2', 'url':'./src/images/02.jpg' },
    { 'id': '3', 'url':'./src/images/03.png' },
    { 'id': '4', 'url':'./src/images/04.jpg' },
    { 'id': '5', 'url':'./src/images/05.jpg' },
    { 'id': '6', 'url':'./src/images/06.jpg' },
    { 'id': '7', 'url':'./src/images/07.jpg' },
    { 'id': '8', 'url':'./src/images/08.jpg' },
    { 'id': '9', 'url':'./src/images/09.png' },
    { 'id': '10', 'url':'./src/images/10.webp' },
    { 'id': '11', 'url':'./src/images/11.jpg' },
    { 'id': '12', 'url':'./src/images/12.webp' },
]
const container = document.querySelector( '#box-itens');
 
const carregarImagens = ( images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

carregarImagens(images,container);
let itensImagens = document.querySelectorAll('.item');

const anterior = () =>{
    container.appendChild(itensImagens[0]);
    itensImagens = document.querySelectorAll('.item')
}

const proximo = () =>{
    const ultimoItem = itensImagens[itensImagens.length -1];
    container.insertBefore( ultimoItem, itensImagens[0]);
    itensImagens = document.querySelectorAll('.item');
}

function comecarSlide(){
    const proximoSlide =  setInterval(anterior,2000)    
}

comecarSlide()