const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-bth-open');

const modalBtnClose = document.querySelector('.modal-bth-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);


const modal2 = document.querySelector('.backdrop2');
const modalBtnOpen2 = document.querySelector('.modal-bth-open2');

const modalBtnClose2 = document.querySelector('.modal-bth-close2');

const toggleModal2 = () => modal2.classList.toggle('is-hidden2');

modalBtnOpen2.addEventListener('click', toggleModal2);
modalBtnClose2.addEventListener('click', toggleModal2);