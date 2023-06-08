//kazanma koşullarının sıralaması
const conditions = [

    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [1, 4, 7],
    [2, 5, 8]

];



//Hücrelerin içindeki datayı taşıyan değişken
const cells = document.querySelectorAll("td");

let botCell;
let gameMode;
let XWin = 0;
let OWin = 0;
document.getElementById("XCounter").innerHTML = XWin;
document.getElementById("OCounter").innerHTML = OWin;

let gameOver = false;
//Sırası olan oyuncunun işareti
let player = "X";

//Bu fonksiyon oyunun bitip bitmediğini kontrol eder
function checkWin() {

    for (let i = 0; i < 8; i++) {
        //koşulları döngüyle kontrol et
        const [c1, c2, c3] = conditions[i];
        //herhangi koşulu sağlayan 3 kutucuk aynı işaretli ise oyunu bitir
        if (cells[c1].innerHTML == player &&
            cells[c2].innerHTML == player &&
            cells[c3].innerHTML == player) {

            // TODO: HTML Elementleri, sayfanin en üstünde topla
            document.getElementById(c1).classList.add("connect");
            document.getElementById(c2).classList.add("connect");
            document.getElementById(c3).classList.add("connect");

            gameOver = true;
            return true;

            //hangi oyuncunun kazandığını belirt


        }
    }
    return false;


}

function drawCheck() {

    let empty = 0;

    for (let i = 0; i < 9; i++) {
        if (cells[i].innerHTML == "") {
            empty++
        }
    }
    if (empty == 0) {
        return true;
    }
    else {
        return false;
    }

    // return Array.from(cells).every(cell => cell.innerHTML != "");
}

/*function restartButton() {
    var r = document.createElement("INPUT");
    r.setAttribute("type", "button");
    r.setAttribute("id", "Restart");
    r.setAttribute("value", "Restart");
    document.body.appendChild(r);
    document.getElementById("Restart").addEventListener('click', restart);
}*/
function reset(){


    XWin=0;
    OWin=0;
    document.getElementById("OCounter").innerHTML = OWin;
    document.getElementById("XCounter").innerHTML = XWin;
    
    restart();
}

function restart() {

    //restart tuşunu silsin

    //kebab-case
    document.getElementById("Restart").style.visibility="hidden";
    document.getElementById("reset").style.visibility="hidden";

    //table'ı resetlesin
    //yeşil olan celleri normale döndürsün
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].className = "td";
    }

    // cells.forEach(cell => {
    //     cell.innerHTML = ""
    //     cell.className = "td"
    // }); 

    //TODO:
    // immutables / mutables 
    // getters-setters 

    gameOver = false;

    //oyun sonu promptunu yok etsin
    document.getElementById("prompt").innerHTML = "";

    //player sırasını X e çevirsin
    player = "X";

    firstStage();

    gameMode = "";

}
function onDraw() {

    document.getElementById("prompt").innerHTML = 'Game ended in a draw';

    //Restart tuşu
    document.getElementById("reset").style.visibility="visible";
    document.getElementById("Restart").style.visibility = "visible";
}

function onWin() {
    if (player == "X") {
        document.getElementById("prompt").innerHTML = 'Player X has won!'
        XWin++;
        document.getElementById("XCounter").innerHTML = XWin;
    }
    else {
        document.getElementById("prompt").innerHTML = 'Player O has won!'
        OWin++;
        document.getElementById("OCounter").innerHTML = OWin;
    }
    
    document.getElementById("reset").style.visibility="visible";
    document.getElementById("Restart").style.visibility = "visible";
}

// TODO: arastir - low coupled / high cohesion
// TODO: lexical scope
const updatePrompt = (message) => {
    document.getElementById("prompt").innerHTML = message;
}

//const updateScore = (player) => {}

function twoPlayer(){

    secondStage();
    gameMode = "twoPlayers"
}

function playerIsO() {

    secondStage();

    gameMode = "playerIsO";

    player = "X";
    botCell = Math.floor(Math.random() * 9);
    if (cells[botCell].innerHTML == "") {
        cells[botCell].innerHTML = player;
    }
    switchPlayer();
}

function playerIsX() {

    secondStage();

    gameMode = "playerIsX";


}

function switchPlayer() {
    player = player == 'X' ? 'O' : 'X'
}

