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

function SelecionarSobremesa(elemento){
    const elementoBordaSobremesa = document.querySelector(".sobremesas .selecionado");

    if(elementoBordaSobremesa !== null){
        elementoBordaSobremesa.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    
    checkSelecao();
}
function checkSelecao(){
    const checkPratos = document.querySelector(".pratos,selecionado");
    const checkBebidas =document.querySelector(".bebidas,selecionado"); 
    const checkSobremesa = document.querySelector(".sobremesas,selecionado");

    if(checkPratos == true && checkBebidas == true && checkSobremesa == true){

    }
}
