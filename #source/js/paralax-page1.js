// PARALAX BG 1st ARROW + ARROW
let bgp = document.getElementById('bgp')
let arrow1 = document.getElementById('arrowfirst');
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        window.addEventListener('scroll', function(){
        let value = window.scrollY ;
        bgp.style.backgroundPositionY = -value * 0.2 + 'px';
        arrow1.style.right = value * 1.7 + 'px'; 
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