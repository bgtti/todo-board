import "../src/index.css";
import { Footer } from "./scripts/footer.js";
import { NavBars } from "./scripts/nav.js";
import { BoardAddBoardModal } from "./scripts/boardsModals.js";
import { allBoardsArray, displayBoardsInNav, addingNewBoard } from "./scripts/boards.js";
import { BoardContentDisplay } from "./scripts/boardsContent.js";


let theHTML = document.querySelector("#content");
let theMiddle = document.createElement("div");
theMiddle.classList.add('middle-div')
let theBody = document.createElement("div");
theBody.classList.add('the-body');

theMiddle.append(NavBars.leftNavBar, theBody);
theMiddle.append(BoardAddBoardModal.addBoardModal);

theHTML.append(NavBars.topNavbar);
theHTML.append(theMiddle);
theHTML.append(Footer.theFooter);

displayBoardsInNav();

//EVENT LISTENERS
//Add board button: open and close
document.getElementById('navAddBoardButton').addEventListener("click", () => {
    BoardAddBoardModal.addBoardModal.classList.remove('hide');
}, false);
BoardAddBoardModal.closeModalIcon.addEventListener("click", () => {
    BoardAddBoardModal.addBoardModal.classList.add('hide');
    BoardAddBoardModal.inputField.value = "";
    BoardAddBoardModal.requiredFieldWarning.classList.add('hide');
}, false)

//Save new board
//Event listener of modal save button to create new board
BoardAddBoardModal.saveBoardButton.addEventListener("click", () => {
    if (BoardAddBoardModal.inputField.value === "" || BoardAddBoardModal.inputField.value === " ") {
        BoardAddBoardModal.requiredFieldWarning.classList.remove('hide')
    } else {
        BoardAddBoardModal.requiredFieldWarning.classList.add('hide');
        addingNewBoard();
        BoardAddBoardModal.addBoardModal.classList.add('hide');
        BoardAddBoardModal.inputField.value = "";
    }
    console.log(allBoardsArray);
}, false)

//Displaying selected board content
theBody.append(BoardContentDisplay.topSection, BoardContentDisplay.mainSection)



console.log(allBoardsArray)
