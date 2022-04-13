//In this file: board module functions and logic
import { BoardAddBoardModal } from "./boards-add-board-modal.js"//needed here for html elements targeting.
import { NavLeft } from "./nav-left.js"//needed here for html elements targeting.
import { PageContent } from "./body.js" //board page content appended to the body
import { BoardPage } from "./boards-page-display.js" //appended to the body by a function
import { TodoDisplay } from "./todo.js" //import function to display todos on board

let allBoardsArray = []; //the allBoardsArray stores all active boards. 
let arrayCounter = 0; //the arrayCounter is used to give boards a unique id

//*** THE BOARDs 
class Boards {
    constructor(boardName) {
        this.boardId = `board${arrayCounter}`;
        this.boardName = boardName;
        allBoardsArray.push(this);
        arrayCounter++;
    }

}

//Default boards
new Boards('All boards'); //Default Board
new Boards('Default'); //Default Board
new Boards('Work'); //Example
new Boards('Learning to code'); //Example

//***BOARD DISPLAY FUNCTIONS
const BoardDisplay = (function () {

    //Function that displays board page on the body section
    const displayBoardPage = function (bId) {
        //the header section
        let boardToBeDisplayed = allBoardsArray.find(o => o.boardId === bId);
        BoardPage.boardName.textContent = `${boardToBeDisplayed["boardName"]}`;
        //the todos
        TodoDisplay.clearExistingCards();
        TodoDisplay.displayTodosInBoard(bId);

        PageContent.theBody.append(BoardPage.topSection, BoardPage.mainSection);
    }

    //Function that displays all boards in left Nav. This function is used in index.js to load display the boards in the left Nav.
    const displayBoardsInNav = function () {
        while (NavLeft.boardsSection.firstChild) {
            NavLeft.boardsSection.removeChild(NavLeft.boardsSection.firstChild)
        };
        const createElement = function (bId, bName) {
            const boardInNavDiv = document.createElement('div');
            boardInNavDiv.classList.add('nav-left-button');
            boardInNavDiv.setAttribute('data-board', `${bId}`)//check if necessary

            const boardsIcon = document.createElement('ion-icon');
            bId === "board0" ? boardsIcon.setAttribute('name', 'clipboard') : boardsIcon.setAttribute('name', 'clipboard-outline');
            boardsIcon.classList.add('nav-icon');
            const boardTitle = document.createElement('h3');
            boardTitle.textContent = bName; //the name

            boardInNavDiv.append(boardsIcon, boardTitle);

            NavLeft.boardsSection.append(boardInNavDiv);

        };

        for (let board of allBoardsArray) {
            createElement(board["boardId"], board["boardName"]);
        };

    }



    return {
        displayBoardsInNav,
        displayBoardPage
    }
})()

//***BOARD MANAGEMENT FUNCTIONS
const BoardManagement = (function () {
    //Function that creates new boards. It uses the boardsModals.js - board is created when user presses 'save'.
    const addingNewBoard = function () {
        let theName = BoardAddBoardModal.inputField.value;
        new Boards(theName);
        BoardDisplay.displayBoardsInNav();
    }
    return {
        addingNewBoard,
    }
})()

//***ADD NEW BOARD MODAL
const BoardFunctionsModal = (function () {
    //Funtion that controls the opening of the Add New Board Modal
    const openAddNewBoardModal = function () {
        BoardAddBoardModal.addBoardModal.classList.remove('hide');
    };
    //Function that controls the closing of the Add New Board Modal
    const closeAddNewBoardModal = function () {
        BoardAddBoardModal.addBoardModal.classList.add('hide');
        BoardAddBoardModal.inputField.value = "";
        BoardAddBoardModal.requiredFieldWarning.classList.add('hide');
    };
    //Function that saves the new board in Add New Board Modal
    const saveNewBoardModal = function () {
        if (BoardAddBoardModal.inputField.value === "" || BoardAddBoardModal.inputField.value === " ") {
            BoardAddBoardModal.requiredFieldWarning.classList.remove('hide')
        } else {
            BoardManagement.addingNewBoard();
            closeAddNewBoardModal();
        }

    }
    return {
        openAddNewBoardModal,
        closeAddNewBoardModal,
        saveNewBoardModal
    }
})()






export {
    BoardFunctionsModal, //used in index.js event listener

    BoardDisplay, //used in index.js to display board list in nav

}