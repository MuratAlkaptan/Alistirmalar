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

let XWin = 0;
let OWin = 0;
document.getElementById("XCounter").innerHTML =XWin;
document.getElementById("OCounter").innerHTML =OWin;

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

            document.getElementById(c1).className = "connect";
            document.getElementById(c2).className = "connect";
            document.getElementById(c3).className = "connect";

            gameOver = true;
            return true;

            // //hangi oyuncunun kazandığını belirt


        }
    }
    return false;


}

function onWin() {
    if (player == "X") {
        document.getElementById("prompt").innerHTML = 'Player X has won!'
        XWin++;
    }
    else {
        document.getElementById("prompt").innerHTML = 'Player O has won!'
        OWin++;
    }
    document.getElementById("XCounter").innerHTML =XWin;
    document.getElementById("OCounter").innerHTML =OWin;


}

function restart() {
    

    //table'ı resetlesin
    //yeşil olan celleri normale döndürsün
    for(let i =0; i<9; i++){
    cells[i].innerHTML= "";
    cells[i].className = "td";
    }

    //oyun sonu promptunu yok etsin
    document.getElementById("prompt").innerHTML = "";
    
    //player sırasını X e çevirsin
    player = "X";
    
}


function switchPlayer() {
    player = player == 'X' ? 'O' : 'X'
}

//Tıklandığı zaman hücrenin içine gerekli işareti yazdıracak fonksiyon
function onCellClick() {

    if (gameOver || this.innerHTML != "") return;
    this.innerHTML = player;

    if (checkWin()) {
        onWin() 
        //yeniden başlatma tuşu ekle
        var x = document.createElement("INPUT");
        x.setAttribute("type", "button");
        x.setAttribute("id", "Restart");
        x.setAttribute("value", "Restart");
        document.body.appendChild(x);
        document.getElementById("Restart").addEventListener('click', restart);

    } 
    else if (cells[0].innerHTML!="" && cells[1].innerHTML!="" && cells[2].innerHTML!="" && cells[3].innerHTML!="" && cells[4].innerHTML!="" && cells[5].innerHTML!="" && cells[6].innerHTML!="" && cells[7].innerHTML!="" && cells[8].innerHTML!="" && checkWin()==false) {// beraberlik 

        document.getElementById("prompt").innerHTML = 'Game ended in a draw';
        //yeniden başlatma tuşu ekle
        var x = document.createElement("INPUT");
        x.setAttribute("type", "button");
        x.setAttribute("id", "Restart");
        x.setAttribute("value", "Restart");
        document.body.appendChild(x);
        document.getElementById("Restart").addEventListener('click', restart);

    }
    else {
        switchPlayer();
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


cells.forEach(cell => cell.addEventListener('click', onCellClick)); 