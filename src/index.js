import "./index.css";
import { NavTop } from "./scripts/nav-top.js";
import { NavLeft } from "./scripts/nav-left.js";
import { NavMobile } from "./scripts/nav-mobile.js";
import { PageContent } from "./scripts/body.js"
import { BoardAddBoardModal } from "./scripts/boards-add-board-modal.js";
import { BoardDisplay, BoardFunctionsModal, } from "./scripts/boards.js";
import { BoardPage } from "./scripts/boards-page-display.js";
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
NavLeft.boardsSection.addEventListener('click', (e) => {
    console.log(e.target.getAttribute("data-board"));
})//*** PROBLEMATIC: doesnt work properly ***

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

TodoDisplay.displayTodosInBoard();


//Add new to-do modal: assigning priority level (attempted, not working)

// //none of this is working:
// [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container].forEach(item => {
//     item.addEventListener("click", (e) => {

//         let allElements = [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container];
//         let removeAndAddClass = function () {
//             for (let element of allElements) {
//                 element.classList.remove('selected-priority-level');
//             }
//             e.target.classList.add('selected-priority-level')
//         }
//         removeAndAddClass();
//         console.log(e.target.dataset.plevel);


//         // let chosenPriority = e.target.getAttribute('data-value');
//         // ToDoAddModal.priorityLevelIconsContainer.setAttribute('data-value', chosenPriority);
//     }, false);
// })


// // [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container].forEach(item => {
// //     item.addEventListener("click", (e) => {
// //         let priorityOptions = [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container];
// //         for (let option of priorityOptions) {
// //             option.classList.remove('selected-priority-level') //for some bizarre reason stops working
// //             console.log("yes")
// //         };

// //         e.target.classList.add('selected-priority-level')
// //         // let chosenPriority = e.target.getAttribute('data-value');
// //         // ToDoAddModal.priorityLevelIconsContainer.setAttribute('data-value', chosenPriority);
// //     }, false);
// // })


