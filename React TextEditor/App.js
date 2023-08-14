import './App.css';

function fileReadFunc(){
  //document.getElementById("myText").textContent = event.target.textContent
  const reader = new FileReader()
  const myTextFile = document.getElementById("myFile")
  reader.readAsText(myTextFile.files[0])
  reader.onload = () => document.querySelector("textarea").textContent = reader.result
  }

function downloadFunction() {
  const textElement = document.createElement("a")
  const file = new Blob([document.querySelector("textarea").textContent], {type:"text/plain"})
  textElement.href = URL.createObjectURL(file)
  textElement.download = "text.txt"
  document.body.appendChild(textElement)
  textElement.click()
  document.body.removeChild(textElement)
}

function App() {
  return <div className="absolute left-0 right-0 ml-auto mr-auto w-[60%] h-screen flex justify-between items-center">

    <input type="file" id="myFile" onChange={fileReadFunc}></input>
    <textarea id="myText" className="border-black border-[1px] h-[200px] w-[500px] max-h-screen p-[5px]" placeholder='Bir şeyler yaz...'>
        
    </textarea>
    <button type="button" className="w-[90px] h-[30px] bg-gray-400 rounded-3xl" onClick={downloadFunction}>Download</button>
  </div>
}

export default App;
