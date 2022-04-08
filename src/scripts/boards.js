import { BoardAddBoardModal } from "./boardsModals.js"; //input field and save button from this file used here.
import { NavBars } from "./nav.js"; //the boards generated here are appended to the boardSection of the Nav.

//*** This is the logic behind boards. It stores boards and creates new ones.***

//the allBoardsArray stores all active boards. The information contained in the array is passed to index.js to be displayed in the proper left nav section.
//the arrayCounter is used to give boards a unique id
let allBoardsArray = [];
let arrayCounter = 0;

//creates new boards and pushes information to allBoardsArray
class Boards {
    constructor(boardId, boardName) {
        this.boardId = boardId;
        this.boardName = boardName;
        allBoardsArray.push([this.boardId, this.boardName]);
        arrayCounter++;
    }

}

//Default board
new Boards('0', 'My board');

//Function that displays all boards in left Nav. This function if used in index.js to load display the boards in the left Nav.
const displayBoardsInNav = function () {
    while (NavBars.boardsSection.firstChild) {
        NavBars.boardsSection.removeChild(NavBars.boardsSection.firstChild)
    };
    const createElement = function (id, name) {
        let boardInNavDiv = document.createElement('div');
        boardInNavDiv.classList.add('nav-left-button');
        boardInNavDiv.setAttribute('data-board', `board${id}`)//check if necessary

        let boardsIcon = document.createElement('ion-icon');
        boardsIcon.setAttribute('name', 'clipboard-outline');
        boardsIcon.classList.add('nav-icon');
        let boardTitle = document.createElement('h3');
        boardTitle.textContent = name; //the name

        boardInNavDiv.append(boardsIcon, boardTitle);

        NavBars.boardsSection.append(boardInNavDiv);
    };

    for (let board of allBoardsArray) {
        createElement(board[0], board[1]);
    };
}

//Function that creates new boards. It uses the boardsModals.js - board is created when user presses 'save'.
const addingNewBoard = function () {
    let theName = BoardAddBoardModal.inputField.value;
    let theId = arrayCounter;
    new Boards(theId, theName);
    displayBoardsInNav();
}






export {
    allBoardsArray, //used in index.js to display boards in nav
    displayBoardsInNav, //used in index.js to display boards in nav
    addingNewBoard //used in index.js in event listener to add new board
}