var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();

let frase = "Faustão says: ";
const horaAtual = "São exatamente " + hora + " horas : " + minutos + " Minutos e : " + segundos + " segundos";
console.log(frase + "\n"+ horaAtual);