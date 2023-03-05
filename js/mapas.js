let lista = document.getElementById("lista");

function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaMapa(mapa) {
  let mapaLi = document.createElement("li");
  let imagem = document.createElement("img");
  let titulo = document.createElement("h1");
  let hv = document.createElement("img");

  imagem.src = mapa.splash;
  titulo.innerText = mapa.displayName;

  mapaLi.addEventListener("mouseover", mouseOver);
  mapaLi.addEventListener("mouseout", mouseOut);

  function mouseOver() {
    hv.src = mapa.displayIcon;
    hv.classList.add("bg-over");
  }

  function mouseOut() {
    hv.src = mapa.splash;
  }

  mapaLi.appendChild(titulo);
  mapaLi.appendChild(imagem);
  mapaLi.appendChild(hv);
  console.log(mapaLi);

  mapaLi.classList.add('mapaLi')
  imagem.classList.add('bg')
  mapaLi.classList.add('container')
  hv.classList.add('hv');
  imagem.classList.add("imagem");
  titulo.classList.add("texto");
  return mapaLi;
}

function main() {
  let data = fazGet("https://valorant-api.com/v1/maps");
  let mapa = JSON.parse(data);
  // let agentess = agentes.data
  // let lista = document.getElementById("lista");
  console.log(mapa);

  mapa.data.forEach((element) => {
    let li = criaMapa(element);

    lista.appendChild(li);
  });
  //para cada agente
  //criar um li
  // adicionar na ul
}
main();
