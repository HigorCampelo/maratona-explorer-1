const respostaElement = document.querySelector("#resposta")
const perguntaElement = document.querySelector("#inputPergunta")
const btnPerguntarElement = document.querySelector("#btnPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const totalRespostas = respostas.length;
const numeroAleatoria = Math.floor(Math.random() * totalRespostas);


function fazerPergunta() {
  if (perguntaElement.value == "") {
    alert("Digite sua pergunta");
    return;
  }
  btnPerguntarElement.setAttribute("disabled", true);
  const pergunta = "<div>" + perguntaElement.value + "</div>"
  const totalRespostas = respostas.length;
  const numeroAleatoria = Math.floor(Math.random() * totalRespostas);

  //console.log(respostas[numeroAleatoria]);
  respostaElement.innerHTML = pergunta + respostas[numeroAleatoria];
  respostaElement.style.opacity = 1;

  setTimeout(function () {
    respostaElement.style.opacity = 0;
    btnPerguntarElement.removeAttribute("disabled");
  }, 3000)
}