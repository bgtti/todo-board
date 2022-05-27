import { format } from 'date-fns'
//In this file: Todo card HTML Elements

export let ToDoCard = (function () {
    let createCard = function (tdId, tdTitle, tdDate, tdDescription, tdPriority, targetDiv) {
        let theDate;
        tdDate === "" ? theDate = "" : theDate = `Due: ${format(new Date(tdDate.replace(/-/g, ",")), 'dd MMMM yyyy')}`;

        let cardDisplay = document.createElement('div');
        cardDisplay.setAttribute('data-todo', `${tdId}`);//value needed
        cardDisplay.classList.add('to-do-card');

        let cardTitleContainer = document.createElement('div');
        cardTitleContainer.classList.add('to-do-title-div')
        let cardTitle = document.createElement('h4');
        cardTitle.textContent = tdTitle; //value needed
        let priorityLevel = document.createElement('ion-icon');
        tdPriority === "3" ? priorityLevel.setAttribute('name', 'checkmark-done') : priorityLevel.setAttribute('name', 'flag');
        // priorityLevel.setAttribute('name', 'flag');
        priorityLevel.classList.add(`priority-level-${tdPriority}`);
        cardTitleContainer.append(cardTitle, priorityLevel);

        let dueDate = document.createElement('p');
        dueDate.textContent = theDate;
        dueDate.classList.add('to-do-due');

        let wrapTitleAndDue = document.createElement('div');
        wrapTitleAndDue.append(cardTitleContainer, dueDate);

        let theDescription = document.createElement('p');
        theDescription.classList.add('to-do-description');
        theDescription.textContent = tdDescription; //value needed

        let iconsContainer = document.createElement('div');
        iconsContainer.classList.add('to-do-icons-container')
        // let viewIcon = document.createElement('ion-icon');
        // viewIcon.setAttribute('name', 'eye');
        let editIcon = document.createElement('ion-icon');
        editIcon.setAttribute('name', 'create');
        editIcon.setAttribute('data-edit-todo', `${tdId}`);//value needed
        let deleteIcon = document.createElement('ion-icon');
        deleteIcon.setAttribute('name', 'trash');
        deleteIcon.setAttribute('data-delete-todo', `${tdId}`);//value needed
        iconsContainer.append(editIcon, deleteIcon);

        cardDisplay.append(wrapTitleAndDue, theDescription, iconsContainer);
        targetDiv.append(cardDisplay);
    }


    return {
        createCard //used in todo.js to generate todo cards
    }

})()