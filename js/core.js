$(document).ready(function() {
	$('.scroll').on('click', function(){
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
  })

  

})