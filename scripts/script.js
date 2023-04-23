
const modalController = ({modal, btnClose, btnOpen, time = 300}) => {
// const modalController = () => {

// const buttonElem = document.querySelector('.section__button');
// const buttonElems = document.querySelectorAll('.section__button');
const buttonElems = document.querySelectorAll(btnOpen);

// const modalElem = document.querySelector('.modal');
const modalElem = document.querySelector(modal);

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (
        target === modalElem || 
        // target.closest(btnClose) ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {
        // modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, time);

        window.removeEventListener('keydown', closeModal);
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;

    window.addEventListener('keydown', closeModal);
}

// openModal()

// buttonElem.addEventListener('click', openModal);

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
})

modalElem.addEventListener('click', closeModal);

}

// modalController()

// modalController({
//     modal: '.modal',
//     btnOpen: '.section__button',
//     btnClose: '.modal__close'
// });

modalController({
    modal: '.modal1',
    btnOpen: '.section__button1',
    btnClose: '.modal__close',
    time: 1000
});

modalController({
    modal: '.modal2',
    btnOpen: '.section__button2',
    btnClose: '.modal__close'
});
