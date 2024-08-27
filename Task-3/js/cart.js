function increaseQuantity(button) {
    let input = button.parentNode.querySelector('input[type=number]');
    if (input.value < input.max) {
        input.value = parseInt(input.value) + 1;
    }
}

function decreaseQuantity(button) {
    let input = button.parentNode.querySelector('input[type=number]');
    if (input.value > input.min) {
        input.value = parseInt(input.value) - 1;
    }
}
