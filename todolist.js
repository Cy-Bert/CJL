const text = document.querySelector('#newtask');
const btn = document.querySelector('#add');
const todolist = document.querySelector('#todolist');

btn.addEventListener('click', afficher);

function afficher() {
    //recuperation contenu et ajout div

    const note = text.value;
    console.log(note);
    const div = document.createElement('div');
    div.innerHTML=note;
    div.classList.add("flex","justify-between","py-2");
    todolist.appendChild(div);
    text.value="";

    const divbutton = document.createElement('div');
    divbutton.classList.add("flex","flex-row","gap-x-1");
    div.appendChild(divbutton);

    const buttonD = document.createElement('button');
    buttonD.innerHTML = "Done";
    buttonD.classList.add("w-10","p-1","sm:w-24","rounded", "border-black", "shadow", "bg-cyan-400", "text-white", "text-xs","hover:bg-cyan-500");
    divbutton.appendChild(buttonD);

    const buttonE = document.createElement('button');
    buttonE.innerHTML = "Edit";
    buttonE.classList.add("w-10","p-1","sm:w-24","rounded", "border-black", "shadow", "bg-cyan-400", "text-white", "text-xs","hover:bg-cyan-500");
    divbutton.appendChild(buttonE);
}