function firstStage() {

    /*var s = document.createElement("INPUT");
    s.setAttribute("type", "button");
    s.setAttribute("id", "twoPlayers");
    s.setAttribute("value", "Two Players");
    document.body.appendChild(s);
    document.getElementById("twoPlayers").addEventListener("click", twoPlayer);

    var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("id", "playerX");
    x.setAttribute("value", "player: X");
    document.body.appendChild(x);
    document.getElementById("playerX").addEventListener("click", playerIsX);

    var o = document.createElement("INPUT");
    o.setAttribute("type", "button");
    o.setAttribute("id", "playerO");
    o.setAttribute("value", "player: O");
    document.body.appendChild(o);
    document.getElementById("playerO").addEventListener("click", playerIsO);*/

    cells.forEach(cell=>cell.style.visibility="hidden");
    document.getElementById("secondPanel").style.visibility = "hidden";
    document.getElementById("header1").style.visibility = "hidden";
    document.getElementById("header2").style.visibility = "hidden";
    document.getElementById("XCounter").style.visibility = "hidden";
    document.getElementById("OCounter").style.visibility = "hidden";
    document.getElementById("playerX").style.visibility="visible";
    document.getElementById("playerO").style.visibility="visible";
    document.getElementById("twoPlayers").style.visibility="visible";
    document.getElementById("firstPanel").style.visibility = "visible";

}

function secondStage() {
    document.getElementById("playerX").style.visibility="hidden";
    document.getElementById("playerO").style.visibility="hidden";
    document.getElementById("twoPlayers").style.visibility="hidden";
    document.getElementById("header1").style.visibility = "visible";
    document.getElementById("header2").style.visibility = "visible";
    document.getElementById("XCounter").style.visibility = "visible";
    document.getElementById("OCounter").style.visibility = "visible";
    cells.forEach(cell=>{
        cell.style.visibility = "visible";
    });
    document.getElementById("firstPanel").style.visibility = "hidden";
    document.getElementById("secondPanel").style.visibility = "visible";
}




//Tıklandığı zaman hücrenin içine gerekli işareti yazdıracak fonksiyon
function onCellClick() {

    if (gameOver || this.innerHTML != "") return;

    this.innerHTML = player;

    if (checkWin()) {
        onWin();

        //Restart tuşu
        return;
    }
    else if (drawCheck()) {// beraberlik 

        onDraw();
        return;

    }
    else {
        switchPlayer();
    }
    if (gameMode == "playerIsX" && gameOver == false) {


        // const emptyCells = Array.from(cells).filter(cell => cell.innerHTML == "")

        do {
            botCell = Math.floor(Math.random() * 9);
        } while (cells[botCell].innerHTML != "")
        cells[botCell].innerHTML = player;

        if (checkWin()) {
            onWin();
        }
        else if (drawCheck()) {
            onDraw();
        }
        else {
            switchPlayer();
        }

    }

    else if (gameMode == "playerIsO" && gameOver == false) {
        //Oyuncu O flowu

        do {
            botCell = Math.floor(Math.random() * 9);
        } while (cells[botCell].innerHTML != "")
        cells[botCell].innerHTML = player;

        if (checkWin()) {
            onWin();

        }
        else if (drawCheck()) {
            onDraw();
        }
        else {
            switchPlayer();
        }

    }

}

/* 

ÖDEVLER

1- Beraberlik fonksiyonu ekle
2- Oyun kazanmayla bittiginde, kazanan cell'leri farkli bi renk yap
3- Oyun yeniden oynanilabilir olmali, üstte skorlar yazmali. 
...

* - X/O secilebilir olucak, her zaman X önce baslicak. 
    Kullanici X sectiyse, O makina olucak.
    Makina, rastgele bos olan kutulara tiklama yapicak. 


*/



/* 

ÖDEVLER 2 ARAYÜZ: 

// ÖGRENILECEKLER 

NodeJS Yükle! 
Async- await / Javascript Promises 
Lexical Scope 
Immutables / Mutables
Getters / Setters
High Cohesion / Low Coupled
CSS Flexbox
WEB API / REST API, JAVASCRIPT AJAX 

Layout: Bir containerin icerisinde, bütün elementler, sayfanin ortasinda durmali (css flexbox)
1. Asamada, sadece oyun tipi ve X/O secim buttonlari görünücek. Bastiktan sonra, o div yok olucak
2. Asama oyun basladiginda, oyun alanini ve score-board göstericek.
3. Asama, oyun bittiginde  boardin altinda sadece restart buttonu olucak, board ve score görünecek.
4. Asama, reset butonu ekle, tiklanildigi zaman, 1. asamaya geri dönecek, score boardu sifirlayacak
*/


cells.forEach(cell => cell.addEventListener('click', onCellClick));
