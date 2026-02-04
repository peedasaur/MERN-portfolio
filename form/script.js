const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            showToast();
            form.reset();
        }, 1500);
    }
});

function validateForm() {
    let isValid = true;

    
    if (nameInput.value.trim() === '') {
        setError(nameInput);
        isValid = false;
    } else {
        removeError(nameInput);
    }

    
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        setError(emailInput);
        isValid = false;
    } else {
        removeError(emailInput);
    }

    
    if (messageInput.value.trim() === '') {
        setError(messageInput);
        isValid = false;
    } else {
        removeError(messageInput);
    }

    return isValid;
}

function setError(element) {
    const group = element.parentElement;
    group.classList.add('error');
}

function removeError(element) {
    const group = element.parentElement;
    group.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
        removeError(input);
    });
});

