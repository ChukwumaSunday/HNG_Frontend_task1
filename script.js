window.onload = function() {
    const currentTimeElement = document.getElementById("currentTimeUTC");
    const currentDayElement = document.getElementById("currentDay");

    function updateTime() {
        const now = new Date();
        const utcTime = now.toISOString().substring(11, 19);
        const weekDay = now.toLocaleString("en-US", { weekday: "long" });

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = weekDay;
    }

    setInterval(updateTime, 1000);
    updateTime();
};

// /// new code
//         function updateTime() {
//             const now = new Date();
//             const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//             const day = days[now.getDay()];
//             const time = now.toLocaleTimeString();
//             document.getElementById('currentTime').textContent = `Today is ${day}, Current Time: ${time}`;
//         }
        
//         setInterval(updateTime, 1000);
//         updateTime();