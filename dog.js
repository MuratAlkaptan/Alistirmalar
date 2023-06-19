const images = document.querySelectorAll("img");

let response = [];

let breed = "affenpinscher";

document.getElementById("breed-selector").onchange = function () {

    const breedButton = document.getElementById("breed-selector");
    breed = breedButton.options[breedButton.selectedIndex].value;
    breed = breed.replace("-", "/");
}

async function fetchDog() {

    const fetchButton = document.getElementById("fetch-btn");

    fetchButton.classList.add("btn-loading");
    //Tür ismini http request olarak gönder

    /*fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        
        .then(response => response.json())
        
        //resmin linkini sayfaya ekle
        .then(data => {
            image.src = data.message;
            
            //buttonu normale döndürmek için data.status main thread e döndürülebilir ya da :
            fetchButton.classList.toggle("btn-loading");
        })*/
    for(let i=0; i<images.length; i++){
    response[i] = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
}
    
Promise.all(response)
    
    .then(responses => {for(let i=0; i<responses.length; i++){
        images[i].src = responses[i].data.message;
    }})
    .then(fetchButton.classList.toggle("btn-loading"));    

    
   
}

document.getElementById("fetch-btn").addEventListener('click', fetchDog);