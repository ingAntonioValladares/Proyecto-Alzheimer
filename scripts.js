const tituloPrincipal = document.querySelector('h1');
tituloPrincipal.classList.add('titulo');
tituloPrincipal.classList.add('centrar-texto');
tituloPrincipal.textContent = 'Estadísticas';
console.log(tituloPrincipal);

const navegacion = document.querySelectorAll('a');
navegacion[2].textContent = 'TEORIA';

const parrafo = document.createElement('p');
parrafo.textContent = 'nueva estadistica';
parrafo.classList.add('centrar-texto');
parrafo.style.margin = '15px 5px 2px 8px';
// parrafo.setAttribute('class','color');
console.log(parrafo);

const estMundial = document.querySelector('.estadistica-mundial');
estMundial.appendChild(parrafo);
console.log(estMundial);

const 
