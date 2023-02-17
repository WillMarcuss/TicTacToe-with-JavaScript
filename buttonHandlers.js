let XorO = false;
function handleButtons(elementID){
    return function() {
        if(XorO == false){
            document.getElementById(elementID).textContent = 'X'
        } else{
            document.getElementById(elementID).textContent = 'O'
        }
        XorO = !XorO
        document.getElementById(elementID).disabled = true
        setTimeout(checkWin, 100)
    }
}

function handleReset(){
    let buttons = ["top-left","top-middle","top-right","middle-left","middle","middle-right","bottom-left","bottom-middle","bottom-right"]
    for(let i = 0; i < buttons.length; i++){
        document.getElementById(buttons[i]).disabled = false
        document.getElementById(buttons[i]).innerHTML = ""
        XorO = false
        counter = 0
    }
}

function disableButtons(){
    document.getElementById("top-left").disabled = true
    document.getElementById("top-middle").disabled = true
    document.getElementById("top-right").disabled = true
    document.getElementById("middle-left").disabled = true
    document.getElementById("middle").disabled = true
    document.getElementById("middle-right").disabled = true
    document.getElementById("bottom-left").disabled = true
    document.getElementById("bottom-middle").disabled = true
    document.getElementById("bottom-right").disabled = true
}