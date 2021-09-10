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

  