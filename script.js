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
// for (let i = 0; i < 18; i++) {
//     let open = document.getElementsByClassName("shop-open")[i]
//     open.addEventListener('click',function(e){
//         console.log(e.target)
//         console.log(e.target.src='img/products/f3.jpg')
//         // window.location.href = 'sproduct.html'
//     })
// }
// sproduct image swiper
// if(window.location.href == 'sproduct.html'){
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
// }
