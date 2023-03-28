const btn = document.querySelector("#button");
// const text = document.querySelector("#answer");

function table(a, c){
    this.autor = a;
    this.citation = c;
}

let cit1 = new table(['Alphonse','Allais'],'Vous ny allez pas par quatre chemins ! Jamais ! Un seul, cest plus court');
let cit2 = new table(['Alphonse','Daudet'],'La vie léprouvait à présent; il se sentait faible et désarmé devant elle, et il pleurait, pleurait');



btn.addEventListener('click', afficher);

function afficher() {
    // text.textContent = '';
document.querySelector('#autor').innerHTML =  cit1['autor'];
document.querySelector('#answer').innerHTML = cit1['citation'];

document.querySelector('#autor2').innerHTML =  cit2['autor'];
document.querySelector('#answer2').innerHTML = cit2['citation'];
}