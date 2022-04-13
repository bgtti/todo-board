// //In this file: the body of the page (HTML elements)
import "../index.css";

export const PageContent = (function () {
    const theBody = document.createElement("div");
    theBody.classList.add('the-body');

    return { theBody } //used in index.js. Page content appended to it from boards.js
})()

