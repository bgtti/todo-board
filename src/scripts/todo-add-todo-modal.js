import "../styles/modals.css";
import "../index.css";

//***This is the UI for the modal to add new to do card***

let ToDoAddModal = (function () {
    //modal container
    let addToDoModal = document.createElement('div');
    addToDoModal.classList.add('modal-container', 'hide');

    //subcontainer: modal content
    let subContainerModal = document.createElement('div');
    subContainerModal.classList.add('modal-container-sub');
    subContainerModal.classList.add('todo-modal-add-todo-container-sub');

    //heading and close icon
    let modalTitleContainer = document.createElement('div');
    modalTitleContainer.classList.add('modal-container-title-div');

    let modalHeading = document.createElement('h3');
    modalHeading.textContent = "Add to-do";

    let closeModalIcon = document.createElement('ion-icon');
    closeModalIcon.classList.add('modal-icon-close');
    closeModalIcon.setAttribute('name', 'close-outline');

    modalTitleContainer.append(modalHeading, closeModalIcon);

    //to-do title 
    let toDoTitleContainer = document.createElement('div');
    toDoTitleContainer.classList.add('modal-label-and-field-horizontal');

    let labelForToDoName = document.createElement('label');
    labelForToDoName.setAttribute('for', 'todoName');
    labelForToDoName.textContent = "To-do title: ";
    labelForToDoName.classList.add('modal-label-and-field-horizontal-label');

    let inputFieldName = document.createElement('input');
    inputFieldName.setAttribute('id', 'todoName');
    inputFieldName.setAttribute('type', 'text');
    inputFieldName.setAttribute('maxlength', '15');
    inputFieldName.classList.add('modal-label-and-field-horizontal-input');

    toDoTitleContainer.append(labelForToDoName, inputFieldName);

    //required field warning 
    let requiredFieldWarning = document.createElement('p');
    requiredFieldWarning.textContent = "To-do title is a required field.";
    requiredFieldWarning.classList.add('required-field-warning');
    requiredFieldWarning.classList.add('todo-modal-add-todo-required-field-warning');
    requiredFieldWarning.classList.add('hide'); //DONT FORGET TO UNHIDE

    //board selection
    let boardSelectionContainer = document.createElement('div');
    boardSelectionContainer.classList.add('modal-label-and-field-horizontal');

    let labelForBoard = document.createElement('label');
    labelForBoard.setAttribute('for', 'boardSelection');
    labelForBoard.textContent = "Board: ";
    labelForBoard.classList.add('modal-label-and-field-horizontal-label');

    let boardSelectTag = document.createElement('select');
    boardSelectTag.setAttribute('id', 'boardSelection');
    boardSelectTag.setAttribute('name', 'boardSelection');
    boardSelectTag.classList.add('modal-label-and-field-horizontal-input');

    boardSelectionContainer.append(labelForBoard, boardSelectTag);

    //priority level
    let prioritySettingContainer = document.createElement('div');
    prioritySettingContainer.classList.add('modal-label-and-field-horizontal');

    let labelForPriority = document.createElement('label');
    labelForPriority.setAttribute('for', 'priorityLevel');
    labelForPriority.textContent = "Priority level: ";
    labelForPriority.classList.add('modal-label-and-field-horizontal-label');

    let priorityLevelIconsContainer = document.createElement('div');
    priorityLevelIconsContainer.classList.add('todo-modal-add-todo-priority-icons-container')
    priorityLevelIconsContainer.classList.add('modal-label-and-field-horizontal-input');

    let priorityLevel0Container = document.createElement('div');
    priorityLevel0Container.dataset.setPriority = "0";
    priorityLevel0Container.classList.add('priority-flag-button');
    priorityLevel0Container.classList.add('selected-priority-level');
    let priorityLevel0 = document.createElement('ion-icon');
    priorityLevel0.setAttribute('name', 'flag');
    priorityLevel0.classList.add('priority-level-0');
    priorityLevel0Container.append(priorityLevel0);

    let priorityLevel1Container = document.createElement('div');
    priorityLevel1Container.dataset.setPriority = "1";
    priorityLevel1Container.classList.add('priority-flag-button');
    let priorityLevel1 = document.createElement('ion-icon');
    priorityLevel1.setAttribute('name', 'flag');
    priorityLevel1.classList.add('priority-level-1');
    priorityLevel1Container.append(priorityLevel1);

    let priorityLevel2Container = document.createElement('div');
    priorityLevel2Container.dataset.setPriority = "2";
    priorityLevel2Container.classList.add('priority-flag-button');
    let priorityLevel2 = document.createElement('ion-icon');
    priorityLevel2.setAttribute('name', 'flag');
    priorityLevel2.classList.add('priority-level-2');
    priorityLevel2Container.append(priorityLevel2);

    let priorityLevel3Container = document.createElement('div');
    priorityLevel3Container.dataset.setPriority = "3";
    priorityLevel3Container.classList.add('priority-flag-button');
    let priorityLevel3 = document.createElement('ion-icon');
    priorityLevel3.setAttribute('name', 'checkmark-done');
    priorityLevel3.classList.add('priority-level-3');
    priorityLevel3Container.append(priorityLevel3);

    priorityLevelIconsContainer.append(priorityLevel0Container, priorityLevel1Container, priorityLevel2Container, priorityLevel3Container);

    prioritySettingContainer.append(labelForPriority, priorityLevelIconsContainer);

    //due date
    let dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('modal-label-and-field-horizontal');

    let labelForDueDate = document.createElement('label');
    labelForDueDate.setAttribute('for', 'dueDate');
    labelForDueDate.textContent = "Due date: ";
    labelForDueDate.classList.add('modal-label-and-field-horizontal-label');

    let dueDateSelection = document.createElement('input');
    dueDateSelection.setAttribute('id', 'dueDate');
    dueDateSelection.setAttribute('type', 'date');
    dueDateSelection.setAttribute('name', 'Due date');
    dueDateSelection.classList.add('modal-label-and-field-horizontal-input');

    dueDateContainer.append(labelForDueDate, dueDateSelection);

    //description
    let toDoDescriptionContainer = document.createElement('div');
    toDoDescriptionContainer.classList.add('modal-label-and-field-horizontal');

    let labelForDescription = document.createElement('label');
    labelForDescription.setAttribute('for', 'toDoDescription');
    labelForDescription.textContent = "Description: ";
    labelForDescription.classList.add('modal-label-and-field-horizontal-label');

    let toDoDescription = document.createElement('textarea');
    toDoDescription.setAttribute('id', 'toDoDescription');
    toDoDescription.setAttribute('name', 'To-do Description');
    toDoDescription.setAttribute('maxlength', '100');
    toDoDescription.classList.add('modal-label-and-field-horizontal-input');

    toDoDescriptionContainer.append(labelForDescription, toDoDescription);

    //enable notes
    let enableNotesContainer = document.createElement('div');
    enableNotesContainer.classList.add('todo-modal-add-todo-check-container');

    let notesEnabledCheckBox = document.createElement('input');
    notesEnabledCheckBox.setAttribute('id', 'enableNotes');
    notesEnabledCheckBox.setAttribute('type', 'checkbox');
    notesEnabledCheckBox.setAttribute('name', 'Add a note');

    let labelForEnablingNotes = document.createElement('label');
    labelForEnablingNotes.setAttribute('for', 'enableNotes');
    labelForEnablingNotes.textContent = " add a note";

    enableNotesContainer.append(notesEnabledCheckBox, labelForEnablingNotes);


    //notes
    let toDoNotesContainer = document.createElement('div');
    toDoNotesContainer.classList.add('modal-label-and-field-vertical');
    toDoNotesContainer.classList.add('hide');

    let labelForNotes = document.createElement('label');
    labelForNotes.setAttribute('for', 'toDoNotes');
    labelForNotes.textContent = "Notes: ";
    labelForNotes.classList.add('modal-label-and-field-vertical-children');

    let toDoNotes = document.createElement('textarea');
    toDoNotes.setAttribute('id', 'toDoNotes');
    toDoNotes.setAttribute('name', 'To-do Notes');
    toDoNotes.setAttribute('maxlength', '250');
    toDoNotes.classList.add('modal-label-and-field-vertical-children');

    toDoNotesContainer.append(labelForNotes, toDoNotes);

    //enable checklist
    let enableChecklistContainer = document.createElement('div');
    enableChecklistContainer.classList.add('todo-modal-add-todo-check-container');

    let checklistEnabledCheckBox = document.createElement('input');
    checklistEnabledCheckBox.setAttribute('id', 'enableChecklist');
    checklistEnabledCheckBox.setAttribute('type', 'checkbox');
    checklistEnabledCheckBox.setAttribute('name', 'Add a checklist');

    let labelForEnablingChecklist = document.createElement('label');
    labelForEnablingChecklist.setAttribute('for', 'enableChecklist');
    labelForEnablingChecklist.textContent = " add a checklist";

    enableChecklistContainer.append(checklistEnabledCheckBox, labelForEnablingChecklist);

    //checklist
    let toDoChecklistContainer = document.createElement('div');
    toDoChecklistContainer.classList.add('todo-modal-add-todo-checklist-container');
    toDoChecklistContainer.classList.add('hide');

    let addToChecklistContainer = document.createElement('div');
    addToChecklistContainer.classList.add('todo-modal-add-todo-add-checklist-container');

    let addToChecklist = document.createElement('input');
    addToChecklist.setAttribute('type', 'text');
    addToChecklist.setAttribute('maxlength', '30');
    addToChecklist.setAttribute('id', 'checklist');
    addToChecklist.setAttribute('placeholder', 'List item...');
    addToChecklist.classList.add('todo-modal-add-todo-add-checklist-input');

    let addToChecklistBtn = document.createElement('button');
    addToChecklistBtn.textContent = "Add";
    addToChecklistBtn.classList.add('todo-modal-add-todo-add-checklist-btn');

    addToChecklistContainer.append(addToChecklist, addToChecklistBtn);

    let checklistUl = document.createElement('ul');
    checklistUl.classList.add('todo-modal-add-todo-ul-container');


    // let EXAMPLE1 = document.createElement('li'); //ERASE
    // EXAMPLE1.classList.add('todo-modal-add-todo-item')
    // EXAMPLE1.classList.add('todo-modal-add-todo-checked-item')
    // let EXAMPLE1DIV = document.createElement('div');
    // let EXAMPLE1CHECK = document.createElement('ion-icon');//ERASE
    // EXAMPLE1CHECK.classList.add('todo-modal-add-todo-check-icon')
    // EXAMPLE1CHECK.setAttribute('name', 'checkmark'); //ERASE
    // let EXAMPLE1LI = document.createElement('p');//ERASE
    // EXAMPLE1LI.textContent = "this is something"
    // let EXAMPLE1TRASH = document.createElement('ion-icon');//ERASE
    // EXAMPLE1TRASH.setAttribute('name', 'trash'); //ERASE 
    // EXAMPLE1TRASH.classList.add('todo-modal-add-todo-trash-icon')
    // EXAMPLE1DIV.append(EXAMPLE1CHECK, EXAMPLE1LI, EXAMPLE1TRASH); //ERASE 
    // EXAMPLE1.append(EXAMPLE1DIV); //ERASE 

    // let EXAMPLE2 = document.createElement('li'); //ERASE
    // EXAMPLE2.classList.add('todo-modal-add-todo-item')
    // let EXAMPLE2DIV = document.createElement('div');
    // let EXAMPLE2CHECK = document.createElement('ion-icon');//ERASE
    // EXAMPLE2CHECK.setAttribute('name', 'checkmark'); //ERASE
    // EXAMPLE2CHECK.classList.add('todo-modal-add-todo-check-icon')
    // let EXAMPLE2LI = document.createElement('p');//ERASE
    // EXAMPLE2LI.textContent = "this is something"
    // let EXAMPLE2TRASH = document.createElement('ion-icon');//ERASE
    // EXAMPLE2TRASH.setAttribute('name', 'trash'); //ERASE 
    // EXAMPLE2TRASH.classList.add('todo-modal-add-todo-trash-icon')
    // EXAMPLE2DIV.append(EXAMPLE2CHECK, EXAMPLE2LI, EXAMPLE2TRASH); //ERASE 
    // EXAMPLE2.append(EXAMPLE2DIV); //ERASE 

    // checklistUl.append(EXAMPLE1, EXAMPLE2);

    toDoChecklistContainer.append(addToChecklistContainer, checklistUl);

    //save button
    let saveToDoButton = document.createElement('button');
    saveToDoButton.setAttribute('type', 'button')
    saveToDoButton.classList.add('modal-btn');
    saveToDoButton.innerText = "Save to-do";

    //adding elements to subcontainer
    subContainerModal.append(modalTitleContainer, toDoTitleContainer, requiredFieldWarning, boardSelectionContainer, prioritySettingContainer, dueDateContainer, toDoDescriptionContainer, enableNotesContainer, toDoNotesContainer, enableChecklistContainer, toDoChecklistContainer, saveToDoButton)

    // adding subcontainer to container
    addToDoModal.append(subContainerModal);

    return {
        addToDoModal,//used in index.js to open modal

        inputFieldName, // used in todo.js to create to-do
        dueDateSelection, // used in todo.js to create to-do
        toDoDescription, // used in todo.js to create to-do
        closeModalIcon, // used in index.js to close modal
        notesEnabledCheckBox, //used in index.js to open notes / used in todo.js to reset modal
        toDoNotesContainer,//used in index.js to open notes
        checklistEnabledCheckBox, //used in index.js to open checklist
        toDoChecklistContainer,//used in index.js to open checklist / used in todo.js to reset modal
        priorityLevel0Container, //used in todo.js to reset modal
        // priorityLevel1Container, //used in index.js to read priority value
        // priorityLevel2Container, //used in index.js to read priority value
        priorityLevelIconsContainer,//used in index.js to read priority value / used in todo.js to read priority value
        addToChecklistBtn, //used in index.js to add checklist items
        saveToDoButton,//used in index.js to save todo
        toDoNotes, //used in index.js to save todo

        boardSelectTag, //used in todo.js to append board selection options
        addToChecklist, // used in todo.js to add checklist items to array;
        checklistUl, // used in todo.js to add checklist items to array / used in function bellow to append li;

    }
})()

