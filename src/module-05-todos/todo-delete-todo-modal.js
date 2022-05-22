//In this file: delete todo modal
import "../module-helpers/modals.css";
import { modalMakerDelete } from '../module-helpers/modal-maker-delete.js';

let TodoDeleteTodoModal = (function () {
    //modal container
    const deleteTodoModal = document.createElement('div');
    deleteTodoModal.classList.add('modal-container', 'hide');

    let modalHeading = document.createElement('h3');
    let closeModalIcon = document.createElement('ion-icon');
    let objectToDelete = document.createElement('p');
    let warningText = document.createElement('p');
    let deleteButton = document.createElement('button');
    modalMakerDelete(modalHeading, closeModalIcon, objectToDelete, warningText, deleteButton, deleteTodoModal);

    modalHeading.textContent = "Delete to-do";
    warningText.textContent = "Warning: deleting this item will delete all information associated with it. This action cannot be undone. ";
    deleteButton.innerText = "Delete to-do";


    return {
        deleteTodoModal, //used in index.js to append modal to html / used in boards.js to manage modal

        objectToDelete, // used in todo.js to manage modal text
        closeModalIcon, //used in index.js to close modal
        deleteButton, // used in index.js E.L, todo.js for management

        modalHeading, //used in todo.js for text change
        warningText, //used in todo.js for text change

    }
})()

export { TodoDeleteTodoModal }