let counter = 0;
let Xscore = 0;
let Oscore = 0;
let ties = 0;
function checkWin(){
    counter++
    let winXCombos = [[document.getElementById("top-left").innerHTML === 'X', document.getElementById("top-middle").innerHTML === 'X', document.getElementById("top-right").innerHTML === 'X'], 
    [document.getElementById("middle-left").innerHTML === 'X',document.getElementById("middle").innerHTML === 'X',document.getElementById("middle-right").innerHTML === 'X'],
    [document.getElementById("bottom-left").innerHTML === 'X', document.getElementById("bottom-middle").innerHTML === 'X', document.getElementById("bottom-right").innerHTML === 'X']];

    let winOCombos = [[document.getElementById("top-left").innerHTML === 'O', document.getElementById("top-middle").innerHTML === 'O', document.getElementById("top-right").innerHTML === 'O'], 
    [document.getElementById("middle-left").innerHTML === 'O',document.getElementById("middle").innerHTML === 'O',document.getElementById("middle-right").innerHTML === 'O'],
    [document.getElementById("bottom-left").innerHTML === 'O', document.getElementById("bottom-middle").innerHTML === 'O', document.getElementById("bottom-right").innerHTML === 'O']];
    
    if((winXCombos[0][0] && winXCombos[0][1] && winXCombos[0][2]) || (winXCombos[1][0] && winXCombos[1][1] && winXCombos[1][2]) || (winXCombos[2][0] && winXCombos[2][1] && winXCombos[2][2]) ||
        (winXCombos[0][0] && winXCombos[1][0] && winXCombos[2][0]) || (winXCombos[0][1] && winXCombos[1][1] && winXCombos[2][1]) || (winXCombos[0][2] && winXCombos[1][2] && winXCombos[2][2]) ||
        (winXCombos[0][0] && winXCombos[1][1] && winXCombos[2][2]) || (winXCombos[0][2] && winXCombos[1][1] && winXCombos[2][0])){
       alert("X WINS!")
       counter = 0
       Xscore++
       document.getElementById("x-score").innerHTML = ""+Xscore
       disableButtons()
    } else if((winOCombos[0][0] && winOCombos[0][1] && winOCombos[0][2]) || (winOCombos[1][0] && winOCombos[1][1] && winOCombos[1][2]) || (winOCombos[2][0] && winOCombos[2][1] && winOCombos[2][2]) ||
    (winOCombos[0][0] && winOCombos[1][0] && winOCombos[2][0]) || (winOCombos[0][1] && winOCombos[1][1] && winOCombos[2][1]) || (winOCombos[0][2] && winOCombos[1][2] && winOCombos[2][2]) ||
    (winOCombos[0][0] && winOCombos[1][1] && winOCombos[2][2]) || (winOCombos[0][2] && winOCombos[1][1] && winOCombos[2][0])){
        alert("O WINS!")
        counter = 0
        Oscore++
        document.getElementById("o-score").innerHTML = ""+Oscore
        disableButtons()
    } else if(counter == 9){
        alert("IT IS A TIE!")
        ties++
        document.getElementById("tie").innerHTML = ""+ties
    }
}

function setScore(){

}