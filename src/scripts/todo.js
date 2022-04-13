import { ToDoAddModal } from "./todo-add-todo-modal.js"; //input field and save button from this file used here.
import { ToDoCard } from "./todo-card-display.js"; //displays cards on board
import { BoardPage } from "./boards-page-display.js" //appends todo cards to board

let allTodosArray = [];
let todoCounter = 0;

class ToDoList {
    constructor(boardId, title, priority, dueDate, description, note, checklist, checkeditems) {
        this.toDoId = `td${todoCounter}`;
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

//Default to dos:
new ToDoList('board1', 'My first to do', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '', '');
new ToDoList('board1', 'Yacka Lava', '1', '', 'hvjsa jhsgjvsc scjhbsbv jbssbmsbscmnbc', '', '');
new ToDoList('board1', 'Vacation todo', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '', '');
new ToDoList('board2', 'Yaliee', '2', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '', '');
new ToDoList('board2', 'Tralala', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '', '');
new ToDoList('board3', 'Jukoukouko', '1', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '', '');

//function that displays all todos in board
const TodoDisplay = (function () {
    const clearExistingCards = function () {
        while (BoardPage.mainSection.firstChild) {
            BoardPage.mainSection.removeChild(BoardPage.mainSection.firstChild);
        };
    }
    const displayTodosInBoard = function (bId) {

        let theTodosToDisplay = [];
        if (bId === "board0") {
            theTodosToDisplay = [...allTodosArray]
        } else {
            theTodosToDisplay = allTodosArray.filter(todos => todos["boardId"] === bId)
        };

        let toDoCardsDiv = document.createElement('div');

        for (let todo of theTodosToDisplay) {
            ToDoCard.createCard(todo["toDoId"], todo["title"], todo["description"], toDoCardsDiv);
        }
        BoardPage.mainSection.append(toDoCardsDiv);
    }

    return {
        displayTodosInBoard, //used in boards.js function to dislay according to board.
        clearExistingCards,
    }
})()


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

//***ADD NEW TODO MODAL
//Function that manages new todo modal
const TodoFunctionsModal = (function () {

    const openAddNewTodoModal = function () {
        ToDoAddModal.addToDoModal.classList.remove('hide');
    }

    const closeAddNewTodoModal = function () {
        ToDoAddModal.addToDoModal.classList.add('hide');
        //clear all fields here
        ToDoAddModal.addToDoModal.classList.add('hide');
    }

    const enableNoteField = function (e) {
        e.target.checked === true ? ToDoAddModal.toDoNotesContainer.classList.remove('hide') : ToDoAddModal.toDoNotesContainer.classList.add('hide');
    }

    const enableChecklistField = function (e) {
        e.target.checked === true ? ToDoAddModal.toDoChecklistContainer.classList.remove('hide') : ToDoAddModal.toDoChecklistContainer.classList.add('hide');
    }

    return {
        openAddNewTodoModal,
        closeAddNewTodoModal,
        enableNoteField,
        enableChecklistField
    }

})()

export {
    TodoFunctionsModal, //used in event listener index.js
    TodoDisplay // 
}
