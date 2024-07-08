window.onload = function() {
    window.scrollTo(0, 0);
  }
  
  document.getElementById('check').addEventListener('change', function() {
    const navbar = document.querySelector('.navbar');
    if (this.checked) {
        navbar.style.left = '0';
    } else {
        navbar.style.left = '-200%';
    }
    const checkbtn = document.querySelector('.checkbtn');
    if (this.checked) {
        checkbtn.style.color = '#d0d0d0';
    } else {
        checkbtn.style.color = '#000000';
    }
    
});
