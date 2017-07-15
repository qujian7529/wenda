
$(function() { 
	//导航
    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
		event.preventDefault();
		$('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
		$('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
		$('a[href="#toggle-search"]').closest('li').toggleClass('active');

		if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
			setTimeout(function() { 
				$('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
			}, 100);
		}			
	});
    
	
	// $(document).on('keyup', function(event) {
	// 	if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
	// 		$('a[href="#toggle-search"]').trigger('click');
	// 	}
	// });

	//  if (window.location == window.parent.location) {
 //        $('#fullscreen').html('<span class="fa fa-compress"></span>');
 //        $('#fullscreen').attr('href', 'http://bootsnipp.com/mouse0270/snippets/rVnOR');
 //        $('#fullscreen').attr('title', 'Back To Bootsnipp');
 //    }    
 //    $('#fullscreen').on('click', function(event) {
 //        event.preventDefault();
 //        window.parent.location =  $('#fullscreen').attr('href');
 //    });
 //    $('#fullscreen').tooltip();
    
    
});