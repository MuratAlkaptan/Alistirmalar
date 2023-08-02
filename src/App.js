import './App.css';

function calculate() {
  let string = document.getElementById("box").value
  let opt
  let nums = [[]]
  const setOpts = ["x", "/", "+", "-"]
  let position
  string.split(" ").join("")
  string = string.trim()
  string = string.toLowerCase()
  setOpts.every(element => {
    position = string.indexOf(element)
    if(position !== -1){
      opt = string.charAt(position)
      return false
    }
    return true
  });
  for(let i = position-1; i>=0; i--){
    nums[0] !== undefined ? nums[0] = string.charAt(i)+nums[0] : nums[0] = string.charAt(i)
  }
  for(let i = position+1 ; i<string.length; i++){
    nums[1] !== undefined ? nums[1] = nums[1]+string.charAt(i) : nums[1] = string.charAt(i)
  }
  nums[0] = parseFloat(nums[0])
  nums[1] = parseFloat(nums[1])
  let result

  switch(opt){
    case "+":
      result = nums[0]+nums[1]
      break
    case "-":
      result = nums[0]-nums[1]
      break
    case "x":
      result = nums[0]*nums[1]
      break
    case "/":
      result = nums[0]/nums[1]
      break
    default :
      result = "Geçersiz İşlem"
  }
  document.getElementById("box").value = result
}

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="w-[350px] flex justify-around items-center">
        <input id="box" className='border-black border-[1px] h-[40px] w-[250px] p-1' placeholder='Write an operation...'>
        </input>
        <button className='w-[80px] h-[30px] bg-gradient-to-tr from-red-700 to-blue-700 rounded-2xl text-white text-sm' type='button' onClick={calculate}>Calculate</button>
        </form>        
    </div>
  );
}

export default App;
