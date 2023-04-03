let nomePrato = "";
let precoPrato = "";
let nomeBebida = "";
let precoBebida = "";
let nomeSobremesa = "";
let precoSobremesa = "";
let soma = 0;
let zapZap = "";
function SelecionarPrato1(elemento){
    const elementoBordaPrato = document.querySelector(".pratos .selecionado");
    const iconeAtual = document.querySelector(".pratos .selecionado .on ")
    const icone = document.querySelector(".icone1")
    if (elementoBordaPrato !== null){
        elementoBordaPrato.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarPrato2(elemento){
    const elementoBordaPrato = document.querySelector(".pratos .selecionado");
    const iconeAtual = document.querySelector(".pratos .selecionado .on ")
    const icone = document.querySelector(".icone2")
    if (elementoBordaPrato !== null){
        elementoBordaPrato.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}

function SelecionarPrato3(elemento){
    const elementoBordaPrato = document.querySelector(".pratos .selecionado");
    const iconeAtual = document.querySelector(".pratos .selecionado .on ")
    const icone = document.querySelector(".icone3")
    if (elementoBordaPrato !== null){
        elementoBordaPrato.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}

function SelecionarBebida1(elemento){
    const elementoBordaBebida = document.querySelector(".bebidas .selecionado");
    const iconeAtual = document.querySelector(".bebidas .selecionado .on ")
    const icone = document.querySelector(".icone4")
    if (elementoBordaBebida !== null){
        elementoBordaBebida.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarBebida2(elemento){
    const elementoBordaBebida = document.querySelector(".bebidas .selecionado");
    const iconeAtual = document.querySelector(".bebidas .selecionado .on ")
    const icone = document.querySelector(".icone5")
    if (elementoBordaBebida !== null){
        elementoBordaBebida.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarBebida3(elemento){
    const elementoBordaBebida = document.querySelector(".bebidas .selecionado");
    const iconeAtual = document.querySelector(".bebidas .selecionado .on ")
    const icone = document.querySelector(".icone6")
    if (elementoBordaBebida !== null){
        elementoBordaBebida.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarSobremesa1(elemento){
    const elementoBordaSobremesa = document.querySelector(".sobremesas .selecionado");
    const iconeAtual = document.querySelector(".sobremesas .selecionado .on ")
    const icone = document.querySelector(".icone7")
    if (elementoBordaSobremesa !== null){
        elementoBordaSobremesa.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarSobremesa2(elemento){
    const elementoBordaSobremesa = document.querySelector(".sobremesas .selecionado");
    const iconeAtual = document.querySelector(".sobremesas .selecionado .on ")
    const icone = document.querySelector(".icone8")
    if (elementoBordaSobremesa !== null){
        elementoBordaSobremesa.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function SelecionarSobremesa3(elemento){
    const elementoBordaSobremesa = document.querySelector(".sobremesas .selecionado");
    const iconeAtual = document.querySelector(".sobremesas .selecionado .on ")
    const icone = document.querySelector(".icone9")
    if (elementoBordaSobremesa !== null){
        elementoBordaSobremesa.classList.remove("selecionado");
        iconeAtual.classList.remove("on");
    }
    elemento.classList.add("selecionado");
    icone.classList.add("on");
    checkSelecao();
}
function checkSelecao(){
    const checkPratos = document.querySelector(".pratos .selecionado");
    const checkBebidas = document.querySelector(".bebidas .selecionado"); 
    const checkSobremesa = document.querySelector(".sobremesas .selecionado");
    const footerTexto = document.querySelector(".fecharPedido")
    if(checkPratos !== null && checkBebidas !== null && checkSobremesa !== null){
        document.querySelector(".footer").disabled = false;
        footerTexto.innerHTML = "Fechar Pedido";
        footerTexto.classList.add("fecharPedidoNovo");
    }
}
function arrumarNumeros(string){
    var numeroString = string.substring(2);
    numeroString = numeroString.replace(",", ".");
    numeroString = parseFloat(numeroString);
    numeroString = numeroString.toFixed(2);
    return numeroString;
}
function fecharPedido(){
    nomePrato = document.querySelector(".pratos .selecionado .descricaoPrato").innerText;
    precoPrato = document.querySelector(".pratos .selecionado .precoPrato").innerText;
    precoPrato = arrumarNumeros(precoPrato);
    console.log(precoPrato);

    nomeBebida = document.querySelector(".bebidas .selecionado .descricaoBebida").innerText;
    precoBebida = document.querySelector(".bebidas .selecionado .precoBebida").innerText;
    precoBebida = arrumarNumeros(precoBebida);
    console.log(precoBebida);

    nomeSobremesa = document.querySelector(".sobremesas .selecionado .descricaoSobremesa").innerText;
    precoSobremesa = document.querySelector(".sobremesas .selecionado .precoSobremesa").innerText;
    precoSobremesa = arrumarNumeros(precoSobremesa);
    console.log(precoSobremesa);

    soma = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);
    soma = soma.toFixed(2);
    console.log(soma);

    zapZap = "https://wa.me/5514991965291?text=" + encodeURIComponent(
        `Olá, gostaria de fazer o pedido:\n Prato: ${nomePrato}\nBebida: ${nomeBebida}\nSobremesa: ${nomeSobremesa}\nTotal: R$ ${soma}`
    );
    console.log(zapZap);
    window.open(zapZap);
}
