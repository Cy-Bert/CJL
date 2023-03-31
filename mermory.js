const cardsArray = [
  {
    name: 'dog_01',
    img: 'assets/img/chien01.png',
  },
  {
    name: 'dog_02',
    img: 'assets/img/chien02.png',
  },
  {
    name: 'dog_03',
    img: 'assets/img/chien03.png',
  },
  {
    name: 'dog_04',
    img: 'assets/img/chien04.png',
  },
  {
    name: 'dog_05',
    img: 'assets/img/chien05.png',
  },
  {
    name: 'dog_06',
    img: 'assets/img/chien06.png',
  },
  {
    name: 'dog_07',
    img: 'assets/img/chien07.png',
  },
  {
    name: 'dog_08',
    img: 'assets/img/chien08.png',
  },
  {
    name: 'dog_09',
    img: 'assets/img/chien09.png',
  },
  {
    name: 'dog_10',
    img: 'assets/img/chien10.png',
  },
  {
    name: 'dog_11',
    img: 'assets/img/chien11.png',
  },
  {
    name: 'dog_12',
    img: 'assets/img/chien12.png',
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

grid.classList.add('max-w-7xl', 'my-10', 'mx-auto',"flex", "flex-wrap", 'justify-evenly');
game.appendChild(grid);

gamegrid.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card', 'relative', 'm-5','bg-contain',"w-40","h-32", 'transition-all', 'duration-300', 'ease-linear');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front','absolute',"w-40","h-32", 'bg-cover', 'bg-no-repeat', 'bg-center', 'bg-contain');

  const back = document.createElement('div');
  back.classList.add('back','absolute',"w-40","h-32",'bg-cover',"bg-no-repeat" ,'bg-center', 'bg-contain', 'bg-[url("/assets/img/back.png")]');

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