const slideDiv = document.getElementById("imageDiv");
let slideBtn = document.getElementById("slider");

function imgSlider(){
    {
        if(slideBtn.textContent == "SIGN UP"){
            if(slideDiv.className=="rightSlide"){
                slideDiv.classList.toggle("rightSlide")
            }
            slideDiv.classList.toggle("leftSlide")
            slideBtn.textContent = "SIGN IN"
            
        }
        else if(slideBtn.textContent == "SIGN IN"){
            if(slideDiv.className=="leftSlide"){
                slideDiv.classList.toggle("leftSlide")
            }
            slideDiv.classList.toggle("rightSlide")
            slideBtn.textContent = "SIGN UP"
        }
    }
}
slideBtn.addEventListener('click', imgSlider);