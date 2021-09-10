
let back = document.querySelector('.main__back');
let center = document.querySelector('.main__center');
let front = document.querySelector('.main__front');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    back.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
    center.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 50 + 'px)';
    front.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});