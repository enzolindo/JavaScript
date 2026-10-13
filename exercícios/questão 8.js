/*
8. Analise o código RPG e determine a saída final.
*/
let vidaHeri = 10;
let pocao = true;

for (let ataque = 1; ataque <= 3; ataque++) {
    vidaHeri -= 4;
}

let status = (vidaHeri > 0) ? "Vivo" : (pocao)
    ? "Ressuscitado" : "Game Over";

console.log(status);
/*
A) Vivo
B) Ressuscitado
C) Game Over
D) Erro de sintaxe
*/

console.log("Resposta correta: B) Ressuscitado");