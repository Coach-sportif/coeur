var button = document.querySelector('.button');
var span = button.querySelector('span');
var coeur = document.querySelector('.coeur');
var click = true;

button.addEventListener('click', function(){
    if(!click)
        return;

    click = false;

    coeur.classList.toggle('coeurAnimate');
    if(coeur.classList.contains('coeurAnimate')){
        span.textContent = 'DECEDE';
        button.classList.add('buttonAnim');
        window.setTimeout(function(){
            button.classList.remove('buttonAnim');
            click = true;
        }, 1000)
    }
    else{
        span.textContent = 'REANIME';
        button.classList.add('buttonAnim');
        window.setTimeout(function(){
            button.classList.remove('buttonAnim');
            click = true;
        }, 1000)
    }
});
