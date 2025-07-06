let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');
  let message = document.querySelector('#message');

  let bmi = weight / (height / 100) ** 2;
  let bmiScore = bmi.toFixed(2);
  result.innerText = bmiScore;

  message.classList.remove('text-success', 'text-danger');

  if (bmiScore < 18.6) {
    message.innerText = `Your BMI is ${bmiScore}, you are Under Weight.`;
    message.classList.add('text-danger');
  } else if (bmiScore >= 18.6 && bmi <= 24.9) {
    message.innerText = `Your BMI is ${bmiScore}, you are in Normal Range.`;
    message.classList.add('text-success');
  } else if (bmiScore > 24.9) {
    message.innerText = `Your BMI is ${bmiScore}, you are Over Weight.`;
    message.classList.add('text-danger');
  }
});
