
function primera() {
    document.write('FUNCION 1');
}

function segunda() {
    console.log('segunda funcion');
    document.write('LLAMANDO A LA FUNCION 1 DESDE LA FUNCION 2');
}

var valorVisor = 0;
var numeroA;
var numeroB;
var operacao;
var agora = new Date;


function botao(dado) {
    var auxiliar = document.getElementById("visor").value; // auxiliar recebe o valor pressionado no visor
    document.getElementById("visor").value = auxiliar + dado; // visor recebe o valor de auxiliar e concatena com dado


    valorVisor = document.getElementById("visor").value = auxiliar + dado;
    //document.getElementById("historico").innerHTML = agora.getHours();
    
    // mostrar a saudação acima do visor
    var hora = agora.getHours();
    
    if(hora >= 0 && hora <= 12){
      document.getElementById("historico").textContent = "Bom dia";
    }
    if(hora >= 13 && hora <= 17){
      document.getElementById("historico").textContent = "Boa tarde";
    }
    if(hora >= 18 && hora <= 23){
      document.getElementById("historico").textContent = "Boa noite";
    }
}


function btn_soma(caracter){
    numeroA = valorVisor;
    operacao = "+";
   // alert(caracter);
    limpar();
    //document.getElementById("historico").innerHTML += operacao;
}

function btn_subtrai(caracter){
  numeroA = valorVisor;
  operacao = "-";
  
  limpar();
}

function btn_multiplica(caracter){
  numeroA = valorVisor;
  operacao = "*";
  
  limpar();
}

function btn_divide(caracter){
  numeroA = valorVisor;
  operacao = "/";
  
  limpar();
}

function reset() {
    // limpar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacao = "";
}
function limpar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    // faz o calculo, pega o resultado e colocar no visor
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);

    var total = 0;
    var ultimoTotal = 0;
      switch(operacao){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}
function myFunction(event) {
    let value= event.which;
    document.getElementById("demo").innerHTML = value;
    //7    8    9
    if (value == 55) {
        document.getElementById("botao7").click();     
        limpar();
    }
    if (value == 56) {
        document.getElementById("botao8").click();     
        limpar();
    }
    if (value == 57) {
        document.getElementById("botao9").click();     
        limpar();
    }
    ////4     5    6
    if (value == 52) {
        document.getElementById("botao4").click();     
        limpar();
    }
    if (value == 53) {
        document.getElementById("botao5").click();     
        limpar();
    }
    if (value == 54) {
        document.getElementById("botao6").click();     
        limpar();
    }
    ////1     2    3
    if (value == 49) {
        document.getElementById("botao1").click();     
        limpar();
    }
    if (value == 50) {
        document.getElementById("botao2").click();     
        limpar();
    }
    if (value == 51) {
        document.getElementById("botao3").click();     
        limpar();
    }



    //suma
    if (value == 43) {
        document.getElementById("soma").click();
        limpar(); 
    }
    //dividir
    if (value == 47) {
        document.getElementById("botao/").click();     
        limpar();
    }
  }


