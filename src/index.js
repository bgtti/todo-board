import "./index.css";
import { NavTop } from "./scripts/nav-top.js";
import { NavLeft } from "./scripts/nav-left.js";
import { NavMobile } from "./scripts/nav-mobile.js";
import { PageContent } from "./scripts/body.js"
import { BoardAddBoardModal } from "./scripts/boards-add-board-modal.js";
import { BoardDisplay, BoardFunctionsModal, } from "./scripts/boards.js";
import { BoardPage } from "./scripts/boards-page-display.js";
import { testFunction } from "./scripts/boards-edit-board-modal.js";
import { TodoFunctionsModal, TodoDisplay } from "./scripts/todo.js";
import { ToDoAddModal } from "./scripts/todo-add-todo-modal.js";
import { Footer } from "./scripts/footer.js";


//***THE PAGE STRUCTURE
//Main page structure
const theHTML = document.querySelector("#content");

const theMiddle = document.createElement("div");
theMiddle.classList.add('middle-div')

// const theBody = document.createElement("div");
// theBody.classList.add('the-body');

theMiddle.append(NavLeft.leftNavBar, PageContent.theBody);

theHTML.append(NavTop.topNavbar);
theHTML.append(theMiddle);
theHTML.append(Footer.theFooter);

//Modals
theMiddle.append(BoardAddBoardModal.addBoardModal);
theMiddle.append(ToDoAddModal.addToDoModal);

//Displaying the boards in the Nav upon page load
BoardDisplay.displayBoardsInNav();

//Displaying all boards page upon page load
BoardDisplay.displayBoardPage("board0");


//***EVENT LISTENERS

//E.L. for nav module: mobile navigation:
window.addEventListener('load', NavMobile.navMobileTrigger);
window.addEventListener('resize', NavMobile.navMobileTrigger);
NavTop.mobileBurger.addEventListener('click', NavMobile.navMobileControl, false);

//E.L. for nav board buttons: displaying the different boards
NavLeft.boardsSection.addEventListener('click',
    BoardDisplay.boardToDisplay
)//*** PROBLEMATIC: doesnt work properly ***

//E.L. for board module: add new board modal: open/close/save
NavLeft.addBoardDiv.addEventListener('click', BoardFunctionsModal.openAddNewBoardModal, false);
BoardAddBoardModal.closeModalIcon.addEventListener('click', BoardFunctionsModal.closeAddNewBoardModal, false);
BoardAddBoardModal.saveBoardButton.addEventListener('click', BoardFunctionsModal.saveNewBoardModal, false);

//E.L. for todo module: add new todo modal: open/close
BoardPage.addToDoBtn.addEventListener('click', TodoFunctionsModal.openAddNewTodoModal, false);
ToDoAddModal.closeModalIcon.addEventListener('click', TodoFunctionsModal.closeAddNewTodoModal, false);

//E.L. for todo module: add new todo modal: hide and unhide note and checklist options
ToDoAddModal.notesEnabledCheckBox.addEventListener("click", TodoFunctionsModal.enableNoteField, false);
ToDoAddModal.checklistEnabledCheckBox.addEventListener("click", TodoFunctionsModal.enableChecklistField, false);

//E.L. for todo module: add and remove items to/from checklist, check items in list
ToDoAddModal.addToChecklistBtn.addEventListener("click", TodoFunctionsModal.addChecklistItem, false);
ToDoAddModal.checklistUl.addEventListener("click", TodoFunctionsModal.deleteChecklistItem, false);
ToDoAddModal.checklistUl.addEventListener("click", TodoFunctionsModal.checkChecklistItem, false);

//E.L. for todo module: set priority
ToDoAddModal.priorityLevelIconsContainer.addEventListener("click", TodoFunctionsModal.checkPriority);

//E.L. for todo module: save todo
ToDoAddModal.saveToDoButton.addEventListener('click', () => {
    TodoFunctionsModal.creatingNewToDoObject();
    BoardDisplay.displayBoardPage("board0"); ////CHANGE!!!!!
}, false);

// TodoDisplay.displayTodosInBoard();

// BoardPage


testFunction();

