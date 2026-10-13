
/*
17. O que será impresso no console com base nos valores lógicos?
*/
let usuarioLogado = true;
let temPermissao = false;

if (usuarioLogado && temPermissao) {
    console.log("Acesso Total");
} else if (usuarioLogado || temPermissao) {
    console.log("Acesso Limitado");
} else {
    console.log("Negado");
}
/*
A) Acesso Total
B) Acesso Limitado
C) Negado
D) O código não imprime nada.
*/

console.log("Resposta correta: B) Acesso Limitado");