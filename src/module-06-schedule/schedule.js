import { format, addDays } from 'date-fns'
import { SchedulePage } from "./schedule-page-display.js"
import { PageContent, clearBodyPageContent } from "../module-02-body/body.js" //board page content appended to the body
import { TodoDisplay } from "../module-05-todos/todo.js" //import function to display todos on board, 

const ScheduleDisplay = (function () {
    let todaysDate;
    let tomorrowsDate;
    let endOfWeek;
    const generateDate = function () {
        todaysDate = format(new Date(), 'yyyy-MM-dd');
        tomorrowsDate = format(addDays(new Date(), 1), 'yyyy-MM-dd');
        endOfWeek = format(addDays(new Date(), 7), 'yyyy-MM-dd');
    }
    const displaySchedule = function (scheduleTitle) {
        generateDate();
        clearBodyPageContent();
        TodoDisplay.clearExistingCards(SchedulePage.mainSection);
        SchedulePage.boardName.textContent = scheduleTitle;
    }
    //Today
    const displayToday = function () {
        displaySchedule("Due today");
        TodoDisplay.displayTodosInSchedule(todaysDate, tomorrowsDate);
        PageContent.theBody.append(SchedulePage.topSection, SchedulePage.mainSection);
    }

    //This Week
    const displayWeek = function () {
        displaySchedule("Due in the next 7 days");
        TodoDisplay.displayTodosInSchedule(todaysDate, endOfWeek);
        PageContent.theBody.append(SchedulePage.topSection, SchedulePage.mainSection);
    }

    return {
        displayToday,
        displayWeek
    }
})()

export {
    ScheduleDisplay
}