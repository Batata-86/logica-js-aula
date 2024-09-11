alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute
console.log(chute);
let tentativas = 1 
//enquanto chute não for igual a numero secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
            //se chute for igual a número secreto
        if (chute == numeroSecreto) {
            break;
            }else{
                if (chute > numeroSecreto){
                    alert (`o numero secreto é menor que ${chute}`);
                }else {
                    alert(`o numero secreto é maior que ${chute}`);
                }
                    //tentativas = tentativas + 1;
                    tentativas++
                 }
}

if(tentativas = 1) {
   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);

}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
}

