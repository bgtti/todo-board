//In this file: Schedule page display of HTML Elements 
// import "./boardsContent.css";

let SchedulePage = (function () {
    //Section 1: header
    let topSection = document.createElement('section');
    topSection.classList.add('board-content-section-header');

    let boardName = document.createElement('h2')
    // boardName.textContent = "My Board"; //placeholder

    topSection.append(boardName);

    // section 2: content
    let mainSection = document.createElement('section');

    return {
        topSection, //used in 
        mainSection, //used in 
        boardName, //used in 

    }
})()

export { SchedulePage } 