/*Crie uma função que leia 3 valores e caucule a media desses valores.
entradas = 3 valores (ler valores)
processamento = função que caucula a media
saida = o resultado da função
*/

function MediaDosV(v1,v2,v3){
    let soma =(v1 + v2 + v3)
     soma=soma/3
    return soma
}
let a= parseFloat(prompt("Digite um valor"))
let b= parseFloat(prompt("Digite um valor"))
let c= parseFloat(prompt("Digite um valor"))

console.log("a media dos valores :")

console.log(MediaDosV(a,b,c)) 


