function onScroll(){

if(scrollY == 0){

   navegacao.classList.remove('scroll') 
}else{

    navegacao.classList.add('scroll')
}


 
}

function openMenu() {
principal.classList.add('menu-expanded')
}

function closeMenu(){
    principal.classList.remove('menu-expanded')
}

