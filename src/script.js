//gets the uploaded document and reads it to the textarea 
var file = document.getElementById('myFile').addEventListener('change', function(){
  var fr = new FileReader();
  fr.onload=function(){
    document.getElementById('notDefteri').textContent=fr.result;

  }
  fr.readAsText(this.files[0]);
})

//when the download button is clicked reads the textarea and turns it into a blob that is downloadable as a .txt file
document.getElementById('download').addEventListener('click', function(){
  const value = notDefteri.value;
  var blob = new Blob([value], {type:'text/plain'});
  var url = URL.createObjectURL(blob);
  
  window.open(url, '_blank')
    saveAs(url, "text.txt")
});

const saveAs = (url, filename) => {
  const link = document.createElement('a');

  if(link.download===undefined) throw new Error('HTML5 download is not supported');

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility='hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

};