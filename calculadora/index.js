let n1 = 0;
let n2 = 0;
let numero = "";
let sinal = 0;
let operacao = "";
let resultado = 0;
let resultadohtml;
let agora;


horaatual(); 
setInterval(horaatual, 100); 

function horaatual(){
    agora = new Date();

    document.getElementById("hora").innerHTML = format(agora.getHours(),agora.getMinutes());
}

function format(horas,minutos){
    if (horas   < 10) {horas   = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    return horas+':'+minutos;
}

function adicionarnumeros(numero) {
    resultadohtml = document.getElementById("result");
    resultado.innerHTML = "";

    console.log(numero);

    document.getElementById("apagar").innerHTML = "C";

    if(sinal == 0){
        console.log("numero:" + numero);
        n1 = parseFloat(numero);
        resultadohtml.value = n1;
    }else if(sinal > 0){
        console.log("numero:" + numero);
        n2 = parseFloat(numero);
        console.log("n2:" + n2);
        resultadohtml.value = n2;
    }
    else{
        return n1,n2;
    }
}

function calculo(){
    resultadohtml = document.getElementById("result");

    if(sinal > 0){
        if(sinal == 1){
            resultado = n1 / n2;
            operacao = "÷";
            console.log(resultado);
        }
        else if(sinal == 2){
            
            resultado = n1 * n2;
            operacao = "x";
            console.log(resultado);
        }
        else if(sinal == 3){
            resultado = n1 - n2;
            operacao = "-";
            console.log(resultado);
        }
        else if(sinal == 4){
            resultado = n1 + n2;
            operacao = "+";
            console.log(resultado);
        }
        else{}
        console.log(`Resultado: ${n1} ${operacao} ${n2} = ${resultado}`);
        n1 = resultado;
        resultadohtml.value = resultado;
    }
}

function porcentagem(){
    let porcento = 0;

    porcento = numero / 100
    
    console.log(porcento);
    
    adicionarnumeros(porcento.toString());
}

function apagar(){
    resultadohtml = document.getElementById("result");

    document.getElementById("apagar").innerHTML = "AC";

    numero = "";
    n1 = 0;
    n2 = 0;
    resultado = 0;
    resultadohtml.value = 0;
    console.log("apagado")
    sinal = "";

    document.getElementById("divisao").style.backgroundColor = "#ff9f0a";
    document.getElementById("divisao").style.color = "white";
    document.getElementById("multiplicacao").style.backgroundColor = "#ff9f0a";
    document.getElementById("multiplicacao").style.color = "white";
    document.getElementById("menos").style.backgroundColor = "#ff9f0a";
    document.getElementById("menos").style.color = "white";
    document.getElementById("mais").style.backgroundColor = "#ff9f0a";
    document.getElementById("mais").style.color = "white";

}

function adicionarsinal(addsinal) {
    sinal = addsinal;
    resultadohtml.value = 0;
    numero = 0;

    const cores = {
        1: {
            divisao: { backgroundColor: "white", color: "#ff9f0a" },
            multiplicacao: { backgroundColor: "#ff9f0a", color: "white" },
            menos: { backgroundColor: "#ff9f0a", color: "white" },
            mais: { backgroundColor: "#ff9f0a", color: "white" }
        },
        2: {
            divisao: { backgroundColor: "#ff9f0a", color: "white" },
            multiplicacao: { backgroundColor: "white", color: "#ff9f0a" },
            menos: { backgroundColor: "#ff9f0a", color: "white" },
            mais: { backgroundColor: "#ff9f0a", color: "white" }
        },
        3: {
            divisao: { backgroundColor: "#ff9f0a", color: "white" },
            multiplicacao: { backgroundColor: "#ff9f0a", color: "white" },
            menos: { backgroundColor: "white", color: "#ff9f0a" },
            mais: { backgroundColor: "#ff9f0a", color: "white" }
        },
        4: {
            divisao: { backgroundColor: "#ff9f0a", color: "white" },
            multiplicacao: { backgroundColor: "#ff9f0a", color: "white" },
            menos: { backgroundColor: "#ff9f0a", color: "white" },
            mais: { backgroundColor: "white", color: "#ff9f0a" }
        }
    };

    if (cores[addsinal]) {
        console.log(`Aplicando estilo ${addsinal}`);

        const elementos = ["divisao", "multiplicacao", "menos", "mais"];
        elementos.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                const { backgroundColor, color } = cores[addsinal][id];
                elemento.style.backgroundColor = backgroundColor;
                elemento.style.color = color;
            }
        });
    } else {
        console.error("Valor inválido para addsinal: " + addsinal);
    }
}

