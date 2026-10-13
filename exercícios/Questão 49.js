/*
49. Analise o comportamento da variável texto neste laço.
O que será impresso ao final?
*/
let texto = "";

for (let i = 1; i <= 3; i++) {
    texto += i;
}

console.log(texto);
/*
A) 6 (Soma numérica)
B) "123" (Concatenação de números como texto)
C) "1 2 3" (Números com espaços)
D) Erro, pois não se pode somar números a uma string.
*/

console.log('Resposta correta: B) "123"');