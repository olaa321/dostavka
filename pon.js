const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-bth-open');
const modalBtnClose = document.querySelectorAll('.modal-bth-close');
const modalImg = document.querySelector('.modal-img');
const modalText = document.querySelector('.modal-text')

// Функція для перемикання класу 'is-hidden'
function toggleModal() {
    modal.classList.toggle('is-hidden');
}

// Додаємо події для всіх кнопок відкриття модального вікна
for (let i = 0; i < modalBtnOpen.length; i += 1) {
    modalBtnOpen[i].addEventListener('click', function() {
        const imgSrc = this.querySelector('.card-img').src;
        const cardtext = this.querySelector('.card-text').innerHTML
        let price = this.querySelector('.card-text').getAttribute('value');
        modalImg.src = imgSrc;
        modalText.innerHTML = cardtext + " " + price;
        toggleModal();
    });
}

for (let i = 0; i < modalBtnClose.length; i += 1){
    modalBtnClose[i].addEventListener('click', toggleModal);
}

// Додаємо подію для кнопки закриття модального вікна
