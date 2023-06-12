window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });