const text = document.querySelector('#newtask');
const btn = document.querySelector('#add');
const add = document.querySelector('.todolist');

btn.addEventListener('click', afficher);

function afficher() {
    //recuperation contenu et ajout div

    const note = text.value;
    console.log(note);
    const div = document.createElement('div');
    div.innerHTML=note;
    add.appendChild(div);
    text.value="";

    const buttondone = document.createElement('buttondone');
}
