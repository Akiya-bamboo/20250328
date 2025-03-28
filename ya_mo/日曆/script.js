let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月"
];

function loadCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startingDay = firstDay.getDay();
    const monthLength = lastDay.getDate();

    document.getElementById('monthDisplay').textContent = 
        `${currentYear}年 ${monthNames[currentMonth]}`;

    const daysGrid = document.getElementById('days');
    daysGrid.innerHTML = '';

    for (let i = 0; i < startingDay; i++) {
        const prevMonthDay = document.createElement('div');
        prevMonthDay.classList.add('day', 'other-month');
        const lastDayPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
        prevMonthDay.textContent = lastDayPrevMonth - startingDay + i + 1;
        daysGrid.appendChild(prevMonthDay);
    }

    for (let i = 1; i <= monthLength; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;

        if (currentYear === new Date().getFullYear() &&
            currentMonth === new Date().getMonth() &&
            i === new Date().getDate()) {
            dayElement.classList.add('today');
        }

        daysGrid.appendChild(dayElement);
    }

    const remainingDays = 42 - (startingDay + monthLength);
    for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDay = document.createElement('div');
        nextMonthDay.classList.add('day', 'other-month');
        nextMonthDay.textContent = i;
        daysGrid.appendChild(nextMonthDay);
    }
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    loadCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    loadCalendar();
});

loadCalendar(); 