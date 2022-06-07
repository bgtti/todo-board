//In this file: mobile menu management (includes event listeners)
import "./nav.css";
import { NavTop } from "./nav-top.js";
import { NavLeft } from "./nav-left.js";


export const NavMobile = (function () {
    const closeMobileMenu = function () {
        NavLeft.leftNavBar.classList.remove('mobile-nav-active');
        NavLeft.leftNavBar.classList.add('mobile-nav-transition');
        NavTop.mobileBurger.classList.remove('nav-icon-burger-clicked');
        setTimeout(() => {
            NavLeft.leftNavBar.classList.add('mobile-nav-inactive');
            NavLeft.leftNavBar.classList.remove('mobile-nav-transition');
        }, 1000)
    }
    const navMobileControl = function () {
        if (NavLeft.leftNavBar.classList.contains('mobile-nav-inactive') && NavLeft.leftNavBar.classList.contains('mobile-nav-active')) {
            NavLeft.leftNavBar.classList.remove('mobile-nav-active');
            NavLeft.leftNavBar.classList.add('mobile-nav-inactive');
            NavTop.mobileBurger.classList.remove('nav-icon-burger-clicked');
        } else if (NavLeft.leftNavBar.classList.contains('mobile-nav-inactive')) {
            NavLeft.leftNavBar.classList.remove('mobile-nav-inactive');
            NavLeft.leftNavBar.classList.add('mobile-nav-active');
            NavTop.mobileBurger.classList.add('nav-icon-burger-clicked');
        } else {
            closeMobileMenu();
        }
    }
    const navMobileTrigger = function () {
        if (window.innerWidth < 800) {
            NavLeft.leftNavBar.classList.add('mobile-nav-inactive');
            NavTop.mobileBurger.classList.remove('nav-icon-burger-clicked');
            NavLeft.leftNavBar.classList.remove('mobile-nav-active');
        } else {
            NavLeft.leftNavBar.classList.remove('mobile-nav-inactive');
            NavLeft.leftNavBar.classList.remove('mobile-nav-active');
            NavLeft.leftNavBar.classList.remove('mobile-nav-active');
        }
    }


    return {
        navMobileTrigger, //used in index.js event listener to trigger mobile navigation
        navMobileControl, //used in index.js event listener to control mobile navigation
        closeMobileMenu,//used in index.js event listener to control mobile navigation
    }
})()

