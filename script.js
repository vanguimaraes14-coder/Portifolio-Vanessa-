// efeito digitando

const texto = [
"Desenvolvedora Front-End",
"Estudante de Sistemas para Internet",
];

let contador = 0;
let letra = 0;

function digitar(){

if(letra < texto[contador].length){

document.querySelector(".digitando").innerHTML += texto[contador].charAt(letra);

letra++;

setTimeout(digitar,80);

}else{

setTimeout(apagar,2000);

}

}

function apagar(){

if(letra > 0){

document.querySelector(".digitando").innerHTML = texto[contador].substring(0,letra-1);

letra--;

setTimeout(apagar,50);

}else{

contador++;

if(contador >= texto.length){
contador = 0;
}

setTimeout(digitar,500);

}

}

digitar();


// projetos dinâmicos

const projetos = [


{
nome:"Portfólio Profissional",
descricao:"Meu portfólio como desenvolvedora web."
}
];

const container = document.getElementById("projetos-container");

projetos.forEach(p=>{

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML=`

<h3>${p.nome}</h3>
<p>${p.descricao}</p>

`;

container.appendChild(card);

});