const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
// sproduct image swiper
const main = document.getElementById('main-img');
const small = document.getElementsByClassName('small-img');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        close.classList.remove('active')
    })
}
// going to sproduct and changing src
function changeImage(src){
    localStorage.setItem('clickedImage',src);
    window.location.href = 'sproduct.html'
}
let clicked = localStorage.getItem('clickedImage');
if(clicked){
    main.src = clicked
}

// sproduct image swiper
    small[0].onclick = function(){
        main.src = small[0].src
    }
    small[1].onclick = function(){
        main.src = small[1].src
    }
    small[2].onclick = function(){
        main.src = small[2].src
    }
    small[3].onclick = function(){
        main.src = small[3].src
    }