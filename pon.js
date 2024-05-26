
const modal2 = document.querySelector('.backdrop');
const modalBtnOpen2 = document.querySelector('.modal-bth-open');

const modalBtnClose = document.querySelector('.modal-bth-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
// chiken_burger.addEventListener("click", function () {
//     let toggleModal = () => modal.classList.toggle('is-hidden');
   

// })
