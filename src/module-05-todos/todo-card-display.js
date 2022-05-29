import { format } from 'date-fns'
//In this file: Todo card HTML Elements

export let ToDoCard = (function () {
    let createCard = function (tdId, tdTitle, tdDate, tdDescription, tdPriority, tdNotes, tdCheckList, targetDiv) {

        //CARD
        let cardDisplay = document.createElement('div');
        cardDisplay.setAttribute('data-todo', `${tdId}`);
        cardDisplay.classList.add('to-do-card');

        //TITLE and PRIORITY
        let cardTitleContainer = document.createElement('div');
        cardTitleContainer.classList.add('to-do-title-div')
        let cardTitle = document.createElement('h4');
        cardTitle.textContent = tdTitle;
        let priorityLevel = document.createElement('ion-icon');
        tdPriority === "3" ? priorityLevel.setAttribute('name', 'checkmark-done-circle') : priorityLevel.setAttribute('name', 'flag');
        priorityLevel.classList.add(`priority-level-${tdPriority}`);
        cardTitleContainer.append(cardTitle, priorityLevel);

        //DUE DATE
        let theDate;
        tdDate === "" ? theDate = "" : theDate = `Due: ${format(new Date(tdDate.replace(/-/g, ",")), 'dd MMMM yyyy')}`;

        let dueDate = document.createElement('p');
        dueDate.textContent = theDate;
        dueDate.classList.add('to-do-due');

        let wrapTitleAndDue = document.createElement('div');
        wrapTitleAndDue.append(cardTitleContainer, dueDate);

        //DESCRIPTION
        let theDescription = document.createElement('p');
        theDescription.classList.add('to-do-description');
        theDescription.textContent = tdDescription;

        //ICONS:
        let iconsContainer = document.createElement('div');
        iconsContainer.classList.add('to-do-icons-container')

        let iconsSubContainerLeft = document.createElement('div');
        iconsSubContainerLeft.classList.add('icons-cards-left');
        let noteAddedIcon = document.createElement('ion-icon');
        noteAddedIcon.setAttribute('name', 'document-text-outline');
        noteAddedIcon.classList.add('icon-has-note')
        let checkListIcon = document.createElement('ion-icon');
        checkListIcon.setAttribute('name', 'list');
        checkListIcon.classList.add('icon-has-list')
        iconsSubContainerLeft.append(noteAddedIcon, checkListIcon);

        tdNotes === "" ? noteAddedIcon.classList.add('hide') : noteAddedIcon.classList.remove('hide');
        tdCheckList.length === 0 ? checkListIcon.classList.add('hide') : checkListIcon.classList.remove('hide');

        let iconsSubContainerRight = document.createElement('div');
        iconsSubContainerRight.classList.add('icons-cards-right');
        let editIcon = document.createElement('ion-icon');
        editIcon.setAttribute('name', 'create');
        editIcon.setAttribute('data-edit-todo', `${tdId}`);
        let deleteIcon = document.createElement('ion-icon');
        deleteIcon.setAttribute('name', 'trash');
        deleteIcon.setAttribute('data-delete-todo', `${tdId}`);
        iconsSubContainerRight.append(editIcon, deleteIcon);
        iconsContainer.append(iconsSubContainerLeft, iconsSubContainerRight);

        cardDisplay.append(wrapTitleAndDue, theDescription, iconsContainer);
        targetDiv.append(cardDisplay);
    }


    return {
        createCard //used in todo.js to generate todo cards
    }

})()