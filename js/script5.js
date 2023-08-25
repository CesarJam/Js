function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}
function teclear(event) {
    let value= event.which;
    //document.getElementById("demo").innerHTML = value;
    
    if (value == 13) {
        document.getElementById("btn_igual").click();     
    }
    if (value == 46) {
        document.getElementById("btn_limpiar").click();     
    }
  }
  document.addEventListener("keyup", teclear);


