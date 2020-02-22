// This allows navbar to collapse after cliking/tapping on menu item
$(document).on('click', '.navbar-collapse.show', function (e) {
  $(this).collapse('hide');
});

// Allows AOS fadein animations to work on scroll
AOS.init({
  duration: 1200,
  // startEvent: 'DOMContentLoaded'
});

var year = new Date().getFullYear();

var yearDisplay = document.querySelector('#year');
var span = document.createElement('span');
span.innerHTML = '2018 - ' + year.toString()  + ' Liz Trenholme | All rights reserved.';
var fragment = document.createDocumentFragment();
fragment.appendChild(span);

yearDisplay.appendChild(fragment);