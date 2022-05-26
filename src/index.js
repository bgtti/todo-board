//*************** IMPORTS ***************
import "./index.css";
import { updateLocalStorage } from "./module-00-app/app.js"
// import { retrieveLocalStorage } from "./module-07-localStorage/localStorage.js"
import { NavTop } from "./module-01-nav/nav-top";
import { NavLeft } from "./module-01-nav/nav-left";
import { NavMobile } from "./module-01-nav/nav-mobile";
import { PageContent } from "./module-02-body/body.js"
import { BoardAddBoardModal } from "./module-04-boards/boards-add-board-modal.js";
import { BoardDisplay, BoardFunctionsModal, BoardManagement } from "./module-04-boards/boards.js";
import { BoardPage } from "./module-04-boards/boards-page-display.js";
import { BoardEditBoardModal } from "./module-04-boards/boards-edit-board-modal.js";
import { BoardDeleteBoardModal } from './module-04-boards/boards-delete-board-modal.js';
import { TodoFunctionsModal, TodoDisplay, TodoDeletionFunctions } from "./module-05-todos/todo.js";
import { ToDoAddModal } from "./module-05-todos/todo-add-todo-modal.js";
import { TodoDeleteTodoModal } from "./module-05-todos/todo-delete-todo-modal.js"
import { ScheduleDisplay } from "./module-06-schedule/schedule.js"
import { Footer } from "./module-03-footer/footer.js";

//boardToShow

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
theMiddle.append(BoardEditBoardModal.addBoardModal);
theMiddle.append(ToDoAddModal.addToDoModal);
theMiddle.append(BoardDeleteBoardModal.deleteBoardModal);
theMiddle.append(TodoDeleteTodoModal.deleteTodoModal);

//Displaying the boards in the Nav upon page load
BoardDisplay.displayBoardsInNav();

//Displaying all boards page upon page load
BoardDisplay.displayBoardPage("board0");


//***EVENT LISTENERS
//LOCAL STORAGE
//E.L. for local storage module: importing data on load
// window.addEventListener('load', retrieveLocalStorage);

//NAV
//E.L. for nav module: mobile navigation: 
window.addEventListener('load', NavMobile.navMobileTrigger);
window.addEventListener('resize', NavMobile.navMobileTrigger);
NavTop.mobileBurger.addEventListener('click', NavMobile.navMobileControl, false);

//E.L. for nav board buttons: displaying the different boards
NavLeft.boardsSection.addEventListener('click', BoardDisplay.boardToDisplay);
//E.L. for nav schedule buttons: displaying the different schedules
NavLeft.scheduleDiv1.addEventListener('click', ScheduleDisplay.displayToday);
NavLeft.scheduleDiv2.addEventListener('click', ScheduleDisplay.displayWeek);

//BOARD
//E.L. for board module: add new board modal: open/close/save
NavLeft.addBoardDiv.addEventListener('click', () => { BoardFunctionsModal.openBoardModals(BoardAddBoardModal.addBoardModal) }, false);
BoardAddBoardModal.closeModalIcon.addEventListener('click', () => { BoardFunctionsModal.closeBoardModals(BoardAddBoardModal) }, false)
BoardAddBoardModal.saveBoardButton.addEventListener('click', BoardFunctionsModal.saveNewBoardModal, false);
//E.L. for board module: edit board: open/close/save
BoardPage.editBoardBtn.addEventListener('click', BoardFunctionsModal.openEditBoardModal, false);
BoardEditBoardModal.closeModalIcon.addEventListener('click', () => { BoardFunctionsModal.closeBoardModals(BoardEditBoardModal) }, false)
BoardEditBoardModal.saveBoardButton.addEventListener('click', BoardFunctionsModal.saveEditBoardModal, false);
//E.L. for board module: delete board: open/close/delete
BoardPage.deleteBoardBtn.addEventListener('click', BoardFunctionsModal.openDeleteBoardModal, false);
BoardDeleteBoardModal.closeModalIcon.addEventListener('click', BoardFunctionsModal.closeDeleteBoardModal, false);
BoardDeleteBoardModal.deleteButton.addEventListener('click', BoardManagement.deleteBoard, false);

//TODO
//E.L. for todo module: add new todo modal: open/close
BoardPage.addToDoBtn.addEventListener('click', TodoFunctionsModal.openAddNewTodoModal, false);
ToDoAddModal.closeModalIcon.addEventListener('click', TodoFunctionsModal.closeAddNewTodoModal, false);
//E.L. for todo module: add new todo modal: hide and unhide note and checklist options
ToDoAddModal.notesEnabledCheckBox.addEventListener("click", TodoFunctionsModal.enableNoteField, false);
ToDoAddModal.checklistEnabledCheckBox.addEventListener("click", TodoFunctionsModal.enableChecklistField, false);
//E.L. for todo module: add new todo modal: add and remove items to/from checklist, check items in list
ToDoAddModal.addToChecklistBtn.addEventListener("click", TodoFunctionsModal.addChecklistItem, false);
ToDoAddModal.checklistUl.addEventListener("click", TodoFunctionsModal.deleteChecklistItem, false);
ToDoAddModal.checklistUl.addEventListener("click", TodoFunctionsModal.checkChecklistItem, false);

//E.L. for todo module: edit todo modal: open
// BoardPage.mainSection.addEventListener('click', TodoFunctionsModal.openingEditTodoModal, false);
PageContent.theBody.addEventListener('click', TodoFunctionsModal.openingEditTodoModal, false);

//E.L. for todo module: set priority
ToDoAddModal.priorityLevelIconsContainer.addEventListener("click", TodoFunctionsModal.checkPriority);
//E.L. for todo module: save todo
ToDoAddModal.saveToDoButton.addEventListener('click', (e) => {
    let boardToShow;
    if (!ToDoAddModal.saveToDoButton.dataset.existingToDo || ToDoAddModal.saveToDoButton.dataset.existingToDo === "undefined") {
        boardToShow = TodoFunctionsModal.creatingNewToDoObject();
    } else {
        boardToShow = TodoFunctionsModal.savingExistingTodo(e);
    }

    BoardDisplay.displayBoardPage(boardToShow);
}, false);

//E.L for todo module: delete todo: open/close/delete
PageContent.theBody.addEventListener('click', TodoDeletionFunctions.openDeleteTodoModal, false);
TodoDeleteTodoModal.closeModalIcon.addEventListener('click', TodoDeletionFunctions.closeDeleteTodoModal, false);
TodoDeleteTodoModal.deleteButton.addEventListener('click', () => {
    BoardDisplay.displayBoardPage(TodoDeletionFunctions.deleteTodo());
}, false);

//SCHEDULE
//E.L. for schedule module: today





