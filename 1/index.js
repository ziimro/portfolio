function listimages() { 
    var images = document.getElementById("images")
    const testFolder = '.images/';
    const fs = require('fs');

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log('1')
            var img = document.createElement("img");
            images.appendChild(img);
        });
    });
}