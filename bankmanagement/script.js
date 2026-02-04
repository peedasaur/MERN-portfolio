let balance = 1000;
const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const messageBox = document.getElementById('messageBox');

function updateDisplay() {
    balanceDisplay.textContent = '$' + balance.toLocaleString();
    amountInput.value = '';
}

function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `message ${type}`;
    messageBox.style.opacity = '1';
    setTimeout(() => {
        messageBox.style.opacity = '0';
    }, 3000);
}

function deposit() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage('Please enter a valid amount', 'error');
        return;
    }

    balance += amount;
    updateDisplay();
    showMessage(`Successfully deposited $${amount}`, 'success');
}

function withdraw() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage('Please enter a valid amount', 'error');
        return;
    }

    if (amount > balance) {
        showMessage('Insufficient funds!', 'error');
        return;
    }

    balance -= amount;
    updateDisplay();
    showMessage(`Successfully withdrew $${amount}`, 'success');
}

updateDisplay();

