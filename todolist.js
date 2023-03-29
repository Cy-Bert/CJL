//bouton "done"
const doneBtn = document.querySelector('.btn_done');
//click sur le boutton done
doneBtn.addEventListener('click', () => {
    const task = doneBtn.parentNode;
    //liste taches effectuées
    const taskdown = document.querySelector('#taskdown ul');

    // liste à faire devient done
    taskdown.appendChild(task);
});
