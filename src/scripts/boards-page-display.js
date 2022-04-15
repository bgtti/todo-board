//In this file: Board page display of HTML Elements 
import "../styles/boardsContent.css";

const BoardPage = (function () {
    //Section 1: header
    const topSection = document.createElement('section');
    topSection.classList.add('board-content-section-header');

    let boardName = document.createElement('h2')
    boardName.textContent = "My Board"; //placeholder

    const mainBtnsContainer = document.createElement('div');
    mainBtnsContainer.classList.add('board-content-main-btns-container')

    const addToDoBtn = document.createElement('div');
    addToDoBtn.textContent = "Add to do";
    addToDoBtn.classList.add("board-content-option-buttons");
    addToDoBtn.classList.add("board-content-option-buttons-add");

    const editBoardBtn = document.createElement('div');
    editBoardBtn.textContent = "Edit board";
    editBoardBtn.classList.add("board-content-option-buttons");
    editBoardBtn.classList.add("board-content-option-buttons-edit");

    const deleteBoardBtn = document.createElement('div');
    deleteBoardBtn.textContent = "Delete board";
    deleteBoardBtn.classList.add("board-content-option-buttons");
    deleteBoardBtn.classList.add("board-content-option-buttons-delete");

    mainBtnsContainer.append(addToDoBtn, editBoardBtn, deleteBoardBtn);

    topSection.append(boardName, mainBtnsContainer);

    // section 2: content
    const mainSection = document.createElement('section');

    return {
        topSection, //used in function in boards.js
        mainSection, //used in function in boards.js
        boardName, //used in function in boards.js

        addToDoBtn, //used in event listener index.js ///check /used in boards.js to add dataset

        editBoardBtn, //used in boards.js to disable in All boards 
        deleteBoardBtn, //used in boards.js to disable in All boards & Default board
    }
})()

export { BoardPage } 