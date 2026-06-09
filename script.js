window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 2000);

});

function gerarSeed(texto){

let hash = 0;

for(let i = 0; i < texto.length; i++){

hash = texto.charCodeAt(i) +
((hash << 5) - hash);

}

return Math.abs(hash);

}

function randomSeed(seed,min,max){

const x = Math.sin(seed) * 10000;
const numero = x - Math.floor(x);

return Math.floor(
numero * (max - min + 1)
) + min;

}

function detectarMarca(celular){

celular = celular.toLowerCase();

if(celular.includes("iphone"))
return "IPHONE";

if(
celular.includes("samsung") ||
celular.includes("galaxy")
)
return "SAMSUNG";

if(
celular.includes("xiaomi") ||
celular.includes("redmi") ||
celular.includes("poco")
)
return "XIAOMI";

if(
celular.includes("motorola") ||
celular.includes("moto") ||
celular.includes("edge")
)
return "MOTOROLA";

return "ANDROID";

}

function gerar(){

const celular =
document.getElementById("celular").value.trim();

if(!celular){

alert("Digite o modelo do celular");

return;

}

const nivel =
document.getElementById("nivel").value;

const dpiNivel =
document.getElementById("dpiNivel").value;

const marca =
detectarMarca(celular);

const seed =
gerarSeed(
celular +
nivel +
dpiNivel
);

let dpi;

if(dpiNivel === "alta"){
dpi = randomSeed(seed+1,650,900);
}

if(dpiNivel === "media"){
dpi = randomSeed(seed+1,500,650);
}

if(dpiNivel === "baixa"){
dpi = randomSeed(seed+1,300,500);
}

let geral;
let redDot;
let mira2x;
let mira4x;
let awm;

if(nivel === "alta"){

geral = randomSeed(seed+2,170,200);
redDot = randomSeed(seed+3,170,200);
mira2x = randomSeed(seed+4,150,190);
mira4x = randomSeed(seed+5,140,180);
awm = randomSeed(seed+6,90,140);

}

if(nivel === "media"){

geral = randomSeed(seed+2,130,170);
redDot = randomSeed(seed+3,130,170);
mira2x = randomSeed(seed+4,120,160);
mira4x = randomSeed(seed+5,110,150);
awm = randomSeed(seed+6,70,120);

}

if(nivel === "baixa"){

geral = randomSeed(seed+2,90,130);
redDot = randomSeed(seed+3,90,130);
mira2x = randomSeed(seed+4,80,120);
mira4x = randomSeed(seed+5,70,110);
awm = randomSeed(seed+6,50,90);

}

const botao =
randomSeed(seed+7,45,55);

const olhadinha = 200;

let perfil;

if(geral >= 180){
perfil = "🔥 RUSH";
}else if(geral >= 130){
perfil = "⚡ EQUILIBRADO";
}else{
perfil = "🎯 PRECISÃO";
}

document.getElementById("resultado").style.display =
"block";

document.getElementById("rCelular").innerText = celular;
document.getElementById("rMarca").innerText = marca;
document.getElementById("rDpi").innerText = dpi;
document.getElementById("rGeral").innerText = geral;
document.getElementById("rRedDot").innerText = redDot;
document.getElementById("r2x").innerText = mira2x;
document.getElementById("r4x").innerText = mira4x;
document.getElementById("rAwm").innerText = awm;
document.getElementById("rOlhadinha").innerText = olhadinha;
document.getElementById("rBotao").innerText = botao + "%";
document.getElementById("rPerfil").innerText = perfil;

}

function copiarResultado(){

const texto = `
WS STORE PREMIUM

Celular: ${rCelular.innerText}
Marca: ${rMarca.innerText}
DPI: ${rDpi.innerText}
Geral: ${rGeral.innerText}
Red Dot: ${rRedDot.innerText}
Mira 2x: ${r2x.innerText}
Mira 4x: ${r4x.innerText}
AWM: ${rAwm.innerText}
Olhadinha: ${rOlhadinha.innerText}
Botão: ${rBotao.innerText}
Perfil: ${rPerfil.innerText}
`;

navigator.clipboard.writeText(texto);

alert("Configuração copiada!");

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

}
