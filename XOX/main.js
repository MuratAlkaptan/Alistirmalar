//kazanma koşullarının sıralaması
const conditions = [

    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8]

];

//Hücrelerin içindeki datayı taşıyan değişken
const cells = document.querySelectorAll("td");

//Sırası olan oyuncunun işareti
let player = 'X';

//Bu fonksiyon oyunun bitip bitmediğini kontrol eder
function winCondition(player, conditions){

    for(let i=0; i<=conditions; i++){

        //koşulları döngüyle kontrol et
        const [c1, c2, c3] = conditions[i];

        //herhangi koşulu sağlayan 3 kutucuk aynı işaretli ise oyunu bitir
        if(cells[c1] === player && 
            cells[c2] === player &&
            cells[c3] === player){

                //hangi oyuncunun kazandığını belirt
                if(player === 'X'){
                    document.getElementById("prompt").innerHTML = 'Player X has won!'
                }
                else{
                    document.getElementById("prompt").innerHTML = 'Player O has won!'  
                }

        }

    }


}

//Tıklandığı zaman hücrenin içine gerekli işareti yazdıracak fonksiyon
function onCellClick(player){

    //td'ye data olarak player işaretini yazdır
    document.getElementById("0").append(player);//player değişkenini yazdıramıyorum ama string yazdırıyor?
}

//Oyuncu üzerine tıkladığı zaman gerekli fonksiyonları çalıştır
document.getElementById("0").addEventListener('click', function(player){//0 kullanmak yerine bütün hücreleri kontrol edecek bir yol?
   
    
    onCellClick(player);
    winCondition(player, conditions);
    
    
    //Oyuncu tıkladıktan sonra sırayı değiştir
    if(player === 'X'){
        player = 'O';
    }
    else{
        player = 'X';
    }

});
