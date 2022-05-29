import { allBoardsArray, allTodosArray, todoCounter, updateAllTodosArray, updateTodoCounter } from "../module-00-app/app.js"
import { ToDoAddModal, ToDoAddModalFunction } from "./todo-add-todo-modal.js"; //input field and save button from this file used here.
import { ToDoCard } from "./todo-card-display.js"; //displays cards on board
import { BoardPage } from "../module-04-boards/boards-page-display.js" //appends todo cards to board
import { TodoDeleteTodoModal } from "./todo-delete-todo-modal.js" //open modal, delete todo
import { SchedulePage } from "../module-06-schedule/schedule-page-display.js" //appends todo cards to schedule

//*************** TODO CONSTRUCTOR ***************
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
        updateTodoCounter();
    }
}

//*************** TODO CARD DISPLAY ***************
//function that displays all todos in board
const TodoDisplay = (function () {
    const clearExistingCards = function (target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        };
    }

    let theTodosToDisplay = [];

    const createCardDiv = function () {
        let toDoCardsDiv = document.createElement('div');
        toDoCardsDiv.classList.add('todo-cards-container');

        for (let todo of theTodosToDisplay) {
            ToDoCard.createCard(todo["toDoId"], todo["title"], todo["dueDate"], todo["description"], todo["priority"], todo["note"], todo["checklist"], toDoCardsDiv);
        }

        return toDoCardsDiv
    }
    const displayTodosInBoard = function (bId) {
        if (bId === "board0") {
            theTodosToDisplay = [...allTodosArray]
        } else {
            theTodosToDisplay = allTodosArray.filter(todos => todos["boardId"] === bId)
        };

        BoardPage.mainSection.append(createCardDiv())
    }

    const displayTodosInSchedule = function (startDate, endDate) {
        theTodosToDisplay = allTodosArray.filter(todos =>
            todos["dueDate"] >= startDate && todos["dueDate"] < endDate
        );
        theTodosToDisplay.sort(function (a, b) {
            if (a.dueDate < b.dueDate) {
                return -1;
            }
            if (a.dueDate > b.dueDate) {
                return 1;
            }
            return 0;
        })
        SchedulePage.mainSection.append(createCardDiv())
    }

    return {
        displayTodosInBoard, //used in boards.js function to display according to board.
        clearExistingCards,
        displayTodosInSchedule
    }
})()

//*************** ADD NEW TODO MODAL ***************
//Module with functions that manages new todo modal

