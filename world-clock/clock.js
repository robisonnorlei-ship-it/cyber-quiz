let clocks = [];

class Clock {
    constructor(timezone, isSearched = false) {
        this.timezone = timezone;
        this.data = TIMEZONES_DATA[timezone];
        this.isSearched = isSearched;
        this.element = null;
    }

    create() {
        const container = document.getElementById('clocksContainer');
        
        if (clocks.length === 1) {
            container.innerHTML = '';
        }
        
        const card = document.createElement('div');
        card.className = 'clock-card';
        card.id = `clock-${this.timezone}`;
        
        card.innerHTML = `
            <div class="timezone-name">
                <span>${this.data.city}, ${this.data.country}</span>
                <button class="delete-btn" onclick="removeClock('${this.timezone}')" title="Remove clock">×</button>
            </div>
            <div class="digital-time" id="time-${this.timezone}">00:00:00</div>
            <div class="analog-clock" id="analog-${this.timezone}">
                <div class="hand hour-hand" id="hour-${this.timezone}"></div>
                <div class="hand minute-hand" id="minute-${this.timezone}"></div>
                <div class="hand second-hand" id="second-${this.timezone}"></div>
            </div>
            <div class="offset">UTC ${this.data.offset >= 0 ? '+' : ''}${this.data.offset}</div>
            <div class="date-info" id="date-${this.timezone}">Loading...</div>
        `;
        
        container.appendChild(card);
        this.element = card;
        this.update();
    }

    update() {
        const now = new Date();
        const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
        const localTime = new Date(now.toLocaleString('en-US', { timeZone: this.timezone }));
        
        // Digital time
        const hours = String(localTime.getHours()).padStart(2, '0');
        const minutes = String(localTime.getMinutes()).padStart(2, '0');
        const seconds = String(localTime.getSeconds()).padStart(2, '0');
        
        const digitalDisplay = document.getElementById(`time-${this.timezone}`);
        if (digitalDisplay) {
            digitalDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
        
        // Analog clock
        this.updateAnalogClock(localTime);
        
        // Date info
        const dateDisplay = document.getElementById(`date-${this.timezone}`);
        if (dateDisplay) {
            const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            const dateString = localTime.toLocaleDateString('en-US', options);
            dateDisplay.textContent = dateString;
        }
    }

    updateAnalogClock(time) {
        const hours = time.getHours() % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const milliseconds = time.getMilliseconds();
        
        // Hour hand: 360 / 12 hours = 30 degrees per hour
        const hourDegrees = (hours * 30) + (minutes * 0.5);
        
        // Minute hand: 360 / 60 minutes = 6 degrees per minute
        const minuteDegrees = (minutes * 6) + (seconds * 0.1);
        
        // Second hand: 360 / 60 seconds = 6 degrees per second
        const secondDegrees = (seconds * 6) + (milliseconds * 0.006);
        
        const hourHand = document.getElementById(`hour-${this.timezone}`);
        const minuteHand = document.getElementById(`minute-${this.timezone}`);
        const secondHand = document.getElementById(`second-${this.timezone}`);
        
        if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    }
}

function addClock() {
    const cityInput = document.getElementById('cityInput');
    const timezoneSelect = document.getElementById('timezoneSelect');
    
    let timezone = null;
    let cityName = cityInput.value.trim().toLowerCase();
    
    if (timezoneSelect.value) {
        timezone = timezoneSelect.value;
    } else if (cityName) {
        // Search for timezone by city name
        for (const [tz, data] of Object.entries(TIMEZONES_DATA)) {
            if (data.city.toLowerCase() === cityName) {
                timezone = tz;
                break;
            }
        }
        
        if (!timezone) {
            alert(`City "${cityName}" not found. Please select from the dropdown or try another city.`);
            return;
        }
    } else {
        alert('Please enter a city name or select a timezone.');
        return;
    }
    
    // Check if clock already exists
    if (clocks.some(clock => clock.timezone === timezone)) {
        alert('This timezone is already added.');
        return;
    }
    
    const clock = new Clock(timezone, !!cityInput.value.trim());
    clocks.push(clock);
    clock.create();
    
    // Clear inputs
    cityInput.value = '';
    timezoneSelect.value = '';
}

function removeClock(timezone) {
    const index = clocks.findIndex(clock => clock.timezone === timezone);
    if (index !== -1) {
        clocks.splice(index, 1);
    }
    
    const element = document.getElementById(`clock-${timezone}`);
    if (element) {
        element.remove();
    }
    
    // Show empty state if no clocks
    if (clocks.length === 0) {
        document.getElementById('clocksContainer').innerHTML = '<div class="empty-state">Add a city or timezone to get started</div>';
    }
}

function updateAllClocks() {
    clocks.forEach(clock => clock.update());
}

// Update clocks every 100ms for smooth second hand movement
setInterval(updateAllClocks, 100);

// Allow adding clock with Enter key
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cityInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addClock();
        }
    });
    
    document.getElementById('timezoneSelect').addEventListener('change', () => {
        if (document.getElementById('timezoneSelect').value) {
            addClock();
        }
    });
});

// Pre-load some default clocks
function loadDefaultClocks() {
    const defaults = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
    defaults.forEach(tz => {
        const clock = new Clock(tz);
        clocks.push(clock);
        clock.create();
    });
}