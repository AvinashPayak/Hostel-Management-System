const contentTemplate = document.getElementById('modal-content');
const modalTemplate = document.getElementById('modal-template');

let modalElement;
let backdropElement;
let closeRoomBtn;

const addroomBtn = document.getElementById('showRoom');


const showRoomModal = () => {
    
    const modal = document.importNode(modalTemplate.content, true)
    modalElement = modal.querySelector('.room');
    backdropElement = modal.querySelector('.backdrop');
    
    const contentElement = document.importNode(contentTemplate.content, true);
    closeRoomBtn = contentElement.getElementById('close-room');
    closeRoomBtn.addEventListener('click', hideRoomModal);



    modalElement.appendChild(contentElement);

    document.body.insertAdjacentElement('afterbegin', modalElement);
    document.body.insertAdjacentElement('afterbegin', backdropElement);


};

const hideRoomModal = () => {
    if(modalElement) {
        document.body.removeChild(modalElement);
        document.body.removeChild(backdropElement);
        backdropElement = null;
        modalElement = null;
    }
};

addroomBtn.addEventListener('click', showRoomModal);
