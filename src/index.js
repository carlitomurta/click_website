import './style.scss';

// SCROLL SMOOTH
$(document).ready(function() {
  // MASK PHONE
  $('#phone').mask('(00)00000-0000');
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 101
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

// HEADER
document.body.onscroll = function() {
  scrollHandle();
};
const header = document.getElementById('header');
function scrollHandle() {
  if (header) {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      header.className = 'opaque';
      header.classList.remove('translucent');
    } else {
      header.className = 'translucent';
      header.classList.remove('opaque');
    }
  }
}
