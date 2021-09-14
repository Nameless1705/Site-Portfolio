



// INTERACTIVE CURSOR (NAMELESS)
var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
    
    var ps = new ParticleSlider({
      ptlGap: isMobile || isSmall ? 3 : 2,
      ptlSize: isMobile || isSmall ? 3 : 1,
      mouseForce: isMobile || isSmall ? 1 : 2000,
      width: 1e9,
      height: 1e9
    });
        
    (window.addEventListener
     ? window.addEventListener('click', function(){ps.init(true)}, false)
     : window.onclick = function(){ps.init(true)});
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
      
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);
//---------------------------------------------------------------------//

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
// PARALAX BG 1st ARROW + ARROW
let bgp = document.getElementById('bgp')
let arrow1 = document.getElementById('arrowfirst');
let about = document.getElementById('about');

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      window.addEventListener('scroll', function(){
      var value = about.getBoundingClientRect().top;
      bgp.style.backgroundPositionY = value * 0.2 + 'px';
      arrow1.style.right = -value * 2 + 'px'; 
    })
  }
  });
}
let options = {
  threshold: [0] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.bg-arrow');

for (let elm of elements) {
  observer.observe(elm);
}
//---------------------------------------------------//
// PARALAX BG 2nd ARROW + ARROW
let bgp2 = document.getElementById('bgp2')
let arrow2 = document.getElementById('arrowsecond');
let skills = document.getElementById('skills');

function onEntry2(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      window.addEventListener('scroll', function(){
      var value = skills.getBoundingClientRect().top;
      bgp2.style.backgroundPositionY = value * 0.3 + 'px';
      arrow2.style.left = -value * 2 + 'px'; 
    })
  }
  });
}
let options2 = {
  threshold: [0] };
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll('.bg-arrow-two');

for (let elm2 of elements2) {
  observer2.observe(elm2);
}
//---------------------------------------------//
// ANIMATION FOR SKILLS ITEMS
function onEntry3(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show2');
      }
    });
  }
  
  let options3 = {
    threshold: [0.5] };
  let observer3 = new IntersectionObserver(onEntry3, options3);
  let elements3 = document.querySelectorAll('.skill-item');
  
  for (let elm3 of elements3) {
    observer3.observe(elm3);
  }
//-------------------------------------------//

  
// ANIMATION FOR TITLES
function onEntry4(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show');
      }
    });
  }
  
  let options4 = {
    threshold: [1] };
  let observer4 = new IntersectionObserver(onEntry4, options4);
  let elements4 = document.querySelectorAll('.title');
  
  for (let elm4 of elements4) {
    observer4.observe(elm4);
  }
//-------------------------------------------//

  
// ZOOM FOR PICTURES (PORTFOLIO)
var modal = document.getElementById("myModal");
function openModal() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  }

  // Close the Modal
  function closeModal() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
}

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
    
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
//-------------------------------------------------//
