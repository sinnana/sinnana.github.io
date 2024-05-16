const basic = {
    "title": '박석범 & 장세희 결혼합니다.',
    "groom": '박석범',
    "bride": '장세희',
    "date": {
        "year" : '2024',
        "month" : '09',
        "day" : '28',
        "hour" : '12',
        "minute" : '40',
    },
    "location": {
        "name" : "루이비스 대전",
        "address" : "",
        "x" : "",
        "y" : ""
    }
}
const holidays = [16,17,18];
$(document).ready(function (){

    new WOW().init();

    drawCalendar(basic.date);
    loadCountdown(basic.date);
});

function drawCalendar(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const year = parseInt(date.year);
    const month = parseInt(date.month);
    const day = parseInt(date.day);

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const calendarContainer = document.getElementById("calendar");

    let calendarHTML = `
    <div>${monthNames[month - 1]} ${year}</div>
    <div class="week">
        ${["S", "M", "T", "W", "T", "F", "S"].map((day, index) => `<div class="${'day'}">${day}</div>`).join('')}
    </div>`;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        let line = "";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                line += "<div class='empty'></div>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                let dateClass = "";
                if (holidays.includes(dayCount)) {
                    dateClass = "holiday";
                }
                if (dayCount === day) {
                    dateClass = "highlight";
                }
                line += `<div class='day ${dateClass}'>${dayCount}</div>`;
                dayCount++;
            }
        }
        calendarHTML += "<div class='week'>" + line + "</div>";
        if (dayCount > daysInMonth) {
            break;
        }
    }

    calendarContainer.innerHTML = calendarHTML;
}

function loadCountdown(date){

    const wDay = new Date(date.year,parseInt(date.month)-1,parseInt(date.day)+1,date.hour, date.minute);
    const wTime = new Date(date.year,parseInt(date.month)-1,date.day,date.hour, date.minute);

    $('#dday-countdown').countdown({ until: wDay, format: 'dHMS', compact: true, layout: '{dn}', timezone: +9 });
    $('#date-countdown').countdown({ until: wTime, format: 'dHMS', compact: true,  timezone: +9 });

}