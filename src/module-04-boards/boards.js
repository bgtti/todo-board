//In this file: board module functions and logic
import { allBoardsArray, arrayCounter, updateAllBoardsArray, updateBoardCounter } from "../module-00-app/app.js"
import { BoardAddBoardModal } from "./boards-add-board-modal.js"//needed here for html elements targeting.
import { BoardEditBoardModal } from "./boards-edit-board-modal.js"; //needed here for html elements targeting.
import { BoardDeleteBoardModal } from "./boards-delete-board-modal.js"; //needed here for html elements targeting.
import { NavLeft } from "../module-01-nav/nav-left"//needed here for html elements targeting.
import { PageContent, clearBodyPageContent } from "../module-02-body/body.js" //board page content appended to the body
import { BoardPage } from "./boards-page-display.js" //appended to the body by a function
import { TodoDisplay, TodoDeletionFunctions } from "../module-05-todos/todo.js" //import function to display todos on board, function to delete todos when board deleted

let boardAboutToBeDeleted; //set in modal management, used in board management functions

//*************** BOARD CONSTRUCTOR ***************
class Boards {
    constructor(boardName) {
        this.boardId = `board${arrayCounter}`;
        this.boardName = boardName;
        allBoardsArray.push(this);
        updateBoardCounter();
    }
}

//*************** BOARD DISPLAY FUNCTIONS ***************

const BoardDisplay = (function () {

    //Function that displays board page on the body section
    const displayBoardPage = function (bId) {
        clearBodyPageContent();
        //the header section:
        let boardToBeDisplayed = allBoardsArray.find(o => o.boardId === bId);
        BoardPage.boardName.textContent = `${boardToBeDisplayed["boardName"]}`;
        BoardPage.addToDoBtn.dataset.todoBoard = bId;
        BoardPage.editBoardBtn.dataset.editBoard = bId;
        BoardPage.deleteBoardBtn.dataset.deleteBoard = bId;
        (bId === "board0" || bId === "board1") ? BoardPage.deleteBoardBtn.classList.add('hide') : BoardPage.deleteBoardBtn.classList.remove('hide');
        (bId === "board0") ? BoardPage.editBoardBtn.classList.add('hide') : BoardPage.editBoardBtn.classList.remove('hide');
        //the todos:
        TodoDisplay.clearExistingCards(BoardPage.mainSection);
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

    //This function is used in index.js to load display the boards in the left Nav.
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

//*************** BOARD MANAGEMENT FUNCTIONS: ADD, EDIT, DELETE BOARD ***************

const BoardManagement = (function () {
    //Function that creates new boards. It uses the add new board modal - board is created when user presses 'save'.
    const addingNewBoard = function () {
        let copyOfCounter = arrayCounter;
        new Boards(BoardAddBoardModal.inputField.value);
        BoardDisplay.displayBoardsInNav();
        BoardDisplay.displayBoardPage(`board${copyOfCounter++}`);
    }
    //Function that updates existing boards. It uses the edit board modal - board name is updated when user presses 'save'.
    const changingBoardName = function (bId, newName) {
        for (let board of allBoardsArray) {
            if (board.boardId === bId) {
                board.boardName = newName;
            }
        }
        updateAllBoardsArray()
    }
    //Function that deletes the board
    const deleteBoard = function () {
        let newBoardsArray = allBoardsArray.filter(board => board.boardId != boardAboutToBeDeleted[0]);
        updateAllBoardsArray(newBoardsArray);
        TodoDeletionFunctions.deleteTodosBelongingToBoard(boardAboutToBeDeleted[0]);
        BoardDisplay.displayBoardsInNav();
        BoardDisplay.displayBoardPage("board0");
        BoardFunctionsModal.deleteBoardModalPostDeletionMessage();
        boardAboutToBeDeleted = undefined;
    }

    return {
        addingNewBoard,
        changingBoardName,
        deleteBoard
    }
})()

//*************** BOARD MODALS ***************
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
        if (BoardEditBoardModal.inputField.value === "" || BoardEditBoardModal.inputField.value === " ") {
            BoardEditBoardModal.requiredFieldWarning.classList.remove('hide')
        } else {
            BoardManagement.changingBoardName(boardBeingEdited, BoardEditBoardModal.inputField.value);
            BoardDisplay.displayBoardsInNav();
            BoardDisplay.displayBoardPage(boardBeingEdited);
            closeBoardModals(BoardEditBoardModal);
            boardBeingEdited = undefined;
        }
    }

    //DELETE BOARD MODAL
    const openDeleteBoardModal = function (e) {
        for (let board of allBoardsArray) {
            if (board.boardId === e.target.dataset.deleteBoard) {
                boardAboutToBeDeleted = [board.boardId, board.boardName];
            }
        }
        BoardDeleteBoardModal.objectToDelete.textContent = `Board "${boardAboutToBeDeleted[1]}" and its content are about to be deleted.`
        openBoardModals(BoardDeleteBoardModal.deleteBoardModal)
    }
    const closeDeleteBoardModal = function () {
        BoardDeleteBoardModal.deleteBoardModal.classList.add('hide');
        boardAboutToBeDeleted = undefined;
        BoardDeleteBoardModal.deleteButton.classList.remove('hide');
        BoardDeleteBoardModal.warningText.classList.remove('hide');
    }
    const deleteBoardModalPostDeletionMessage = function () {
        BoardDeleteBoardModal.objectToDelete.textContent = `Board "${boardAboutToBeDeleted[1]}" was successfully deleted.`;
        BoardDeleteBoardModal.deleteButton.classList.add('hide');
        BoardDeleteBoardModal.warningText.classList.add('hide');
    }


    return { //all used in index.js E.L.
        openBoardModals,
        closeBoardModals,
        saveNewBoardModal,
        openEditBoardModal,
        saveEditBoardModal,
        openDeleteBoardModal,
        closeDeleteBoardModal,
        deleteBoardModalPostDeletionMessage,
    }
})()


//*************** EXPORTS ***************

export {
    BoardFunctionsModal, //used in index.js event listener
    BoardDisplay, //used in index.js to display board list in nav
    BoardManagement, //used in index.js
}