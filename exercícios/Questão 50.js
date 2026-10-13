/*
50. Qual será o resultado exibido após a execução deste bloco
que combina um laço e um operador ternário?
*/
let pontos = 10;

for (let i = 0; i < 5; i++) {
    pontos--;
}

let mensagem = (pontos === 5) ? "Nível Médio" : "Nível Alto";

console.log(mensagem);
/*
A) Nível Alto
B) 5
C) Nível Médio
D) 10
*/

console.log("Resposta correta: C) Nível Médio");