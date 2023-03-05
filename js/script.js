function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaDiv(agente) {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let imagem = document.createElement("img");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let classes = document.createElement("img");

  classes.src = agente.role.displayIcon;
  h1.innerHTML = agente.displayName;
  imagem.src = agente.bustPortrait;
  p.innerHTML = agente.role.displayName;

  li.appendChild(div);
  div.appendChild(h1);
  div.appendChild(imagem);
  div.appendChild(p);
  div.appendChild(classes);

  div.classList.add("divcard");
  classes.classList.add("classes");
  li.classList.add("card");
  p.classList.add("texto");
  li.classList.add("itens");
  h1.classList.add("titulo");
  imagem.classList.add("imagens");

  if (agente.role.displayName === "Sentinel") {
    li.classList.add("azul");
  } else if (agente.role.displayName === "Duelist") {
    li.classList.add("vermelho");
  } else if (agente.role.displayName === "Initiator") {
    li.classList.add("roxo");
  } else if (agente.role.displayName === "Controller") {
    li.classList.add("verde");
  }
  return li;
}

function main() {
  let data = fazGet(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  let agentes = JSON.parse(data);
  // let agentess = agentes.data
  let lista = document.getElementById("lista");
  console.log(agentes);

  agentes.data.forEach((element) => {
    let li = criaDiv(element);

    lista.appendChild(li);
  });
  //para cada agente
  //criar um li
  // adicionar na ul
}
main();
