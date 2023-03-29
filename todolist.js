const text = document.querySelector('#textarea');
const btn = document.querySelector('#button');
const add = document.querySelector('#divareatodolist');

btn.addEventListener('click', afficher);

function afficher() {
    //recuperation contenu et ajout div

    const note = text.value;
    console.log(note);
    const div = document.createElement('div');
    div.innerHTML=note;
    add.appendChild(div);
    text.value="";
}

