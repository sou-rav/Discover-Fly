const firstClassIncrease = document.getElementById('firstClass-increase');
firstClassIncrease.addEventListener('click', function () {
    updatedCount('firstClass-count', true);
})

const firstClassDecrease = document.getElementById('firstClass-decrease');
firstClassDecrease.addEventListener('click', function () {
    updatedCount('firstClass-count', false);
})

const economyClassIncrease = document.getElementById('economy-increase');
economyClassIncrease.addEventListener('click', function () {
    updatedCount('economy-count', true);
})

const economyClassDecrease = document.getElementById('economy-decrease');
economyClassDecrease.addEventListener('click', function () {
    updatedCount('economy-count', false);
})

// increase decrease function

function updatedCount(id, isIncrease) {
    const input = document.getElementById(id);
    const inputValue = parseInt(input.value);

    let newCount = inputValue;
    if (isIncrease == true) {
        newCount = inputValue + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = inputValue - 1;
    }
    input.value = newCount;

    calculateTotal()
}

// total calculator function

function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat').innerText = '$' + vat;

    const total = subTotal + vat;
    document.getElementById('total').innerText = '$' + total;
}

function getInputValue(seat) {
    const seatInput = document.getElementById(seat + '-count');
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}

// confirmation message

document.getElementById('bookNow').addEventListener('click', function () {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    alert('You booked ' + firstClassCount + ' First Class and ' + economyCount + ' Economy seats');
    window.location.reload();

})
