fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    montarcards(json);
  });

function montarcards(lista) {
  let html = "";

  for (let i = 0; i < lista.length; i++) {
    html += '<img src="' + lista[i].logo + '"/>';
    html += "<h4>" + lista[i].position + "</h4>";
    html += "<h5>" + lista[i].empresa + "</h5>";
    html += "<span>" + lista[i].contrato + "</span><br/>";
    html += "<span>" + lista[i].postedAt + "</span><br/>";
    html += "<span>" + lista[i].local + "</span><br/>";
    html +=
      '<button value="' + lista[i].requisitos + '"> Ver Mais</button><br/>';
    if (i === 0) {
      break;
    }
  }

  document.getElementById("empregos").innerHTML = html;
  document.getElementById("empregos");
  empregos.style.cssText =
    "background-color: #ccc;" +
    "color: black;" +
    "margin: 0 12rem;" +
    "padding: 0.5rem 0.7rem ;" +
    "border: 1px solid black;" +
    "border-radius: 0.5rem;" +
    "width: 22rem;";

  for (let i = 1; i < lista.length; i++) {
    html += '<img src="' + lista[1].logo + '"/>';
    html += "<h4>" + lista[1].position + "</h4>";
    html += "<h5>" + lista[1].empresa + "</h5>";
    html += "<span>" + lista[1].contrato + "</span><br/>";
    html += "<span>" + lista[1].postedAt + "</span><br/>";
    html += "<span>" + lista[1].local + "</span><br/>";
    html +=
      '<button value="' + lista[1].requisitos + '"> Ver Mais</button><br/>';
    if (i === 1 || i === 0) {
      break;
    }
  }

  document.getElementById("empregos2").innerHTML = html;
  document.getElementById("empregos2");
  empregos2.style.cssText =
    "background-color: #ccc;" +
    "color: black;" +
    "margin: 0 12rem;" +
    "padding: 0.5rem 0.7rem ;" +
    "border: 1px solid black;" +
    "border-radius: 0.5rem;" +
    "width: 22rem;";
}
