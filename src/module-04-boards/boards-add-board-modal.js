//In this file: Add New Board Modal HTML Elements
import "../module-helpers/modals.css";
import { boardsModalMaker } from "./boards-modals.js";

let BoardAddBoardModal = (function () {
    //modal container
    const addBoardModal = document.createElement('div');
    addBoardModal.classList.add('modal-container', 'hide');

    let modalHeading = document.createElement('h3');
    let closeModalIcon = document.createElement('ion-icon');
    let labelForBoardName = document.createElement('label');
    let inputField = document.createElement('input');
    let requiredFieldWarning = document.createElement('p');
    let saveBoardButton = document.createElement('button');
    boardsModalMaker(modalHeading, closeModalIcon, labelForBoardName, inputField, requiredFieldWarning, saveBoardButton, addBoardModal);

    modalHeading.textContent = "Add board";
    labelForBoardName.textContent = "Board name: ";
    saveBoardButton.innerText = "Save board";

    return {
        addBoardModal, //used in boards.js in function to open and close the modal. / used in Edit Board Modal to copy content

        inputField, // used in boards.js in function to close the modal & save board
        requiredFieldWarning, // used in boards.js in function to close the modal and function to save board. 
        saveBoardButton, // used in index.js event listener to save board
        closeModalIcon, // used in index.js event listener to close board
    }
})()

export {
    BoardAddBoardModal
}
