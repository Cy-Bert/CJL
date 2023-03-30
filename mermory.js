const cardsArray = [
    {
      name: 'joker_red',
      img: 'assets/img/JR.svg',
    },
    {
      name: 'joker_noir',
      img: 'assets/img/JN.svg',
    },        
];
let gamegrid = cardsArray.concat(cardsArray);
gamegrid.sort(() => 0.5 - Math.random());
let firstGuess = '';
let secondGuess = '';
let count= 0;
let previousTarget = null;
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
  })
};

const game = document.querySelector('#game');
const grid = document.createElement('section');
grid.classList.add('max-w-xl', 'my-0', 'mx-auto', 'flex', 'flex-wrap', 'justify-evenly');
game.appendChild(grid);

gamegrid.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card','m-5', 'bg-contain', 'bg-no-repeat', 'bg-center', 'w-20', 'h-20', 'bg-[url("/assets/img/dos.svg")]');
    card.dataset.name = item.name;
    grid.appendChild(card);
  });

  grid.addEventListener('click', function (event) {
    let clicked = event.target;
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
      return;
    }
    if (count < 2) {
      count++;
      if (count === 1) {
          firstGuess = clicked.dataset.name;
          clicked.classList.add('selected','border-2', 'border-solid', 'border-blue-500');
      }
      else {
        secondGuess = clicked.dataset.name;
        clicked.classList.add('selected','border-2', 'border-solid', 'border-blue-500');
      }
    if (firstGuess !=='' && secondGuess !=='') {
        if (firstGuess === secondGuess) {
          match();
          resetGuesses();
        }
        else {
          resetGuesses();
        }
    }
    previousTarget = clicked;
  }
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach ((card) => {
    card.classList.add('match','border-4', 'border-solid', 'border-red-500');
  })
};

