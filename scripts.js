
const form = document.querySelector('.form');
const bodyWeightInput = document.querySelector('#bodyweight');
const ageInput = document.querySelector('#age');
const bodyHeightInput = document.querySelector('#bodyheight');
const submitButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');
const resultSection = document.querySelector('.result');


// menambahkan listener pada button submit
submitButton.addEventListener('click', calculateBMI);

// menambahkan listener pada button reset
resetButton.addEventListener('click', resetForm);

// Function untuk calculateBMI
function calculateBMI(event) {
    event.preventDefault();
    const bodyWeight = parseFloat(bodyWeightInput.value);
    const bodyHeight = parseFloat(bodyHeightInput.value);
    const bmi = bodyWeight / (bodyHeight/100) ** 2;
    const result = document.createElement('p');
    result.textContent = `BMI anda adalah ${bmi.toFixed(2)}`;
    resultSection.innerHTML = '';
    resultSection.appendChild(result);
    checkBMICategory(bmi);
}

// Function untuk mengecek Category BMI
function checkBMICategory(bmi) {
    if (bmi < 18.5) {
        resultSection.innerHTML += '<p>Anda kekurangan berat badan.</p>';
    } else if (bmi >=18.5 && bmi < 24.9) {
        resultSection.innerHTML += '<p>Berat badan Anda normal.</p>';
    } else if (bmi >=24.9 && bmi < 30) {
        resultSection.innerHTML += '<p>Anda Kelebihan berat badan.</p>';
    } else if (bmi > 30) {
        resultSection.innerHTML += '<p>Anda mengalami kegemukan (obesitas).</p>';
    }
}

// Function untuk reset form
function resetForm() {
    bodyWeightInput.value = '';
    ageInput.value = '';
    bodyHeightInput.value = '';
    resultSection.innerHTML = '';
}

