//In this file: Todo card HTML Elements
export let ToDoCard = (function () {
    let createCard = function (tdId, tdTitle, tdDescription, targetDiv) {
        let cardDisplay = document.createElement('div');
        cardDisplay.setAttribute('data-todo', `${tdId}`);//value needed
        cardDisplay.classList.add('to-do-card');

        let cardTitleContainer = document.createElement('div');
        cardTitleContainer.classList.add('to-do-title-div')
        let cardTitle = document.createElement('h4');
        cardTitle.textContent = tdTitle; //value needed
        let priorityLevel = document.createElement('ion-icon');
        priorityLevel.setAttribute('name', 'flag');
        cardTitleContainer.append(cardTitle, priorityLevel);

        let dueDate = document.createElement('p');
        dueDate.textContent = `Due: 02/02/2010`; //placeholder
        dueDate.classList.add('to-do-due');

        let wrapTitleAndDue = document.createElement('div');
        wrapTitleAndDue.append(cardTitleContainer, dueDate);

        let theDescription = document.createElement('p');
        theDescription.classList.add('to-do-description');
        theDescription.textContent = tdDescription; //value needed

        let iconsContainer = document.createElement('div');
        iconsContainer.classList.add('to-do-icons-container')
        let ellipsisIcon = document.createElement('ion-icon');
        ellipsisIcon.setAttribute('name', 'ellipsis-horizontal');
        let editIcon = document.createElement('ion-icon');
        editIcon.setAttribute('name', 'create-outline');
        iconsContainer.append(ellipsisIcon, editIcon);

        cardDisplay.append(wrapTitleAndDue, theDescription, iconsContainer);
        targetDiv.append(cardDisplay);
    }


    return {
        createCard //used in todo.js to generate todo cards
    }

})()