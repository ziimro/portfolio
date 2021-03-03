$(document).ready(function(){
	var baseUrl = "/1/obrazki/";
	var pictureIndex = 0;
	var pictures = [];

	// loading and listing files
	function getFiles() {
		$.ajax(baseUrl).success(function(data) {
			pictures = [];
			$(data).find("a[href]").each(function() {
				var href = $(this).attr('href');
				if (href.indexOf('.webp') > 0) {
					var imagebox = document.createElement("div");
					imagebox.className = "imagebox";
					var img = document.createElement("img");
					img.src = href;
					imagebox.append(img)
					$("#viewer").append(imagebox)
					//console.log(href);
				}

				// if (href.indexOf('logo') > 0) {
				// 	$(".imagebox").toggleClass("logo");
				// }
				// if (href.indexOf('thumbnail') > 0) {
				// 	$(".imagebox").toggleClass("thumbnail");
				// }
				// if (href.indexOf('graphic') > 0) {
				// 	$(".imagebox").toggleClass("graphic");
				// }

				//make a function read index from datafilter and apply datafilter as a class
				const datafilter = $(".list").attr("data-filter");
				console.log(datafilter);
				if (href.indexOf(datafilter)) {
					$(".imagebox").toggleClass("man");
				}
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
			$('.imagebox').show('1000');
		}
		else {
			$('.imagebox').not('.'+value).hide('1000');
			$('.imagebox').filter('.'+value).show('1000');
		}
	})
	// add active class on selected item
	$('.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})