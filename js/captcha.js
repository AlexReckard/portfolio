const confirmationCheckbox = document.querySelector('#confirmation');
const submitBtn = document.querySelector('.submit-btn'); 
const confirmMsg = document.querySelector('#confirm-msg');
const buttonCover = document.querySelector('#button-cover');

confirmationCheckbox.addEventListener('change', () => {
    if (confirmationCheckbox.checked) {
        submitBtn.removeAttribute('disabled');
        confirmMsg.style.display = 'none';
        buttonCover.style.display = 'none';
    } else {
        submitBtn.setAttribute('disabled', true);
        buttonCover.style.display = 'block';
    }
});

buttonCover.addEventListener('click', () => {
    if (!confirmationCheckbox.checked) {
        confirmMsg.style.display = 'block';
    }
});

buttonCover.addEventListener('touchstart', () => {
    if (!confirmationCheckbox.checked) {
        confirmMsg.style.display = 'block';
    }
});
