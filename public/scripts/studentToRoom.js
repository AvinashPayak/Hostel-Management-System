const contentTemplate = document.getElementById('modal-content');
const modalTemplate = document.getElementById('modal-template');
let modalElement;
let backdropElement;
let closeReviewBtn;

const addreviewBtn = document.getElementById('showReview');


const showReviewModal = () => {
    
    const modal = document.importNode(modalTemplate.content, true)
    modalElement = modal.querySelector('.review');
    backdropElement = modal.querySelector('.backdrop');
    
    const contentElement = document.importNode(contentTemplate.content, true);
    closeReviewBtn = contentElement.getElementById('close-review');
    closeReviewBtn.addEventListener('click', hideReviewModal);



    modalElement.appendChild(contentElement);

    document.body.insertAdjacentElement('afterbegin', modalElement);
    document.body.insertAdjacentElement('afterbegin', backdropElement);


};

const hideReviewModal = () => {
    if(modalElement) {
        document.body.removeChild(modalElement);
        document.body.removeChild(backdropElement);
        backdropElement = null;
        modalElement = null;
    }
};

addreviewBtn.addEventListener('click', showReviewModal);
