import "../src/nav.css";
export let NavBars = (function () {
    let topNavbar = document.createElement('nav');
    topNavbar.classList.add('nav-top-bar')
    let leftNavBar = document.createElement('nav');
    leftNavBar.classList.add('nav-left-bar')

    topNavbar.innerHTML = `<ion-icon name="checkmark-done-outline"></ion-icon>
<h1 class="nav-title">Todo List</h1>`;

    leftNavBar.innerHTML = `
<h2>Schedule</h2>
    <section>
        <div class="nav-left-button">
            <ion-icon name="today-outline" class="nav-icon"></ion-icon>
            <h3>Today</h3>
        </div>
        <div class="nav-left-button">
            <ion-icon name="calendar-outline" class="nav-icon"></ion-icon>
            <h3>This Week</h3>
        </div>
    </section>

    <h2>Boards</h2>
    <section>
        <div data-board="board1" class="nav-left-button">
            <ion-icon name="clipboard-outline" class="nav-icon"></ion-icon>
            <h3>My board</h3>
        </div>
    </section>
    <section>
        <div id = "navAddBoardButton" class="nav-left-button nav-add-board-button">
            <ion-icon name="add-circle-outline"></ion-icon>
            <h3>Add board</h3>
        </div>
    </section>
`

    return {
        topNavbar,
        leftNavBar
    }
})()
