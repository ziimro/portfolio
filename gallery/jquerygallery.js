$(document).ready(function(){
	var baseUrl = "/gallery/galleryimages/";
	var pictures = [];

	// loading and listing files
	function getFiles() {
		$.ajax(baseUrl).success(function(data) {
			pictures = [];
			$(data).find("a[href]").each(function() {
				var href = $(this).attr('href');
				var imagebox;
				if (href.indexOf('.webp') > 0) {
					imagebox = document.createElement("div");
					imagebox.className = "imagebox";
					var img = document.createElement("img");
					img.src = href;
					imagebox.append(img)
					$("#viewer").append(imagebox)
				}
				
				var datatypes = ["logo", "thumbnail", "graphic"]
				for (var x of datatypes)
					if (href.indexOf(x) > -1)
						$(imagebox).toggleClass(x, true)
			});

			// imageviewer script by 6483 (ty for help <3)
			$('.imagebox').click(function(e) {
				$('.imageView').addClass('imageView-visible');
				$('.imageViewImage img').attr('src', e.currentTarget.childNodes[0].src);
			});

			$('.imageViewClose').click(function() {
				$('.imageView').removeClass('imageView-visible');
			});
		});
	}
	getFiles();

	// navbar sorting
	$('.list').click(function(){
		const value = $(this).attr('data-filter');
		if (value == 'All'){
			$('.imagebox').show(0).animate({opacity: 1}, 400);
		}
		else {
			$('.imagebox').not('.'+value).hide(0).animate({opacity: 0}, 400);
			$('.imagebox').filter('.'+value).show(0).animate({opacity: 1}, 400);
		}
	})
	// add active class on selected item
	$('.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})