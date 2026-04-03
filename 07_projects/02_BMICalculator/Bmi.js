const form = document.querySelector('form');
// this use case will give you enpty vlaue
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Plese give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Plese give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      results.innerHTML = `<span> Your are under weight ${bmi}</span>`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `<span> Your are Normal range ${bmi}</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span> Your are Overweight ${bmi}</span>`;
    }
  }
});
