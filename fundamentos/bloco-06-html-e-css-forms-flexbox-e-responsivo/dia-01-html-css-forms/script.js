function stopSubmit(event) {
    event.preventDefault();
}

function clearInformation () {
    const inputElements = document.querySelectorAll('input');
    const textAreaElement = document.querySelector('textarea');

    for (let index = 0; index < inputElements.length; index += 1) {
        const inputs = inputElements[index];
        inputs.value = '';
        inputs.checked = false;
    }
    textAreaElement.value = '';
}

window.onload = function () {
    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener('click', stopSubmit);
    const clearButton = document.querySelector("#clear-button");
    clearButton.addEventListener('click', clearInformation);
}
