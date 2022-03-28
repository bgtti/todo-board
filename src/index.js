import "../src/index.css";
import { Footer } from "./footer.js";
import { NavBars } from "./nav.js";
import { BoardAddBoardModal } from "./boardsModalAddBoard.js";

console.log("working");

let theHTML = document.querySelector("#content");
let theMiddle = document.createElement("div");
theMiddle.classList.add('middle-div')
let theBody = document.createElement("div");

theMiddle.append(NavBars.leftNavBar, theBody);
theMiddle.append(BoardAddBoardModal.addBoardModal);

theHTML.append(NavBars.topNavbar);
theHTML.append(theMiddle);
theHTML.append(Footer.theFooter);


//Event Listener: open/close add board modal

document.getElementById('navAddBoardButton').addEventListener("click", () => {
    BoardAddBoardModal.addBoardModal.classList.remove('hide')
})