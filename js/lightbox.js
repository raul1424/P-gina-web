const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const closeLight = document.querySelector('.close');


imagenes.forEach(imagen => { //al darle click a una imagen se dispara un evento
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));//me dice donde esta le imagen 
    })
});

contenedorLight.addEventListener('click',(e)=>{ //al dar click a cualquer parte se cierra
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show');
        imagenLight.classList.toggle('showImage');
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{//se agrgra un evento al darle click
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show');//nos ayuda a agregar una imagen
    imagenLight.classList.toggle('showImage');//nos muestra la imagen
    hamburguer.style.opacity = '0'//nos ayuda ano ver el incono de hamburgue
}