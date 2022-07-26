function contar(){
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let resultado = document.getElementById('resultado');

    inicio = Number.parseInt(inicio);
    fim = Number.parseInt(fim);
    passo = Number.parseInt(passo);

    if(inicio == 0 || fim == 0 || passo == 0){
        alert('[ERRO] Insira os valores para fazer a contagem!');
    }

    else{
        resultado.innerHTML = "Contado: ";
    } 
    if(inicio < fim){
    for(let contador = 0; contador <= fim; contador+=passo){
            resultado.innerHTML += `${contador} 😀`
    }
    resultado.innerHTML += "🚩"
}
    else{
        for(let contador = inicio; contador >= fim; contador-=passo){
            resultado.innerHTML += `${contador} 😀`
        }
    }
}