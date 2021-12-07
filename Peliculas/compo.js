let btnAdd = document.querySelector('.btnAdd');
let btnRemove = document.querySelector('.btnRemove');

btnAdd.addEventListener('click', agregar);
btnRemove.addEventListener('click', eliminar);

function agregar(){
   let imagenPrueba = document.createElement('img');
   imagenPrueba.src = 'HarryPotter.jpg';
   imagenPrueba.className = 'imga';

   let contene = document.querySelector('.contenido');

   contene.appendChild(imagenPrueba);
}

let imga1 = document.querySelector('.imagen1');
let imga2 = document.querySelector('.imagen2');
let imga3 = document.querySelector('.imagen3');
let imga4 = document.querySelector('.imagen4');
let imga5 = document.querySelector('.imagen5');

imga1.addEventListener('mauseover', cambiar1);
imga2.addEventListener('mauseover', cambiar2);
imga3.addEventListener('mauseover', cambiar3);
imga4.addEventListener('mauseover', cambiar4);
imga5.addEventListener('mauseover', cambiar5);


function cambiar1 (){
    let imagenmatrix = document.querySelector('img');
    imagenmatrix.src = "Elclub.jpg";
}

function cambiar2 (){
    let imagengodzilla = document.querySelector('img');
    imagengodzilla.src = "Matriz.jpg";
}

function cambiar3 (){
    let imagentitanic = document.querySelector('img');
    imagentitanic.src = "Matilda.jpg";
}

function cambiar4 (){
    let imagenelclub = document.querySelector('img');
    imagenelclub.src = "Godzilla.jpg";
}

function cambiar5 (){
    let imagenmatilda = document.querySelector('img');
    imagenmatilda.src = "Titanic.jpg";
}
 
function eliminar(){
   let contene = document.querySelector('.contenido');

   let ultimo = contene.lastChild;
   contene.removeChild(ultimo);
}

/*let parra = document.querySelector('.derecha');

parra.addEventListener('click', cambiar);

function cambiar(){
    let imagengodzilla = document.querySelector('img');
    imagengodzilla.src = 'Titanic.jpg';
}*/
