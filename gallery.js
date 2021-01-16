$(document).ready(function(){
	$('.list').click(function(){
		const value = $(this).attr('data-filter');
		if (value == 'All'){
			$('.itemBox').show('1000');
		}
		else {
			$('.itemBox').not('.'+value).hide('1000');
			$('.itemBox').filter('.'+value).show('1000');
		}
	})
	// add active class on selected item
	$('.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	// imageviewer script by 6483 (ty for help <3)
	$('.itemBox').click(function(e) {
		$('.imageView').addClass('imageView-visible');
		$('.imageViewImage img').attr('src', e.currentTarget.childNodes[0].src);
	});

	$('.imageViewClose').click(function() {
		$('.imageView').removeClass('imageView-visible');
	});
})