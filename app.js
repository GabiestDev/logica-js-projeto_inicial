alert('Bem-vindo ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        tentativas++
    };
}

let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa'
alert(`Você descobriu o número secreto ${numeroSecreto} com um total de ${tentativas} ${palavraTentativa}`);