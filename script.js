document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return new Date().getTime();
    }

    // Update the day of the week and UTC time
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const utcTimeElement = document.getElementById("utcTime");

    dayOfWeekElement.textContent = getCurrentDayOfWeek();
    utcTimeElement.textContent = getCurrentUTCTime();
});
