# 🌍 World Time Zone Clock

A beautiful, interactive digital clock application that displays current time across multiple time zones simultaneously with both digital and analog clock displays.

## ✨ Features

- **Multiple Time Zones**: Add clocks for any city or timezone worldwide
- **Dual Display**: Both digital (HH:MM:SS) and analog clock faces
- **Real-Time Updates**: Smooth animations and updates every 100ms
- **40+ Cities**: Pre-loaded with major cities across all continents
- **Search & Select**: Find cities by name or select from dropdown
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful UI**: Gradient background, smooth animations, and clean design
- **Date Display**: Shows current date for each timezone
- **UTC Offset**: Displays timezone offset from UTC
- **Easy Management**: Add or remove clocks with one click

## 🚀 How to Use

1. **Enter a City Name**: Type a city name (e.g., "Tokyo", "New York")
2. **Or Select from Dropdown**: Choose a timezone from the list
3. **Click "Add Clock"**: The clock will be added to your dashboard
4. **Remove Clock**: Click the × button on any clock card to remove it
5. **Repeat**: Add as many clocks as you need

## 🏙️ Supported Cities

### Americas
- New York (EST/EDT)
- Los Angeles (PST/PDT)
- Chicago (CST/CDT)
- Denver (MST/MDT)
- Anchorage (AKST/AKDT)
- Honolulu (HST)
- Mexico City (CST)
- Toronto (EST/EDT)
- Vancouver (PST/PDT)
- São Paulo (BRT)
- Buenos Aires (ART)

### Europe
- London (GMT/BST)
- Paris (CET/CEST)
- Berlin (CET/CEST)
- Madrid (CET/CEST)
- Rome (CET/CEST)
- Amsterdam (CET/CEST)
- Brussels (CET/CEST)
- Vienna (CET/CEST)
- Prague (CET/CEST)
- Budapest (CET/CEST)
- Moscow (MSK)
- Istanbul (EET)

### Africa
- Cairo (EET)
- Johannesburg (SAST)
- Lagos (WAT)

### Asia
- Dubai (GST)
- Delhi (IST)
- Bangkok (ICT)
- Hong Kong (HKT)
- Shanghai (CST)
- Tokyo (JST)
- Seoul (KST)
- Singapore (SGT)
- Manila (PHT)
- Jakarta (WIB)
- Kuala Lumpur (MYT)
- Ho Chi Minh (ICT)

### Oceania
- Sydney (AEDT/AEST)
- Melbourne (AEDT/AEST)
- Auckland (NZDT/NZST)

## 📊 Clock Features

### Digital Clock
- 24-hour format
- Displays hours, minutes, and seconds
- Updates smoothly in real-time

### Analog Clock
- Hour hand (blue)
- Minute hand (purple)
- Second hand (red)
- Smooth continuous motion

### Additional Info
- Timezone name and country
- Current date
- UTC offset
- Delete button for easy removal

## 🎨 Design

- **Modern UI**: Gradient purple background
- **Card Layout**: Each timezone in a clean card with hover effects
- **Smooth Animations**: Fade-in and scale animations
- **Color Coded**: Different colors for analog clock hands
- **Responsive**: Adapts to all screen sizes

## 📝 Technical Details

### Files
- **index.html**: Main HTML structure and styling
- **timezone-data.js**: Timezone and city data
- **clock.js**: Clock logic and updates

### Technologies
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no dependencies)
- JavaScript Intl API for timezone conversion

## 🔄 How Timezones Work

The application uses JavaScript's `toLocaleString()` method with the `timeZone` option to accurately display time in different timezones. This handles daylight saving time automatically.

```javascript
const localTime = new Date(now.toLocaleString('en-US', { 
    timeZone: 'America/New_York' 
}));
```

## 📱 Responsive Features

- Grid layout adapts from 3 columns to single column on mobile
- Touch-friendly button sizes
- Readable font sizes on all devices
- Optimized for screens as small as 320px

## 🎯 Usage Examples

### Add Current Time in New York
1. Type "New York" in the input
2. Click "Add Clock"
3. See real-time clock for NYC

### Add Time Using Dropdown
1. Click the timezone dropdown
2. Select "Tokyo"
3. Clock automatically adds

### Compare Multiple Timezones
1. Add clocks for New York, London, and Tokyo
2. Easily compare current times
3. See date differences

## 💡 Tips

- The dropdown auto-adds clocks when you select a timezone
- Press Enter after typing a city name to add it
- Hover over clock cards to see elevation effect
- All clocks update synchronously
- Works offline (no external API calls)

## 🌐 Browser Compatibility

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Opera 74+

## 📄 License

Free to use and modify!

---

**Enjoy tracking time across the world!** ⏰🌍