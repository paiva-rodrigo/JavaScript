//como usar uma função em java script

function funcao1(){
    console.log("hello word");
}
funcao1();

function funcao2(nome){
    console.log("nome:" , nome);
}

funcao2("rodrigo");

var lista = ['laranja0','laranja1','laranja2','laranja3'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');
body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

for (let i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
    
}


