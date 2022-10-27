const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo');
   
});