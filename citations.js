const base_citations =[
    ["« Beaucoup pensent à vivre longtemps, peu à bien vivre. »", "Socrate"],
    ["« Deux années de ma vie valent mieux qu'une lettre d'introduction. »", "Marcel Achard"],
    ["« Ma vie entière s'est portée sur les films et la religion. C'est tout. Rien d'autre. »","Martin Scorsese"],
    ["« La vie d’un homme n’est que d’un instant. »","Marc Aurèle"],
    ["« La vie, c’est apprendre à aimer. »","Abbé Pierré"],
    ["« Une belle vie, c’est une vie où on a beaucoup souffert. »","Christian Bobin"],
    ["« La qualité de votre vie est égale à la qualité de vos pensées. »","Anthony Robbins"],
    ["« Fais de ta vie un rêve, et d’un rêve, une réalité. »","Antoine de Saint Exupéry"],
    ["« Il faut faire de sa vie un chef d’œuvre. »","Goethe"],
    ["« Là où il y a l’amour, il y a la vie. »","Gandhi"],
    
];

let index = Math.floor(Math.random() * (base_citations.length))

base_citations[index][0];
base_citations[index][1];
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