const TodoFunctionsModal = (function () {
    //showing board options in add todo modal
    const showBoards = function (theboard) {
        TodoDisplay.clearExistingCards(ToDoAddModal.boardSelectTag);
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
        ToDoAddModal.requiredFieldWarning.classList.add('hide');
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
        ToDoAddModal.saveToDoButton.dataset.existingToDo = undefined;
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
        if (ToDoAddModal.inputFieldName.value === "" || ToDoAddModal.inputFieldName.value === " ") {
            ToDoAddModal.requiredFieldWarning.classList.remove('hide')
        } else {
            let theBoardChosen = ToDoAddModal.boardSelectTag.options[ToDoAddModal.boardSelectTag.selectedIndex].dataset.bchoice;
            new ToDoList(
                ToDoAddModal.inputFieldName.value,
                theBoardChosen,
                priorityLevelChosen,
                ToDoAddModal.dueDateSelection.value,
                ToDoAddModal.toDoDescription.value,
                ToDoAddModal.toDoNotes.value,
                checkListItemsArray
            )
            closeAddNewTodoModal();
            return theBoardChosen
        }

    }
    //Editing Todo
    const openingEditTodoModal = function (e) {
        if (!e.target.dataset.editTodo) return
        ToDoAddModal.modalHeading.textContent = "Edit Todo";
        let todoToEdit;
        for (let todo of allTodosArray) {
            if (todo.toDoId === e.target.dataset.editTodo) todoToEdit = todo;
        }
        showBoards(todoToEdit.boardId);

        //Retrieving board values
        ToDoAddModal.inputFieldName.value = todoToEdit.title;
        resetPriorityClass();
        let priorityContainer = document.querySelector(`[data-set-priority="${todoToEdit.priority}"]`);
        priorityContainer.classList.add('selected-priority-level');
        ToDoAddModal.toDoDescription.value = todoToEdit.description;
        ToDoAddModal.dueDateSelection.value = todoToEdit.dueDate;
        if (todoToEdit.note === null || undefined || "" || " ") {
            ToDoAddModal.notesEnabledCheckBox.checked = false;
        };
        if (todoToEdit?.note) {
            ToDoAddModal.notesEnabledCheckBox.checked = true;
            ToDoAddModal.toDoNotesContainer.classList.remove('hide');
            ToDoAddModal.toDoNotes.value = todoToEdit.note;
        }
        if (todoToEdit.checklist.length === 0) {
            ToDoAddModal.checklistEnabledCheckBox.checked = false;
        } else {
            ToDoAddModal.checklistEnabledCheckBox.checked = true;
            ToDoAddModal.toDoChecklistContainer.classList.remove('hide');
            checkListItemsArray = [...todoToEdit.checklist];
            showCheckList();
        }

        //Adding data set to save button
        ToDoAddModal.saveToDoButton.dataset.existingToDo = todoToEdit.toDoId;

        // open modal with values
        ToDoAddModal.addToDoModal.classList.remove('hide');
    }

    //Saving edited todo
    const savingExistingTodo = function (e) {

        function whichTodo(todo) {
            return todo.toDoId === e.target.dataset.existingToDo
        }
        let theExistingTodo = allTodosArray.find(whichTodo)
        let theExistingTodoIndex = allTodosArray.findIndex(whichTodo)

        if (ToDoAddModal.inputFieldName.value === "" || ToDoAddModal.inputFieldName.value === " ") {
            ToDoAddModal.requiredFieldWarning.classList.remove('hide')
        } else {
            theExistingTodo.title = ToDoAddModal.inputFieldName.value;
            theExistingTodo.boardId = ToDoAddModal.boardSelectTag.options[ToDoAddModal.boardSelectTag.selectedIndex].dataset.bchoice;

            theExistingTodo.priority = priorityLevelChosen;
            theExistingTodo.dueDate = ToDoAddModal.dueDateSelection.value; //date needed here!!!!!
            theExistingTodo.description = ToDoAddModal.toDoDescription.value;
            theExistingTodo.note = ToDoAddModal.toDoNotes.value;
            theExistingTodo.checklist = checkListItemsArray;

            allTodosArray[theExistingTodoIndex] = theExistingTodo;
            closeAddNewTodoModal();
            updateAllTodosArray();
            return theExistingTodo.boardId
        }
    }

    return { //all returned items used in index.js to be used in E.L.
        openAddNewTodoModal,
        closeAddNewTodoModal,
        enableNoteField,
        enableChecklistField,
        addChecklistItem,
        deleteChecklistItem,
        checkChecklistItem,
        checkPriority,
        creatingNewToDoObject,
        openingEditTodoModal,
        savingExistingTodo,
    }
})()

//*************** DELETING TODO ***************

const TodoDeletionFunctions = (function () {
    let todoUpForDeletion;
    //open delete todo modal
    const openDeleteTodoModal = function (e) {
        if (!e.target.dataset.deleteTodo) return

        let todoToDelete;
        for (let todo of allTodosArray) {
            if (todo.toDoId === e.target.dataset.deleteTodo) todoToDelete = todo;
        }
        todoUpForDeletion = [todoToDelete.toDoId, todoToDelete.title, todoToDelete.boardId];

        TodoDeleteTodoModal.warningText.classList.remove('hide');
        TodoDeleteTodoModal.deleteButton.classList.remove('hide');
        TodoDeleteTodoModal.modalHeading.textContent = "Delete to-do";
        TodoDeleteTodoModal.objectToDelete.textContent = `To-do "${todoToDelete.title}" and its content are about to be deleted.`
        TodoDeleteTodoModal.deleteTodoModal.classList.remove('hide');
    }

    //close delete todo modal
    const closeDeleteTodoModal = function () {
        TodoDeleteTodoModal.deleteTodoModal.classList.add('hide');
        todoUpForDeletion = undefined;

    }

    //delete todo
    const deleteTodo = function () {
        let newTodosArray = allTodosArray.filter(todo => todo.toDoId != todoUpForDeletion[0]);
        updateAllTodosArray(newTodosArray);

        TodoDeleteTodoModal.modalHeading.textContent = "To-do deleted";
        TodoDeleteTodoModal.objectToDelete.textContent = `To-do "${todoUpForDeletion[1]}" has been deleted successfully.`
        TodoDeleteTodoModal.warningText.classList.add('hide');
        TodoDeleteTodoModal.deleteButton.classList.add('hide');

        return todoUpForDeletion[2]
    }

    //delete all todos associated with a particular board (used in boards.js when deleting board)
    const deleteTodosBelongingToBoard = function (theBoard) {
        let newTodosArray = allTodosArray.filter(todo => todo.boardId != theBoard);
        updateAllTodosArray(newTodosArray);
    }

    return {
        openDeleteTodoModal,
        closeDeleteTodoModal,
        deleteTodo,
        deleteTodosBelongingToBoard
    }
})()

//*************** EXPORTS ***************
export {
    TodoFunctionsModal, //used in event listener index.js
    TodoDisplay,
    TodoDeletionFunctions
}