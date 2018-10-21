// This allows navbar to collapse after cliking/tapping on menu item
$(document).on('click','.navbar-collapse.show',function(e) {
    $(this).collapse('hide');
  });

  // Allows AOS fadein animations to work on scroll
  AOS.init({
    duration: 1200,
  });