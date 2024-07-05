alert('Bem-vindo ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com um total de ${tentativas}`);
    } else {
        if (chute < numeroSecreto) {
            alert(`o número secreto é maior que ${chute}`);
        } else {
            alert(`o número secreto é menor que ${chute}`);
        }
        tentativas++
    };
} 
