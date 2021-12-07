const hamburguer = document.querySelector('.hamburguer'); //clase
const menu = document.querySelector('.menu-navegacion');//clase


hamburguer.addEventListener('click', ()=>{ //se agrega y se quita
    menu.classList.toggle("spread");
})

window.addEventListener('click', e =>{ //nos ayuda acerrar el munu
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread");
    }
})