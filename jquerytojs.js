let ready = (callback) => {
    if (document.readyState != "loading") callback()
    else document.addEventListener("DOMContentLoaded", callback)
  }
  
ready(() => { 
    let baseUrl = "/galleryimages/"

    // loading and listing files
    function getFiles() {
        var request = new XMLHttpRequest();
        request.open('GET', baseUrl, true);

        request.onload = function(data) {
            if (this.status >= 200 && this.status < 400) {
                let datainfo = document.querySelectorAll("a[href]");
                
                var elements = document.querySelectorAll("a[href]");
                Array.prototype.forEach.call(elements, function(data){
                    var href = this.getAttribute('href');
                    var imagebox;
                    if (href.indexOf('.webp') > -1) {
                        console.log("sucsess!!")
                    }
                });
            } else {
                // We reached our target server, but it returned an error
            }
        };
        request.send();
    }
    getFiles();
});