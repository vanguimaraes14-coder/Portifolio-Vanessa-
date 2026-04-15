// EFEITO DIGITANDO
const texto = "Desenvolvedora Front-End";
let index = 0;

function escrever(){
  if(index < texto.length){
    document.querySelector(".digitando").innerHTML += texto.charAt(index);
    index++;
    setTimeout(escrever, 100);
  }
}

escrever();


// PROJETOS DINÂMICOS
const projetos = [

{
nome: "Site de Carros",
descricao: "Projeto de site de vendas de carros com layout moderno.",
link: "#"
},

{
nome: "Portfólio Pessoal",
descricao: "Meu portfólio profissional com HTML, CSS e JavaScript.",
link: "#"
},

{
nome: "Projeto Cultural",
descricao: "Projeto Raízes do Sertão com foco cultural.",
link: "#"
}

]

const container = document.getElementById("lista-projetos")

projetos.forEach(projeto => {

const div = document.createElement("div")
div.classList.add("projeto")

div.innerHTML = `
<h3>${projeto.nome}</h3>
<p>${projeto.descricao}</p>
<a href="${projeto.link}" target="_blank">Ver Projeto</a>
`

container.appendChild(div)

})