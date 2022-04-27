function stopSubmit(event) {
    event.preventDefault();
}

window.onload = function () {
    const button = document.querySelector("#submit-button");
    button.addEventListener('click', stopSubmit);
}

