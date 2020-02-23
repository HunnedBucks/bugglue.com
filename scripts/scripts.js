function readFiles(event) {
    var fileList = event.target.files;

    for(var i=0; i < fileList.length; i++ ) {
        loadAsText(fileList[i]);
    }
}

function loadAsText(theFile) {
    var reader = new FileReader();

    reader.onload = function(loadedEvent) {
        // result contains loaded file.
        console.log(loadedEvent.target.result);
        document.getElementById('ToEncrypt').value = loadedEvent.target.result
    }
    reader.readAsText(theFile);
    // document.getElementById('ToEncrypt').value=reader.result;
}