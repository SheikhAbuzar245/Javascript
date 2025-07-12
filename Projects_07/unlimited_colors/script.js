let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let intervalId;

const randomColor = function () {
  letters = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color = color + letters[randomNum];
  }

  return color;
};

const changeBg = () => {
  document.body.style.backgroundColor = randomColor();
};

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});
