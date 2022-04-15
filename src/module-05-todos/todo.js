import { ToDoAddModal, ToDoAddModalFunction } from "./todo-add-todo-modal.js"; //input field and save button from this file used here.
import { ToDoCard } from "./todo-card-display.js"; //displays cards on board
import { BoardPage } from "../module-04-boards/boards-page-display.js" //appends todo cards to board
import { allBoardsArray } from "../module-04-boards/boards.js" //reads existing boards

let allTodosArray = [];
let todoCounter = 0;

class ToDoList {
    constructor(title, boardId, priority, dueDate, description, note, checklist) {
        this.toDoId = `td${todoCounter}`;
        this.title = title;
        this.boardId = boardId;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.note = note;
        this.checklist = checklist;
        allTodosArray.push(this);
        todoCounter++;
    }
}

//Default to dos:
new ToDoList('My first to do', 'board1', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '');
new ToDoList('Yacka Lava', 'board1', '1', '', 'hvjsa jhsgjvsc scjhbsbv jbssbmsbscmnbc', '', '');
new ToDoList('Vacation todo', 'board1', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '');
new ToDoList('Yaliee', 'board2', '2', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '');
new ToDoList('Tralala', 'board2', '0', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '');
new ToDoList('Jukoukouko', 'board3', '3', '', 'This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla', '');

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
        toDoCardsDiv.classList.add('todo-cards-container');

        for (let todo of theTodosToDisplay) {
            ToDoCard.createCard(todo["toDoId"], todo["title"], todo["description"], todo["priority"], toDoCardsDiv);
        }
        BoardPage.mainSection.append(toDoCardsDiv);
    }

    return {
        displayTodosInBoard, //used in boards.js function to dislay according to board.
        clearExistingCards,
    }
})()




// const clearToDoAddModal = function(){
//     ToDoAddModal.inputFieldName.value = "";
//     ToDoAddModal.dueDateSelection.value = "";
//     ToDoAddModal.toDoDescription.value = "";
//     ToDoAddModal.toDoNotes.value = "";
// }




