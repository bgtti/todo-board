//in this file: styling and creation of HTML elements for delete modals
const modalMakerDelete = function (modalHeading, closeModalIcon, objectToDelete, warningText, deleteButton, container) {
    //subcontainer
    let subContainerModal = document.createElement('div');
    subContainerModal.classList.add('modal-container-sub');

    //header
    let modalTitleContainer = document.createElement('div');
    modalTitleContainer.classList.add('modal-container-title-div');

    closeModalIcon.classList.add('modal-icon-close');
    closeModalIcon.setAttribute('name', 'close-outline');

    modalTitleContainer.append(modalHeading, closeModalIcon);

    //Text
    let modalTextContainer = document.createElement('div');
    modalTextContainer.classList.add('modal-content-container');

    objectToDelete.classList.add('here'); //here
    warningText.classList.add('here'); //here

    modalTextContainer.append(objectToDelete, warningText);

    //save button
    deleteButton.setAttribute('type', 'button');
    deleteButton.classList.add('modal-btn');
    deleteButton.classList.add('btn-type-3');

    subContainerModal.append(modalTitleContainer, modalTextContainer, deleteButton);

    // adding elements to container
    container.append(subContainerModal);
}
export { modalMakerDelete }