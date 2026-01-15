const numero_vezes = document.getElementById("sides-input")
const rolar_btn = document.getElementById("roll-button")
const resultado_div = document.getElementById("result")
const resultado_texto = document.getElementById("p-resultado")
const resetar_div = document.getElementById("resetar")
const imagens = [
    'img/dado.png',
    'img/dado2.png',
    'img/dado3.png',
    'img/dado4.png',
    'img/dado5.png',
    'img/dado6.png']

    
function rolarDado(){
    const vezes = Number(numero_vezes.value);
    if (isNaN(vezes) || vezes <= 0) {
        resultado_texto.textContent = "Por favor, insira um valor válido!";
        return;
    }
    resultado_texto.textContent = "Rolando os dados..."
    let resultados = [];
    resultado_div.innerHTML = '';
    resetar_div.innerHTML = ''
    for (let i = 0; i < vezes; i++) {
        const resultado = Math.floor(Math.random() * 6) + 1;
        resultados.push(resultado);

        const img = document.createElement('img');
        img.src = imagens[resultado - 1];
        resultado_div.appendChild(img);
    }

    if (vezes > 50) {
        resultado_texto.textContent = `Sorteio concluído! Você rolou ${vezes} dados.`;
    } else {
        resultado_texto.textContent = `Você rolou ${vezes} ${vezes === 1 ? 'vez' : 'vezes'} e conseguiu: ${resultados.join(', ')}`;
    }
    const resetar = document.createElement('button');
    resetar.id = "btn-resetar"
    resetar.textContent = "Limpar a mesa"
    resetar.onclick = function(){
        resultado_texto.innerHTML = ''
        resultado_div.innerHTML = ''
        resetar_div.innerHTML = ''
        numero_vezes.innerHTML = ''
        resetar.remove
    }
    resetar_div.appendChild(resetar);

}