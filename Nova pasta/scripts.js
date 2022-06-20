var intervalo;
function ex6(){
    var text = document.getElementById("text");
    text.style.color = "orange";
    text.style.fontFamily = "arial";
    text.style.fontSize = "50";
}

function ex7(){
    var n1 = Number(window.prompt("Informe um número"));
    var n2 = Number(window.prompt("Informe outro número"));

    var adc = n1 + n2;
    var sub;
    if(n1>n2){
        sub = n1-n2;
    } else {
        sub = n2-n1;
    }
    var div = n1 / n2;
    var mult = n1*n2;

    window.alert(`Adição = ${adc}, Subtração = ${sub}, Divisão = ${div}, Multiplicação = ${mult} `);
    
}

function ex8(){
    var imagem = document.getElementById("img");
    if(imagem.src = "/_imgs/desligada.jpeg"){
        imagem.src = "/_imgs/ligada.jpeg";
    }
}

function ex81(){
    var imagem = document.getElementById("img");
    if(imagem.src = "/_imgs/ligada.jpeg"){
        imagem.src = "/_imgs/desligada.jpeg";
    }
}

function ex82(){
    var imagem = document.getElementById("img");
    if(imagem.src = "/_imgs/ligada.jpeg"){
        imagem.src = "/_imgs/quebrada.jpeg";
    }
}

var atual = "vermelho";
//var imagem = document.getElementById("imagem");

function ex9(){

    if(atual == "vermelho"){
        document.getElementById("imagem").src = "/_imgs/amarelo.png";
        atual = "amarelo";
    }

    else if(atual == "amarelo"){
        document.getElementById("imagem").src = "/_imgs/verde.png";
        atual = "verde";
    }

    else if(atual == "verde"){
        document.getElementById("imagem").src = "/_imgs/vermelho.png";
        atual = "vermelho";
    }

    inicio = "desligado";
    function ex10(){

        if(inicio == "desligado"){
            document.getElementById("imagem").src = "/_imgs/vermelho.png";
            atual = "vermelho";
            inicio = "ligado";
        }

        if(atual == "vermelho"){
            document.getElementById("imagem").src = "/_imgs/amarelo.png";
            atual = "amarelo";
        }

        trocar_cor();
    
        if(atual == "amarelo"){
            document.getElementById("imagem").src = "/_imgs/verde.png";
            atual = "verde";
        }

        trocar_cor();
    
        if(atual == "verde"){
            document.getElementById("imagem").src = "/_imgs/vermelho.png";
            atual = "vermelho";
        }
    }
}
