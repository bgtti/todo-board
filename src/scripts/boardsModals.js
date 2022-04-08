import "../styles/modals.css";

//***This is the UI for the modal to add new boards***

let BoardAddBoardModal = (function () {
    //modal container
    let addBoardModal = document.createElement('div');
    addBoardModal.classList.add('modal-container', 'hide');


    //container content
    let subContainerModal = document.createElement('div');
    subContainerModal.classList.add('modal-container-sub');

    let modalTitleContainer = document.createElement('div');
    modalTitleContainer.classList.add('modal-container-title-div');

    let modalHeading = document.createElement('h3');
    modalHeading.textContent = "Add board";

    let closeModalIcon = document.createElement('ion-icon');
    closeModalIcon.classList.add('modal-icon-close');
    closeModalIcon.setAttribute('name', 'close-outline');

    modalTitleContainer.append(modalHeading, closeModalIcon);

    let modalFormContainer = document.createElement('form');
    modalFormContainer.setAttribute('action', '""');
    modalFormContainer.classList.add('modal-content-container');

    let labelForBoardName = document.createElement('label');
    labelForBoardName.setAttribute('for', 'boardName');
    labelForBoardName.textContent = "Board name: ";

    let inputField = document.createElement('input');
    inputField.setAttribute('id', 'boardName');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('maxlength', '10');

    modalFormContainer.append(labelForBoardName, inputField);

    let requiredFieldWarning = document.createElement('p');
    requiredFieldWarning.textContent = "Board name is a required field.";
    requiredFieldWarning.classList.add('required-field-warning');
    requiredFieldWarning.classList.add('hide');

    let saveBoardButton = document.createElement('button');
    saveBoardButton.setAttribute('type', 'button')
    saveBoardButton.classList.add('modal-btn');
    saveBoardButton.innerText = "Save board"

    subContainerModal.append(modalTitleContainer, modalFormContainer, requiredFieldWarning, saveBoardButton)

    // adding elements to container
    addBoardModal.append(subContainerModal);

    return {
        closeModalIcon,//used in index.js to close modal
        addBoardModal, //used in index.js to open modal
        inputField, //used in boards.js to get user input to create board AND in index.js to have input cleared when user closes modal
        saveBoardButton, //used in boards.js to save newly created board
        requiredFieldWarning //used in boards.js when save board btn is clicked
    }
})()

export {
    BoardAddBoardModal
}

