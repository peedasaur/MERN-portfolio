const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

function format(num) {
    if (Number.isInteger(num)) return num;
    
    return parseFloat(num.toFixed(4));
}

function updatechain(sourceInfo) {
    let base;
    const val = parseFloat(sourceInfo.element.value);

    
    if (isNaN(val)) {
        [input1, input2, input3, input4].forEach(el => {
            if (el !== sourceInfo.element) el.value = '';
        });
        return;
    }

    
    switch (sourceInfo.power) {
        case 1: base = val; break;
        case 2: base = Math.sqrt(val); break;
        case 3: base = Math.cbrt(val); break;
        case 4: base = Math.sqrt(Math.sqrt(val)); break;
    }

    
    if (sourceInfo.power !== 1) input1.value = format(base);
    if (sourceInfo.power !== 2) input2.value = format(Math.pow(base, 2));
    if (sourceInfo.power !== 3) input3.value = format(Math.pow(base, 3));
    if (sourceInfo.power !== 4) input4.value = format(Math.pow(base, 4));
}

input1.addEventListener('input', () => updatechain({ element: input1, power: 1 }));
input2.addEventListener('input', () => updatechain({ element: input2, power: 2 }));
input3.addEventListener('input', () => updatechain({ element: input3, power: 3 }));
input4.addEventListener('input', () => updatechain({ element: input4, power: 4 }));

