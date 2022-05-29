//In this file: Schedule page display of HTML Elements 

let SchedulePage = (function () {
    //Section 1: header
    let topSection = document.createElement('section');
    topSection.classList.add('board-content-section-header');

    let boardName = document.createElement('h2')

    topSection.append(boardName);

    // section 2: content
    let mainSection = document.createElement('section');

    return {
        topSection,
        mainSection,
        boardName
    }
})()

export { SchedulePage } // used in schedule.js