//In this file: delete board modal
import "../module-helpers/modals.css";
import { modalMakerDelete } from '../module-helpers/modal-maker-delete.js';

let BoardDeleteBoardModal = (function () {
    //modal container
    const deleteBoardModal = document.createElement('div');
    deleteBoardModal.classList.add('modal-container', 'hide');

    let modalHeading = document.createElement('h3');
    let closeModalIcon = document.createElement('ion-icon');
    let objectToDelete = document.createElement('p');
    let warningText = document.createElement('p');
    let deleteButton = document.createElement('button');
    modalMakerDelete(modalHeading, closeModalIcon, objectToDelete, warningText, deleteButton, deleteBoardModal);

    modalHeading.textContent = "Delete board";
    warningText.textContent = "Warning: deleting this board will also delete all todos associated with it. This action cannot be undone. ";
    deleteButton.innerText = "Delete board";


    return {
        deleteBoardModal, //used in index.js to append modal to html / used in boards.js to manage modal

        objectToDelete, // used in boards.js to manage modal
        closeModalIcon, //used in index.js to close modal
        warningText, //used in boards.js to manage modal
        deleteButton //used in boards.js to manage modal
    }
})()

export { BoardDeleteBoardModal }