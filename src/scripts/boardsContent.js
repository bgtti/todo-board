import "../styles/boardsContent.css";

let newToDoCard = (function () { //////place in appropriate file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let cardDisplay = document.createElement('div');
    cardDisplay.classList.add('to-do-card');

    let cardTitleContainer = document.createElement('div');
    cardTitleContainer.classList.add('to-do-title-div')
    let cardTitle = document.createElement('h4');
    cardTitle.textContent = "My first to do"; //placeholder
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
    theDescription.textContent = "This is an important list. Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla"; //placeholder

    let iconsContainer = document.createElement('div');
    iconsContainer.classList.add('to-do-icons-container')
    let ellipsisIcon = document.createElement('ion-icon');
    ellipsisIcon.setAttribute('name', 'ellipsis-horizontal');
    let editIcon = document.createElement('ion-icon');
    editIcon.setAttribute('name', 'create-outline');
    iconsContainer.append(ellipsisIcon, editIcon);

    cardDisplay.append(wrapTitleAndDue, theDescription, iconsContainer);

    return {
        cardDisplay
    }

})()

const BoardContentDisplay = (function () {
    //Section 1: header
    const topSection = document.createElement('section');
    topSection.classList.add('board-content-section-header');

    const boardName = document.createElement('h2')
    boardName.textContent = "My Board"; //placeholder

    const mainBtnsContainer = document.createElement('div');
    mainBtnsContainer.classList.add('board-content-main-btns-container')

    const addToDoBtn = document.createElement('div');
    addToDoBtn.textContent = "Add to do";
    addToDoBtn.classList.add("board-content-option-buttons");

    const addNoteBtn = document.createElement('div');
    addNoteBtn.textContent = "Add note";
    addNoteBtn.classList.add("board-content-option-buttons");

    const settingsBtn = document.createElement('div');
    settingsBtn.textContent = "Board settings";
    settingsBtn.classList.add("board-content-option-buttons");

    mainBtnsContainer.append(addToDoBtn, addNoteBtn, settingsBtn);

    topSection.append(boardName, mainBtnsContainer);

    // section 2: content
    const mainSection = document.createElement('section');

    mainSection.append(newToDoCard.cardDisplay); /////////////////////////EXAMPLE!!!!!!!!!


    return {
        topSection,
        mainSection
    }
})()





export { BoardContentDisplay }