let ToDoAddModalFunction = (function () {
    const addListItem = function (index, item, status) {
        let listItem = document.createElement('li');
        listItem.classList.add('todo-modal-add-todo-item')
        if (status === false) listItem.classList.add('todo-modal-add-todo-checked-item')
        let listItemDiv = document.createElement('div');
        let listItemCheck = document.createElement('ion-icon');
        listItemCheck.dataset.itemIndexCheck = index;
        status === true ? listItemCheck.setAttribute('name', 'square-outline') : listItemCheck.setAttribute('name', 'checkmark');
        listItemCheck.classList.add('todo-modal-add-todo-check-icon');
        // listItemCheck.setAttribute('name', 'checkmark');
        let listItemP = document.createElement('p');
        listItemP.dataset.itemIndexCheck = index;
        listItemP.textContent = item;
        let listItemTrash = document.createElement('ion-icon');
        listItemTrash.setAttribute('name', 'trash');
        listItemTrash.dataset.itemIndexDelete = index;
        listItemTrash.classList.add('todo-modal-add-todo-trash-icon')
        listItemDiv.append(listItemCheck, listItemP, listItemTrash);
        listItem.append(listItemDiv);

        ToDoAddModal.checklistUl.append(listItem);
    }
    return {
        addListItem
    }
})();


export {
    ToDoAddModal, //used in index.js and todo.js
    ToDoAddModalFunction //used in index.js and todo.js to create list items
}