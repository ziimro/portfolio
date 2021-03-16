let ready = (callback) => {
    if (document.readyState != "loading") callback()
    else document.addEventListener("DOMContentLoaded", callback)
  }

ready(() => { 
	var baseUrl = "./galleryimages";

	// loading and listing files
	function getFiles() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", baseUrl, true);
		xhr.responseType = 'document';
		xhr.onload = () => {
		if (xhr.status === 200) {
			var elements = xhr.response.getElementsByTagName("a");
			for (x of elements) {
				let imagebox;
				if (x.href.match(/\.(webp)$/)) { 
					imagebox = document.createElement("div");
					imagebox.className = "imagebox";
					let img = document.createElement("img");
					img.src = x.href;
					imagebox.appendChild(img);
					document.getElementById("viewer").appendChild(imagebox);
				}

				// add classes from array
				let datatypes = ["logo", "thumbnail", "graphic"]
				for (var i of datatypes)
					if (x.href.indexOf(i) > -1) {
						imagebox.classList.toggle(i, true)
				 		console.log(imagebox.classList);
				}

				// navbar sorting
				document.querySelectorAll('.list').forEach(list => {
					list.addEventListener('click', e => {
					  	const value = e.target.dataset.filter;
					  	document.querySelectorAll('.imagebox').forEach(imagebox => {
							if (value == 'All') {
							imagebox.style.display = 'block'
							} else {
							imagebox.style.display = imagebox.classList.contains(value) ? 'block' : 'none';
							}
					  	});
					
						// add/remove active class on selected item
					  	e.target.classList.add('active');
					  	Array.from(e.target.parentNode.children).forEach(sibling => {
							if (sibling != e.target) {
							sibling.classList.remove('active');
							}
					  	});
					});
				});
				
				// image viewer script
				const imageboxes = document.querySelectorAll(".imagebox");
				const imageView = document.querySelector(".imageView");
				const imageViewImage = document.querySelector(".imageViewImage").querySelector("img");
				const imageViewClose = document.querySelector(".imageViewClose");

				function closeBtnFunction() {
					imageViewClose.addEventListener("click", () => {
						imageView.classList.remove("imageView-visible");
					});
				}
				for (let x of imageboxes) 
				x.addEventListener("click", () => {
					imageView.classList.add("imageView-visible");
					imageViewImage.src = x.childNodes[0].src;
					closeBtnFunction();
				});
				
			};
		}
			else {
				alert('Request failed. Returned status of ' + xhr.status);
			}
		}
	xhr.send()
	}
	getFiles();
});