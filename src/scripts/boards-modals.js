//In this file: function that generates and formats HTML elements for board modals

let boardsModalMaker = function (modalHeading, closeModalIcon, labelForBoardName, inputField, requiredFieldWarning, saveBoardButton, container) {

    //subcontainer
    let subContainerModal = document.createElement('div');
    subContainerModal.classList.add('modal-container-sub');

    //header
    let modalTitleContainer = document.createElement('div');
    modalTitleContainer.classList.add('modal-container-title-div');

    // modalHeading = document.createElement('h3');

    // closeModalIcon = document.createElement('ion-icon');
    closeModalIcon.classList.add('modal-icon-close');
    closeModalIcon.setAttribute('name', 'close-outline');

    modalTitleContainer.append(modalHeading, closeModalIcon);

    //form
    let modalFormContainer = document.createElement('form');
    modalFormContainer.setAttribute('action', '""');
    modalFormContainer.classList.add('modal-content-container');

    // labelForBoardName = document.createElement('label');
    labelForBoardName.setAttribute('for', 'boardName');
    labelForBoardName.textContent = "Board name: ";

    // inputField = document.createElement('input');
    inputField.setAttribute('id', 'boardName');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('maxlength', '10');

    modalFormContainer.append(labelForBoardName, inputField);

    //requiredFieldWarning
    // requiredFieldWarning = document.createElement('p');
    requiredFieldWarning.textContent = "Board name is a required field.";
    requiredFieldWarning.classList.add('required-field-warning');
    requiredFieldWarning.classList.add('hide');

    //save button
    // saveBoardButton = document.createElement('button');
    saveBoardButton.setAttribute('type', 'button')
    saveBoardButton.classList.add('modal-btn');

    subContainerModal.append(modalTitleContainer, modalFormContainer, requiredFieldWarning, saveBoardButton)

    // adding elements to container
    container.append(subContainerModal);
}

export { boardsModalMaker };