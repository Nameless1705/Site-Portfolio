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

  