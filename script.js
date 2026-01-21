// Event dates in ISO 8601 format (UTC time)
const eventDates = [
    {
        id: "final-exams",
        date: new Date("2026-12-15T09:00:00Z").getTime(),
        daysElem: "days1",
        hoursElem: "hours1",
        minutesElem: "minutes1",
        secondsElem: "seconds1"
    },
    {
        id: "convocation",
        date: new Date("2026-06-10T10:00:00Z").getTime(),
        daysElem: "days2",
        hoursElem: "hours2",
        minutesElem: "minutes2",
        secondsElem: "seconds2"
    },
    {
        id: "sports-meet",
        date: new Date("2026-09-05T08:00:00Z").getTime(),
        daysElem: "days3",
        hoursElem: "hours3",
        minutesElem: "minutes3",
        secondsElem: "seconds3"
    }
];

function updateCountdown() {
    const now = new Date().getTime();
    
    eventDates.forEach(event => {
        const timeLeft = event.date - now;
        
        if (timeLeft > 0) {
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Update the HTML elements
            document.getElementById(event.daysElem).innerText = days.toString().padStart(2, '0');
            document.getElementById(event.hoursElem).innerText = hours.toString().padStart(2, '0');
            document.getElementById(event.minutesElem).innerText = minutes.toString().padStart(2, '0');
            document.getElementById(event.secondsElem).innerText = seconds.toString().padStart(2, '0');
            
            // Update status message for ongoing countdown
            const card = document.getElementById(event.id);
            const status = card.querySelector('.status');
            if (event.id === "final-exams") {
                status.innerText = "Study hard! Good luck!";
            } else if (event.id === "convocation") {
                status.innerText = "Get ready to graduate!";
            } else if (event.id === "sports-meet") {
                status.innerText = "Train hard, win big!";
            }
        } else {
            // If event has passed
            document.getElementById(event.daysElem).innerText = "00";
            document.getElementById(event.hoursElem).innerText = "00";
            document.getElementById(event.minutesElem).innerText = "00";
            document.getElementById(event.secondsElem).innerText = "00";
            
            // Update status message
            const card = document.getElementById(event.id);
            const status = card.querySelector('.status');
            if (event.id === "final-exams") {
                status.innerText = "Exams are over! Well done!";
            } else if (event.id === "convocation") {
                status.innerText = "Congratulations Graduates!";
            } else if (event.id === "sports-meet") {
                status.innerText = "Event completed! Great job!";
            }
        }
    });
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Add some visual effect when numbers change
document.addEventListener('DOMContentLoaded', function() {
    const timeElements = document.querySelectorAll('.time-box span');
    
    setInterval(() => {
        timeElements.forEach(el => {
            el.style.transform = 'scale(1.1)';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
            }, 300);
        });
    }, 1000);
});