//***ADD NEW TODO MODAL
//Module with functions that manages new todo modal
const TodoFunctionsModal = (function () {
    //showing board options in add todo modal
    const showBoards = function (theboard) {
        while (ToDoAddModal.boardSelectTag.firstChild) {
            ToDoAddModal.boardSelectTag.removeChild(ToDoAddModal.boardSelectTag.firstChild);
        }
        let boardChoices = [...allBoardsArray];
        boardChoices.shift();

        for (let bChoice of boardChoices) {
            let choice = document.createElement('option');
            choice.setAttribute('value', bChoice["boardName"]);
            choice.setAttribute('data-bChoice', bChoice["boardId"]);
            choice.textContent = bChoice["boardName"];
            ToDoAddModal.boardSelectTag.append(choice);
            if (theboard === choice.getAttribute('data-bChoice')) {
                choice.selected = true;
            }
        }

    }

    //enabling/disabling note and checklist fields
    const enableNoteField = function (e) {
        e.target.checked === true ? ToDoAddModal.toDoNotesContainer.classList.remove('hide') : ToDoAddModal.toDoNotesContainer.classList.add('hide');
    }

    const enableChecklistField = function (e) {
        e.target.checked === true ? ToDoAddModal.toDoChecklistContainer.classList.remove('hide') : ToDoAddModal.toDoChecklistContainer.classList.add('hide');
    }
    //setting priority level
    let priorityLevelChosen = "0";

    const resetPriorityClass = function () {
        let elementList = ToDoAddModal.priorityLevelIconsContainer.childNodes;
        for (let element of elementList) {
            element.classList.remove('selected-priority-level');
        }
    }

    const checkPriority = function (e) {
        const changeTheClassOfPriorityContainer = function (targetEl) {
            resetPriorityClass();
            targetEl.classList.add('selected-priority-level');
        }
        if (e.target.dataset.setPriority === undefined && e.target.parentNode.dataset.setPriority) {
            priorityLevelChosen = e.target.parentNode.dataset.setPriority;
            changeTheClassOfPriorityContainer(e.target.parentNode);

        } else if (e.target.dataset.setPriority && e.target.parentNode.dataset.setPriority === undefined) {
            priorityLevelChosen = e.target.dataset.setPriority;
            changeTheClassOfPriorityContainer(e.target);
        }
    }
    //adding, removing and checking items to/from checklist
    let checkListItemsArray = [];

    const removeDisplayedCheckListItems = function () {
        while (ToDoAddModal.checklistUl.firstChild) {
            ToDoAddModal.checklistUl.removeChild(ToDoAddModal.checklistUl.firstChild);
        }
    }

    const showCheckList = function () {
        removeDisplayedCheckListItems();
        for (let checklistItem of checkListItemsArray) {
            ToDoAddModalFunction.addListItem(checkListItemsArray.indexOf(checklistItem), checklistItem[0], checklistItem[1]);
        }
    };

    const addChecklistItem = function () {
        if (ToDoAddModal.addToChecklist.value !== "") {
            checkListItemsArray.push([ToDoAddModal.addToChecklist.value, true]);
            ToDoAddModal.addToChecklist.value = "";
        }
        showCheckList();
    }

    const deleteChecklistItem = function (e) {
        if (e.target.dataset.itemIndexDelete) {
            checkListItemsArray.splice(e.target.dataset.itemIndexDelete, 1);
        }
        showCheckList();
    }

    const checkChecklistItem = function (e) {
        if (e.target.dataset.itemIndexCheck) {
            if (checkListItemsArray[e.target.dataset.itemIndexCheck][1] === true) {
                checkListItemsArray[e.target.dataset.itemIndexCheck][1] = false;
            } else {
                checkListItemsArray[e.target.dataset.itemIndexCheck][1] = true;
            }
        }
        showCheckList();
    }
    // resetting modal
    const addTodoModalReset = function () {
        ToDoAddModal.inputFieldName.value = "";
        ToDoAddModal.boardSelectTag.value = "";
        priorityLevelChosen = "0";
        resetPriorityClass();
        ToDoAddModal.priorityLevel0Container.classList.add('selected-priority-level');
        ToDoAddModal.dueDateSelection.value = "";
        ToDoAddModal.toDoDescription.value = "";
        ToDoAddModal.toDoNotes.value = "";
        ToDoAddModal.notesEnabledCheckBox.checked = false;
        ToDoAddModal.toDoNotesContainer.classList.add('hide');
        checkListItemsArray = [];
        removeDisplayedCheckListItems();
        ToDoAddModal.addToChecklist.value = "";
        ToDoAddModal.checklistEnabledCheckBox.checked = false;
        ToDoAddModal.toDoChecklistContainer.classList.add('hide');
    }


    //opening and closing add todo modal
    const openAddNewTodoModal = function (theboard) {
        let todoBoardPreSelection = theboard.target.dataset.todoBoard;

        showBoards(todoBoardPreSelection);
        ToDoAddModal.addToDoModal.classList.remove('hide');
    }
    const closeAddNewTodoModal = function () {
        ToDoAddModal.addToDoModal.classList.add('hide');
        addTodoModalReset();
        ToDoAddModal.addToDoModal.classList.add('hide');
    }
    //adding new todo
    const creatingNewToDoObject = function () {
        new ToDoList(
            ToDoAddModal.inputFieldName.value,
            ToDoAddModal.boardSelectTag.options[ToDoAddModal.boardSelectTag.selectedIndex].dataset.bchoice,
            priorityLevelChosen,
            ToDoAddModal.dueDateSelection.value,
            ToDoAddModal.toDoDescription.value,
            ToDoAddModal.toDoNotes.value,
            checkListItemsArray
        )
        console.log(allTodosArray) /////DELETE
        closeAddNewTodoModal();
    }
    // title, boardId, priority, dueDate, description, note, checklist
    return { //all returned items used in index.js to be used in E.L.
        openAddNewTodoModal,
        closeAddNewTodoModal,
        // showBoards,
        enableNoteField,
        enableChecklistField,
        addChecklistItem,
        deleteChecklistItem,
        checkChecklistItem,
        checkPriority,
        creatingNewToDoObject,
    }

})()

export {
    TodoFunctionsModal, //used in event listener index.js
    TodoDisplay // 
}
