import "../styles/nav.css";
export let NavBars = (function () {

    let topNavbar = document.createElement('nav');
    topNavbar.classList.add('nav-top-bar');

    let leftNavBar = document.createElement('nav');
    leftNavBar.classList.add('nav-left-bar');

    //top Nav
    let mainIcon = document.createElement('ion-icon');
    mainIcon.setAttribute('name', 'checkmark-done-outline');

    let pageTitle = document.createElement('h1');
    pageTitle.classList.add('nav-title');
    pageTitle.textContent = "Todo List";

    topNavbar.append(mainIcon, pageTitle);

    //left Nav: first section
    let scheduleSectionTitle = document.createElement('h2');
    scheduleSectionTitle.textContent = "Schedule";

    let scheduleSection = document.createElement('section');

    let scheduleDiv1 = document.createElement('div');
    scheduleDiv1.classList.add('nav-left-button')
    let todayIcon = document.createElement('ion-icon');
    todayIcon.setAttribute('name', 'today-outline');
    todayIcon.classList.add('nav-icon');
    let todayTitle = document.createElement('h3');
    todayTitle.textContent = "Today";
    scheduleDiv1.append(todayIcon, todayTitle);

    let scheduleDiv2 = document.createElement('div');
    scheduleDiv2.classList.add('nav-left-button')
    let weekIcon = document.createElement('ion-icon');
    weekIcon.setAttribute('name', 'calendar-outline');
    weekIcon.classList.add('nav-icon');
    let weekTitle = document.createElement('h3');
    weekTitle.textContent = "This Week";
    scheduleDiv2.append(weekIcon, weekTitle);

    scheduleSection.append(scheduleDiv1, scheduleDiv2);

    //left Nav: second section
    let boardsSectionTitle = document.createElement('h2');
    boardsSectionTitle.textContent = "Boards";

    let boardsSection = document.createElement('section');

    //each board:

    // let boardsDiv1 = document.createElement('div');
    // boardsDiv1.classList.add('nav-left-button')
    // boardsDiv1.setAttribute('data-board', 'board0') //check if necessary

    // let boardsIcon = document.createElement('ion-icon');
    // boardsIcon.setAttribute('name', 'clipboard-outline');
    // boardsIcon.classList.add('nav-icon');
    // let boardTitle = document.createElement('h3');
    // boardTitle.textContent = "My board"; //the name

    // boardsDiv1.append(boardsIcon, boardTitle); //check

    // boardsSection.append(boardsDiv1); //append board

    //button add new board
    let addNewBoardBtnSection = document.createElement('section');

    let addBoardDiv = document.createElement('div');
    addBoardDiv.classList.add('nav-left-button', 'nav-add-board-button')
    let addBoardIcon = document.createElement('ion-icon');
    addBoardIcon.setAttribute('name', 'add-circle-outline');
    // addBoardIcon.classList.add('nav-icon'); check if necessary
    let addBoardTitle = document.createElement('h3');
    addBoardTitle.setAttribute('id', 'navAddBoardButton')
    addBoardTitle.textContent = "Add board";
    addBoardDiv.append(addBoardIcon, addBoardTitle);

    addNewBoardBtnSection.append(addBoardDiv);

    //adding stuff to left nav:
    leftNavBar.append(scheduleSectionTitle, scheduleSection, boardsSectionTitle, boardsSection, addNewBoardBtnSection)

    //     leftNavBar.innerHTML = `
    // <h2>Schedule</h2>
    //     <section>
    //         <div class="nav-left-button">
    //             <ion-icon name="today-outline" class="nav-icon"></ion-icon>
    //             <h3>Today</h3>
    //         </div>
    //         <div class="nav-left-button">
    //             <ion-icon name="calendar-outline" class="nav-icon"></ion-icon>
    //             <h3>This Week</h3>
    //         </div>
    //     </section>

    //     <h2>Boards</h2>
    //     <section>
    //         <div data-board="board0" class="nav-left-button">
    //             <ion-icon name="clipboard-outline" class="nav-icon"></ion-icon>
    //             <h3>My board</h3>
    //         </div>
    //     </section>
    //     <section>
    //         <div id = "navAddBoardButton" class="nav-left-button nav-add-board-button">
    //             <ion-icon name="add-circle-outline"></ion-icon>
    //             <h3>Add board</h3>
    //         </div>
    //     </section>
    // `

    return {
        topNavbar,
        leftNavBar,
        boardsSection
    }
})()
