//In this file: board module functions and logic
import { BoardAddBoardModal } from "./boards-add-board-modal.js"//needed here for html elements targeting.
import { BoardEditBoardModal } from "./boards-edit-board-modal.js"; //needed here for html elements targeting.
import { BoardDeleteBoardModal } from "./boards-delete-board-modal.js"; //needed here for html elements targeting.
import { NavLeft } from "./nav-left.js"//needed here for html elements targeting.
import { PageContent } from "../module-02-body/body.js" //board page content appended to the body
import { BoardPage } from "./boards-page-display.js" //appended to the body by a function
import { TodoDisplay } from "../module-05-todos/todo.js" //import function to display todos on board

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
        BoardPage.addToDoBtn.dataset.todoBoard = bId;
        BoardPage.editBoardBtn.dataset.editBoard = bId;
        BoardPage.deleteBoardBtn.dataset.deleteBoard = bId;
        (bId === "board0" || bId === "board1") ? BoardPage.deleteBoardBtn.classList.add('hide') : BoardPage.deleteBoardBtn.classList.remove('hide');
        (bId === "board0") ? BoardPage.editBoardBtn.classList.add('hide') : BoardPage.editBoardBtn.classList.remove('hide');

        //the todos
        TodoDisplay.clearExistingCards();
        TodoDisplay.displayTodosInBoard(bId);

        PageContent.theBody.append(BoardPage.topSection, BoardPage.mainSection);
    }

    //Function that gets the id of the board from Nav to display it
    const boardToDisplay = function (e) {
        let theTargetBoardId;
        if (e.target.dataset.dataBoardId === undefined && e.target.parentNode.dataset.dataBoardId) {
            theTargetBoardId = e.target.parentNode.dataset.dataBoardId;
        } else if (e.target.dataset.dataBoardId && e.target.parentNode.dataset.dataBoardId === undefined) {
            theTargetBoardId = e.target.dataset.dataBoardId;
        }
        displayBoardPage(theTargetBoardId);
    }

    //Function that displays all boards in left Nav. This function is used in index.js to load display the boards in the left Nav.
    const displayBoardsInNav = function () {
        while (NavLeft.boardsSection.firstChild) {
            NavLeft.boardsSection.removeChild(NavLeft.boardsSection.firstChild)
        };
        const createElement = function (bId, bName) {
            const boardInNavDiv = document.createElement('div');
            boardInNavDiv.classList.add('nav-left-button');
            boardInNavDiv.dataset.dataBoardId = bId; //the id

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
        displayBoardPage,
        boardToDisplay
    }
})()

//***BOARD MANAGEMENT FUNCTIONS
const BoardManagement = (function () {
    //Function that creates new boards. It uses the add new board modal - board is created when user presses 'save'.
    const addingNewBoard = function () {
        new Boards(BoardAddBoardModal.inputField.value);
        BoardDisplay.displayBoardsInNav();
    }
    //Function that updates existing boards. It uses the edit board modal - board name is updated when user presses 'save'.
    const changingBoardName = function (bId, newName) {
        for (let board of allBoardsArray) {
            if (board.boardId === bId) {
                board.boardName = newName;
            }
        }
    }
    return {
        addingNewBoard,
        changingBoardName,
    }
})()

//***BOARD MODALS
const BoardFunctionsModal = (function () {
    //GENERAL
    //Function that controls the opening of modals
    const openBoardModals = function (modal) {
        modal.classList.remove('hide')

    };
    //Function that controls the closing of add and edit modals
    const closeBoardModals = function (modal) {
        modal.addBoardModal.classList.add('hide');
        modal.inputField.value = "";
        modal.requiredFieldWarning.classList.add('hide');
    };

    //ADD NEW BOARD MODAL
    //Function that saves the new board in Add New Board Modal
    const saveNewBoardModal = function () {
        if (BoardAddBoardModal.inputField.value === "" || BoardAddBoardModal.inputField.value === " ") {
            BoardAddBoardModal.requiredFieldWarning.classList.remove('hide')
        } else {
            BoardManagement.addingNewBoard();
            closeBoardModals(BoardAddBoardModal);
        }
    }

    //EDIT BOARD MODAL
    //Funtion that controls the opening of the Add New Board Modal
    let boardBeingEdited;

    const openEditBoardModal = function (e) {
        for (let board of allBoardsArray) {
            if (board.boardId === e.target.dataset.editBoard) {
                BoardEditBoardModal.inputField.value = board.boardName;
                boardBeingEdited = board.boardId;
            }
        }
        openBoardModals(BoardEditBoardModal.addBoardModal);
    };
    //Function that renames board
    const saveEditBoardModal = function () {
        BoardManagement.changingBoardName(boardBeingEdited, BoardEditBoardModal.inputField.value);
        BoardDisplay.displayBoardsInNav();
        BoardDisplay.displayBoardPage(boardBeingEdited);
        console.log(allBoardsArray);
        closeBoardModals(BoardEditBoardModal);
        boardBeingEdited = undefined;
    }

    //DELETE BOARD MODAL
    const openDeleteBoardModal = function (e) {
        let bName;
        for (let board of allBoardsArray) {
            if (board.boardId === e.target.dataset.deleteBoard) {
                bName = board.boardName;
            }
        }
        BoardDeleteBoardModal.objectToDelete.textContent = `Board "${bName}" and its content are about to be deleted.`
        openBoardModals(BoardDeleteBoardModal.deleteBoardModal)
    }
    const closeDeleteBoardModal = function () {
        BoardDeleteBoardModal.deleteBoardModal.classList.add('hide');
    }


    return { //all used in index.js E.L.
        openBoardModals,
        closeBoardModals,
        saveNewBoardModal,
        openEditBoardModal,
        saveEditBoardModal,
        openDeleteBoardModal,
        closeDeleteBoardModal,
    }
})()





export {
    BoardFunctionsModal, //used in index.js event listener

    BoardDisplay, //used in index.js to display board list in nav
    allBoardsArray, //used in todo.js to access board options for adding a todo in modal.

}