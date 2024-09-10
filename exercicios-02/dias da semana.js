// Pedir ao usuário o dia da semana
let diaDaSemana = prompt("Qual é o dia da semana?");

// Converter a resposta para maiúsculas para garantir que a comparação não seja sensível a maiúsculas/minúsculas
diaDaSemana = diaDaSemana.trim().toUpperCase();

// Verificar a resposta e mostrar a mensagem apropriada
if (diaDaSemana == "SABADO" || diaDaSemana == "DOMINGO") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}


