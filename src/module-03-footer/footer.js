import "../styles/footer.css";
export let Footer = (function () {
    let theFooter = document.createElement('footer');
    let theYear = document.createElement('p');
    let theIcon = document.createElement('a');
    let theIonicon = document.createElement('ion-icon');

    theIonicon.classList.add('github-icon');

    theYear.innerText = "2022 by ";
    theIcon.setAttribute("href", "https://github.com/bgtti/");
    theIonicon.setAttribute("name", "logo-github");

    theIcon.appendChild(theIonicon);
    theFooter.append(theYear, theIcon);

    return {
        theFooter,
    }
})()