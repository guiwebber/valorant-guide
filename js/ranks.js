let lista = document.getElementById("lista");
let url = fetch("https://valorant-api.com/v1/competitivetiers").then(
  (response) => {
    response.json().then((corpo) => {
      function criarRank(rank) {
        for (var i = 3; i < 25; i++) {
          let li = document.createElement("li");
          let p = document.createElement("p");
          let imagem = document.createElement("img");
          let div = document.createElement("div");
          p.innerHTML = rank.tiers[i].tierName;
          imagem.src = rank.tiers[i].largeIcon;
          lista.appendChild(li);
          li.appendChild(div);
          div.appendChild(p);
          div.appendChild(imagem);
          div.classList.add("divs");
          imagem.classList.add("imagem");
        }

        return li;
      }
      corpo.data.forEach((element) => {
        let li = criarRank(element);

        lista.appendChild(li);
        li.appendChild(divisions);
      });
    });
  }
);


//  for (var i = 0; i <= 8; i++) {
//    let divisions = document.createElement("div");
//    let textin = document.createElement("p");

//    textin.innerHTML = rank.tiers.divisionName;

//    divisions.appendChild(textin);
//  }