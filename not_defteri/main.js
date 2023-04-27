console.log("Hello!")

var file = document.getElementById("myFile").files[0];

var reader = new FileReader();
reader.onload = function (e){

    var textArea = document.getElementById("myFile");
    textArea.value = e.target.result;

};
reader.readAsText(file);