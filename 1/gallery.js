let ready = (callback) => {
    if (document.readyState != "loading") callback()
    else document.addEventListener("DOMContentLoaded", callback)
  }

ready(() => { 
	var baseUrl = "/1/obrazki/";

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
					let viewer = document.getElementById("viewer")
					viewer.appendChild(imagebox);
				}
				
				let datatypes = ["logo", "thumbnail", "graphic"]
				for (var i of datatypes)
					if (x.href.indexOf(i) > -1) {
						imagebox.classList.toggle(i, true)
				 		console.log(imagebox.classList);
				}
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