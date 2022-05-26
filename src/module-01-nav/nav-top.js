//In this file: Top Navbar HTML Elements
import "./nav.css";

export const NavTop = (function () {
    const topNavbar = document.createElement('nav');
    topNavbar.classList.add('nav-top-bar');

    const mainIconContainer = document.createElement('div');
    const mainIcon01 = document.createElement('ion-icon');
    mainIcon01.setAttribute('name', 'clipboard');
    mainIcon01.classList.add('nav-icon-board');
    const mainIcon02 = document.createElement('ion-icon');
    mainIcon02.setAttribute('name', 'checkmark-done');
    mainIcon02.classList.add('nav-icon-check');
    mainIconContainer.append(mainIcon01, mainIcon02)

    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('nav-title');
    pageTitle.textContent = "Todo Boards";

    const topNavRight = document.createElement('div');
    topNavRight.classList.add('nav-top-right');
    topNavRight.append(mainIconContainer, pageTitle);

    const clearLocalStorageBtn = document.createElement('div');
    clearLocalStorageBtn.textContent = "Clear local storage";
    clearLocalStorageBtn.classList.add("board-content-option-buttons"); //CHANGE

    const topNavLeft = document.createElement('div');
    topNavLeft.classList.add('nav-top-left');
    const mobileBurger = document.createElement('ion-icon');
    mobileBurger.setAttribute('name', 'menu');
    mobileBurger.classList.add('nav-icon-burger');
    topNavLeft.append(mobileBurger);

    topNavbar.append(topNavRight, clearLocalStorageBtn, topNavLeft);

    return {
        topNavbar, //used in index.js to display nav
        mobileBurger, //used in nav-mobile.js in function to control mobile naviation and index.js for the event trigger
        clearLocalStorageBtn, //used in index.js to clear storage
    }
})()


