 
 fetch('./data.json')
.then(function(resultado){
    return resultado.json();
})
 .then(function(json){
    montarcards(json);
 })

 function montarcards(lista){
    let html = '<div class="container">';

  

    for(let i=0;i<lista.length;i++){
        html += '<img src="'+lista[i].logo+'"/>';
        html += '<h4 style="color=blue">'+lista[i].position+'</h4>';
        html += '<h5>'+lista[i].empresa+'</h5>';
        html += '<span>'+lista[i].contrato+'</span>';
        html += lista[i].body+'<br/>';
        html += '<span>'+lista[i].postedAt+'</span>';
        html += lista[i].body+'<br/>';
        html += '<button value="'+lista[i].requisitos+'"> Ver Mais</button>';
        html += '<hr/>';
    }
 

 document.getElementById("empregos").innerHTML = html;
  }