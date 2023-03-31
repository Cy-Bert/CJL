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
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.querySelector('#game');
const grid = document.createElement('section');

grid.classList.add('grid', 'max-w-xl', 'my-0', 'mx-auto', 'flex', 'flex-wrap', 'justify-evenly');
game.appendChild(grid);

gamegrid.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card', 'relative', 'm-5', 'bg-contain', 'bg-no-repeat', 'bg-center', 'w-48', 'h-64', 'transition-all', 'duration-300', 'ease-linear');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front', 'w-48', 'h-64', 'absolute', 'bg-cover', 'bg-no-repeat', 'bg-center', 'bg-contain');

  const back = document.createElement('div');
  back.classList.add('back', 'w-48', 'h-64', 'absolute', 'bg-cover', 'bg-[url("/assets/img/dos.svg")]');

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match', 'border-4', 'border-solid', 'border-red-500');
  })
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
  })
};

grid.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected', 'border-2', 'border-solid', 'border-blue-500');
    }
    else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected', 'border-2', 'border-solid', 'border-blue-500');
    }
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});