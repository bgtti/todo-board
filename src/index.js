import "../src/index.css";
import { Footer } from "./scripts/footer.js";
import { NavBars } from "./scripts/nav.js";
import { BoardAddBoardModal } from "./scripts/boardsModals.js";
import { allBoardsArray, displayBoardsInNav, addingNewBoard } from "./scripts/boards.js";
import { BoardContentDisplay } from "./scripts/boardsContent.js";
import { ToDoAddModal } from "./scripts/todoModals.js";


let theHTML = document.querySelector("#content");
let theMiddle = document.createElement("div");
theMiddle.classList.add('middle-div')
let theBody = document.createElement("div");
theBody.classList.add('the-body');

theMiddle.append(NavBars.leftNavBar, theBody);
// theMiddle.append(BoardAddBoardModal.addBoardModal);
theMiddle.append(ToDoAddModal.addToDoModal);

theHTML.append(NavBars.topNavbar);
theHTML.append(theMiddle);
theHTML.append(Footer.theFooter);

displayBoardsInNav();

//************EVENT LISTENERS************ */

//EVENT LISTENERS: BOARD
//Add board button: open and close
document.getElementById('navAddBoardButton').addEventListener("click", () => {
    BoardAddBoardModal.addBoardModal.classList.remove('hide');
}, false);
BoardAddBoardModal.closeModalIcon.addEventListener("click", () => {
    BoardAddBoardModal.addBoardModal.classList.add('hide');
    BoardAddBoardModal.inputField.value = "";
    BoardAddBoardModal.requiredFieldWarning.classList.add('hide');
}, false)

//Save new board
//Event listener of modal save button to create new board
BoardAddBoardModal.saveBoardButton.addEventListener("click", () => {
    if (BoardAddBoardModal.inputField.value === "" || BoardAddBoardModal.inputField.value === " ") {
        BoardAddBoardModal.requiredFieldWarning.classList.remove('hide')
    } else {
        BoardAddBoardModal.requiredFieldWarning.classList.add('hide');
        addingNewBoard();
        BoardAddBoardModal.addBoardModal.classList.add('hide');
        BoardAddBoardModal.inputField.value = "";
    }
    console.log(allBoardsArray);
}, false)

//EVENTLISTENERS: TO DO
//Add new to-do modal: open and close
BoardContentDisplay.addToDoBtn.addEventListener("click", () => {
    ToDoAddModal.addToDoModal.classList.remove('hide');
}, false);


ToDoAddModal.closeModalIcon.addEventListener("click", () => {
    ToDoAddModal.addToDoModal.classList.add('hide');
    //clear all fields here
    ToDoAddModal.addToDoModal.classList.add('hide');
}, false);

//Add new to-do modal: hide and unhide note and checklist options

ToDoAddModal.notesEnabledCheckBox.addEventListener("click", (e) => {
    e.target.checked === true ? ToDoAddModal.toDoNotesContainer.classList.remove('hide') : ToDoAddModal.toDoNotesContainer.classList.add('hide');
}, false);

ToDoAddModal.checklistEnabledCheckBox.addEventListener("click", (e) => {
    e.target.checked === true ? ToDoAddModal.toDoChecklistContainer.classList.remove('hide') : ToDoAddModal.toDoChecklistContainer.classList.add('hide');
}, false);
//Add new to-do modal: assigning priority level

//none of this is working
[ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container].forEach(item => {
    item.addEventListener("click", (e) => {

        let allElements = [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container];
        let removeAndAddClass = function () {
            for (let element of allElements) {
                element.classList.remove('selected-priority-level');
            }
            e.target.classList.add('selected-priority-level')
        }
        removeAndAddClass();
        console.log(e.target.dataset.plevel);


        // let chosenPriority = e.target.getAttribute('data-value');
        // ToDoAddModal.priorityLevelIconsContainer.setAttribute('data-value', chosenPriority);
    }, false);
})


// [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container].forEach(item => {
//     item.addEventListener("click", (e) => {
//         let priorityOptions = [ToDoAddModal.priorityLevel0Container, ToDoAddModal.priorityLevel1Container, ToDoAddModal.priorityLevel2Container];
//         for (let option of priorityOptions) {
//             option.classList.remove('selected-priority-level') //for some bizarre reason stops working
//             console.log("yes")
//         };

//         e.target.classList.add('selected-priority-level')
//         // let chosenPriority = e.target.getAttribute('data-value');
//         // ToDoAddModal.priorityLevelIconsContainer.setAttribute('data-value', chosenPriority);
//     }, false);
// })



//**********************TO BE CHANGED*************** */
//Displaying selected board content
theBody.append(BoardContentDisplay.topSection, BoardContentDisplay.mainSection)



console.log(allBoardsArray)
