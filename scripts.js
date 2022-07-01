 
 fetch('./data.json')
.then(function(resultado){
    return resultado.json();
})
 .then(function(json){
    montarcards(json);
 })

 function montarcards(lista){
    let html = '';

  

    for(let i=0;i<lista.length;i++){
        html += '<img src="./assets/logos/">'+lista[i].logo+'</img>';
        html += '<h3>'+lista[i].position+'</h3>';
        html += '<h4>'+lista[i].empresa+'</h4>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
 

 document.getElementById("empregos").innerHTML = html;
  }