//In this file: Left Navbar HTML Elements
import "./nav.css";

export const NavLeft = (function () {
    const leftNavBar = document.createElement('nav');
    leftNavBar.classList.add('nav-left-bar');

    // First section
    const scheduleSectionTitle = document.createElement('h2');
    scheduleSectionTitle.textContent = "Schedule";

    const scheduleSection = document.createElement('section');

    const scheduleDiv1 = document.createElement('div');
    scheduleDiv1.classList.add('nav-left-button')
    const todayIcon = document.createElement('ion-icon');
    todayIcon.setAttribute('name', 'today-outline');
    todayIcon.classList.add('nav-icon');
    const todayTitle = document.createElement('h3');
    todayTitle.textContent = "Today";
    scheduleDiv1.append(todayIcon, todayTitle);

    const scheduleDiv2 = document.createElement('div');
    scheduleDiv2.classList.add('nav-left-button')
    const weekIcon = document.createElement('ion-icon');
    weekIcon.setAttribute('name', 'calendar-outline');
    weekIcon.classList.add('nav-icon');
    const weekTitle = document.createElement('h3');
    weekTitle.textContent = "This Week";
    scheduleDiv2.append(weekIcon, weekTitle);

    scheduleSection.append(scheduleDiv1, scheduleDiv2);

    // Second section
    const boardsSectionTitle = document.createElement('h2');
    boardsSectionTitle.textContent = "Boards";

    const boardsSection = document.createElement('section');

    //button add new board
    const addNewBoardBtnSection = document.createElement('section');

    const addBoardDiv = document.createElement('div');
    addBoardDiv.classList.add('nav-left-button', 'nav-add-board-button')
    const addBoardIcon = document.createElement('ion-icon');
    addBoardIcon.setAttribute('name', 'add-circle-outline');
    // addBoardIcon.classList.add('nav-icon'); check if necessary
    const addBoardTitle = document.createElement('h3');
    addBoardTitle.setAttribute('id', 'navAddBoardButton')
    addBoardTitle.textContent = "Add board";
    addBoardDiv.append(addBoardIcon, addBoardTitle);

    addNewBoardBtnSection.append(addBoardDiv);

    //adding stuff to left nav:
    leftNavBar.append(scheduleSectionTitle, scheduleSection, boardsSectionTitle, boardsSection, addNewBoardBtnSection)

    return {
        leftNavBar, //used in index.js to display nav and in nav-mobile.js to manage mobile navigation
        addBoardDiv, //used in index.js for event listener add new board modal
        boardsSection, // used in boards.js function to append board names
        scheduleDiv1, //used in index.js for E.L. display schedule 'today'
        scheduleDiv2 //used in index.js for E.L. display schedule 'week'
    }
})()