let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
ready(() => { 
    let baseUrl = "/galleryimages/";
    let pictureIndex = 0;
    let pictures = [];

    // loading and listing files
    function getFiles() {
        fetch(baseUrl) 
            .then((data) => {
            pictures = [];
            let elements = document.querySelectorAll("a[href]");
            Array.prototype.forEach.call(elements, function(el, i) {
                let href = el.getAttribute('href');
                let imagebox;
                if (href.indexOf('.webp') > 0) {
                    console.log("if statement finished")
                    imagebox = document.createElement("div");
                    imagebox.className = "imagebox";
                    let img = document.createElement("img");
                    img.src = href;
                    imagebox.append(img)
                    document.getElementById("#viewer").append(imagebox);
                }
            });
        });
    }
    getFiles();
});