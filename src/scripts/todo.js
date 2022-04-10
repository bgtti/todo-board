import { ToDoAddModal } from "./todoModals.js"; //input field and save button from this file used here.

let allTodosArray = [];
let todoCounter = 0;

class ToDoList {
    constructor(toDoId, boardId, title, priority, dueDate, description, note, checklist, checkeditems) {
        this.toDoId = `td${toDoId}`;
        this.boardId = boardId;
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.note = note;
        this.checklist = [checklist];
        this.checkedItems = [checkeditems];
        allTodosArray.push(this);
        todoCounter++;
    }
}
//function that displays all todos in board
const displayTodosInBoard = function () {
    console.log("whatev");
}

let priorityChosen = "0";
let checklistItems = [];
let checklistItemsChecked = [];

// const clearToDoAddModal = function(){
//     ToDoAddModal.inputFieldName.value = "";
//     ToDoAddModal.dueDateSelection.value = "";
//     ToDoAddModal.toDoDescription.value = "";
//     ToDoAddModal.toDoNotes.value = "";
// }

//Function that creates new todos
const addingNewTodo = function () {
    let theId = todoCounter;
    let theBoard = "???";
    let theTitle = ToDoAddModal.inputFieldName.value;
    let thePriority = "";
    let theDate = ToDoAddModal.dueDateSelection.value;
    let theDescription = ToDoAddModal.toDoDescription.value;
    let theNote = ToDoAddModal.toDoNotes.value;
    let theItems = "";
    let theCheckedItems = "";

}

//Function that displays all boards in left Nav. This function if used in index.js to load display the boards in the left Nav.
// const displayBoardsInNav = function () {
//     while (NavBars.boardsSection.firstChild) {
//         NavBars.boardsSection.removeChild(NavBars.boardsSection.firstChild)
//     };
//     const createElement = function (id, name) {
//         let boardInNavDiv = document.createElement('div');
//         boardInNavDiv.classList.add('nav-left-button');
//         boardInNavDiv.setAttribute('data-board', `board${id}`)//check if necessary

//         let boardsIcon = document.createElement('ion-icon');
//         boardsIcon.setAttribute('name', 'clipboard-outline');
//         boardsIcon.classList.add('nav-icon');
//         let boardTitle = document.createElement('h3');
//         boardTitle.textContent = name; //the name

//         boardInNavDiv.append(boardsIcon, boardTitle);

//         NavBars.boardsSection.append(boardInNavDiv);
//     };

//     for (let board of allBoardsArray) {
//         createElement(board[0], board[1]);
//     };
// }

//Function that creates new boards. It uses the boardsModals.js - board is created when user presses 'save'.
// const addingNewBoard = function () {
//     let theName = BoardAddBoardModal.inputField.value;
//     let theId = arrayCounter;
//     new Boards(theId, theName);
//     displayBoardsInNav();
// }
