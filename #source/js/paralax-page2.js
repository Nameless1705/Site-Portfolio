// PARALAX BG 2nd ARROW + ARROW
let bgp2 = document.getElementById('bgp2')
let arrow2 = document.getElementById('arrowsecond');
  function onEntry2(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        window.addEventListener('scroll', function(){
        let value = window.scrollY ;
        bgp2.style.backgroundPositionY = -value * 0.2 + 'px';
        arrow2.style.left = value * 1.5 + 'px'; 
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