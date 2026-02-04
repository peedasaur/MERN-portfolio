function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('resultBox');
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    bmiValue.textContent = bmi;

    let status = '';
    let color = '';

    if (bmi < 18.5) {
        status = 'Underweight';
        color = '#3b82f6'; 
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'Normal Weight';
        color = '#10b981'; 
    } else if (bmi >= 25 && bmi < 30) {
        status = 'Overweight';
        color = '#f59e0b'; 
    } else {
        status = 'Obese';
        color = '#ef4444'; 
    }

    bmiStatus.innerHTML = `Category: <span style="color: ${color}">${status}</span>`;

    resultBox.classList.add('show');
}

