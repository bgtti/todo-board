//In this file: Add New Board Modal HTML Elements
import "../styles/modals.css";

let BoardAddBoardModal = (function () {
    //modal container
    const addBoardModal = document.createElement('div');
    addBoardModal.classList.add('modal-container', 'hide');


    //container content
    const subContainerModal = document.createElement('div');
    subContainerModal.classList.add('modal-container-sub');

    const modalTitleContainer = document.createElement('div');
    modalTitleContainer.classList.add('modal-container-title-div');

    const modalHeading = document.createElement('h3');
    modalHeading.textContent = "Add board";

    const closeModalIcon = document.createElement('ion-icon');
    closeModalIcon.classList.add('modal-icon-close');
    closeModalIcon.setAttribute('name', 'close-outline');

    modalTitleContainer.append(modalHeading, closeModalIcon);

    const modalFormContainer = document.createElement('form');
    modalFormContainer.setAttribute('action', '""');
    modalFormContainer.classList.add('modal-content-container');

    const labelForBoardName = document.createElement('label');
    labelForBoardName.setAttribute('for', 'boardName');
    labelForBoardName.textContent = "Board name: ";

    const inputField = document.createElement('input');
    inputField.setAttribute('id', 'boardName');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('maxlength', '10');

    modalFormContainer.append(labelForBoardName, inputField);

    const requiredFieldWarning = document.createElement('p');
    requiredFieldWarning.textContent = "Board name is a required field.";
    requiredFieldWarning.classList.add('required-field-warning');
    requiredFieldWarning.classList.add('hide');

    const saveBoardButton = document.createElement('button');
    saveBoardButton.setAttribute('type', 'button')
    saveBoardButton.classList.add('modal-btn');
    saveBoardButton.innerText = "Save board"

    subContainerModal.append(modalTitleContainer, modalFormContainer, requiredFieldWarning, saveBoardButton)

    // adding elements to container
    addBoardModal.append(subContainerModal);

    return {
        addBoardModal, //used in boards.js in function to open and close the modal.

        inputField, // used in boards.js in function to close the modal. 
        requiredFieldWarning, // used in boards.js in function to close the modal and function to save board. 
        inputField, // used in boards.js in functionto save board. 
        saveBoardButton, // used in index.js event listener to save board
        closeModalIcon, // used in index.js event listener to close board
    }
})()

export {
    BoardAddBoardModal
}
