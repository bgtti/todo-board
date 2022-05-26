// //In this file: the body of the page (HTML elements)
import "../index.css";

const PageContent = (function () {
    const theBody = document.createElement("div");
    theBody.classList.add('the-body');

    return { theBody } //used in index.js. Page content appended to it from boards.js
})()

const clearBodyPageContent = function () {
    while (PageContent.theBody.firstChild) {
        PageContent.theBody.removeChild(PageContent.theBody.firstChild);
    }
}
export {
    PageContent,
    clearBodyPageContent
}

