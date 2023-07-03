const slideDiv = document.getElementById("imageDiv");
const container = document.getElementById("boxContainer");
const slideBtn = document.getElementById("slider");

const starter = () => {
    container.classList.toggle("divStart")
    slideDiv.classList.toggle("imageStart")
}

const opening = () => {
    container.classList.remove("divStart")
    slideDiv.classList.remove("imageStart")

    container.classList.toggle("divOpen")
    slideDiv.classList.toggle("imageOpen")
}

const upSwitch = () => {
    container.classList.remove("divOpen")
    slideDiv.classList.remove("imageOpen")

    container.classList.toggle("divClose")
    slideDiv.classList.toggle("imageClose")
}
const leanRight = () => {
    slideDiv.classList.toggle("marginRight")
}

starter()

setTimeout(opening, 200)

document.getElementById("passwordText").addEventListener("click", () => {
    window.open('_blank');
})

function imgSlider(){
    {

        upSwitch()
        if(slideBtn.textContent == "SIGN UP"){
            setTimeout(opening, 1000)
            
            setTimeout(leanRight, 1000)
            slideBtn.textContent = "SIGN IN"
        }
        else if(slideBtn.textContent == "SIGN IN"){
            setTimeout(opening, 1000)

            setTimeout(leanRight, 1000)
            slideBtn.textContent = "SIGN UP"
        }
        setTimeout(upSwitch, 2000)
    }
}
slideBtn.addEventListener('click', imgSlider);