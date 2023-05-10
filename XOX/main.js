const Columns = 'I I I I' // Grid elements
const Rows = '_____'
let Empty= '.'

//Creating the grid
document.querySelector('#header1').innerHTML = Columns;

document.querySelector('#header2').innerHTML = Columns;

document.querySelector('#header3').innerHTML = Columns;

document.querySelector('#header4').innerHTML = Rows;
document.querySelector('#header5').innerHTML = Rows;
document.querySelector('#header6').innerHTML = Rows;
document.querySelector('#header7').innerHTML = Rows;
document.querySelector('#header8').innerHTML = Empty;
document.querySelector('#header9').innerHTML = Empty;
document.querySelector('#header10').innerHTML = Empty;
document.querySelector('#header11').innerHTML = Empty;
document.querySelector('#header12').innerHTML = Empty;
document.querySelector('#header13').innerHTML = Empty;
document.querySelector('#header14').innerHTML = Empty;
document.querySelector('#header15').innerHTML = Empty;
document.querySelector('#header16').innerHTML = Empty;

let player=0;

if(player=0){document.getElementByClass('Empty').addEventListener(click, function(){
    
    //print an x where a dot would be
    Empty='x';
    player++;

})}

else {document.getElementByClass('Empty').addEventListener(click, function(){
    
    //print an o where a dot would be
    Empty='o';
    player--;

})}

