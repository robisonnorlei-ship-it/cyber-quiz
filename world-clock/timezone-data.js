const TIMEZONES_DATA = {
    'America/New_York': { city: 'New York', offset: -5, country: 'USA' },
    'America/Los_Angeles': { city: 'Los Angeles', offset: -8, country: 'USA' },
    'America/Chicago': { city: 'Chicago', offset: -6, country: 'USA' },
    'America/Denver': { city: 'Denver', offset: -7, country: 'USA' },
    'America/Anchorage': { city: 'Anchorage', offset: -9, country: 'USA' },
    'Pacific/Honolulu': { city: 'Honolulu', offset: -10, country: 'USA' },
    'Europe/London': { city: 'London', offset: 0, country: 'UK' },
    'Europe/Paris': { city: 'Paris', offset: 1, country: 'France' },
    'Europe/Berlin': { city: 'Berlin', offset: 1, country: 'Germany' },
    'Europe/Madrid': { city: 'Madrid', offset: 1, country: 'Spain' },
    'Europe/Rome': { city: 'Rome', offset: 1, country: 'Italy' },
    'Europe/Amsterdam': { city: 'Amsterdam', offset: 1, country: 'Netherlands' },
    'Europe/Brussels': { city: 'Brussels', offset: 1, country: 'Belgium' },
    'Europe/Vienna': { city: 'Vienna', offset: 1, country: 'Austria' },
    'Europe/Prague': { city: 'Prague', offset: 1, country: 'Czechia' },
    'Europe/Budapest': { city: 'Budapest', offset: 1, country: 'Hungary' },
    'Europe/Moscow': { city: 'Moscow', offset: 3, country: 'Russia' },
    'Europe/Istanbul': { city: 'Istanbul', offset: 3, country: 'Turkey' },
    'Asia/Dubai': { city: 'Dubai', offset: 4, country: 'UAE' },
    'Asia/Kolkata': { city: 'Delhi', offset: 5.5, country: 'India' },
    'Asia/Bangkok': { city: 'Bangkok', offset: 7, country: 'Thailand' },
    'Asia/Hong_Kong': { city: 'Hong Kong', offset: 8, country: 'China' },
    'Asia/Shanghai': { city: 'Shanghai', offset: 8, country: 'China' },
    'Asia/Tokyo': { city: 'Tokyo', offset: 9, country: 'Japan' },
    'Asia/Seoul': { city: 'Seoul', offset: 9, country: 'South Korea' },
    'Australia/Sydney': { city: 'Sydney', offset: 11, country: 'Australia' },
    'Australia/Melbourne': { city: 'Melbourne', offset: 11, country: 'Australia' },
    'Pacific/Auckland': { city: 'Auckland', offset: 13, country: 'New Zealand' },
    'UTC': { city: 'UTC', offset: 0, country: 'Universal' },
    'America/Mexico_City': { city: 'Mexico City', offset: -6, country: 'Mexico' },
    'America/Toronto': { city: 'Toronto', offset: -5, country: 'Canada' },
    'America/Vancouver': { city: 'Vancouver', offset: -8, country: 'Canada' },
    'America/Sao_Paulo': { city: 'São Paulo', offset: -3, country: 'Brazil' },
    'America/Buenos_Aires': { city: 'Buenos Aires', offset: -3, country: 'Argentina' },
    'Africa/Cairo': { city: 'Cairo', offset: 2, country: 'Egypt' },
    'Africa/Johannesburg': { city: 'Johannesburg', offset: 2, country: 'South Africa' },
    'Africa/Lagos': { city: 'Lagos', offset: 1, country: 'Nigeria' },
    'Asia/Singapore': { city: 'Singapore', offset: 8, country: 'Singapore' },
    'Asia/Manila': { city: 'Manila', offset: 8, country: 'Philippines' },
    'Asia/Jakarta': { city: 'Jakarta', offset: 7, country: 'Indonesia' },
    'Asia/Kuala_Lumpur': { city: 'Kuala Lumpur', offset: 8, country: 'Malaysia' },
    'Asia/Ho_Chi_Minh': { city: 'Ho Chi Minh', offset: 7, country: 'Vietnam' },
};

function populateTimezoneSelect() {
    const select = document.getElementById('timezoneSelect');
    const cities = {};
    
    Object.entries(TIMEZONES_DATA).forEach(([tz, data]) => {
        if (!cities[data.city]) {
            cities[data.city] = tz;
        }
    });
    
    Object.keys(cities).sort().forEach(city => {
        const option = document.createElement('option');
        option.value = cities[city];
        option.textContent = city;
        select.appendChild(option);
    });
}

populateTimezoneSelect();