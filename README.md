# RailSetu

RailSetu is a smart railway crowd management platform that helps passengers and station authorities monitor congestion in real time. It provides a simple, visual dashboard to understand crowd density across different zones and guides passengers toward less crowded areas.

The project is designed for smoother station flow, better safety, and reduced crowd-related stress during busy travel periods.

## Why RailSetu?

Railway stations often face unpredictable crowd surges, especially during rush hours, festivals, and delays. RailSetu helps by:
- visualizing crowd distribution across station zones
- highlighting overcrowded areas
- showing station health at a glance
- guiding passengers to safer, less crowded routes

## Features

- Real-time crowd simulation across platform zones
- Zone-wise crowd density monitoring
- Color-coded health status for each zone
- Admin dashboard for station monitoring
- Passenger guidance panel with route suggestions
- Alert simulation for station announcements
- Responsive UI for easy monitoring

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS

## Project Structure

```bash
rail-setu/
├── src/
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── PassengerView.jsx
│   │   ├── ZoneCard.jsx
│   │   └── platformGrid.jsx
│   ├── logic/
│   │   └── crowdLogic.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── LICENSE
└── node_modules/
```
### Getting Started
### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)

### Installation
npm install
```
run the following command to install dependencies:
```
npm run dev
```
production build:
```
npm run build

### How it works
the platform simulates crowd movement across different zones of a railway station. Each zone is represented by a card that displays its current crowd density and health status. The admin dashboard allows station authorities to monitor the overall station health, while passengers can view real-time updates and receive guidance on less crowded routes.
- Green: Safe (Low crowd density)
- Yellow: Moderate (Medium crowd density)
- Red: Overcrowded (High crowd density)

The admin dashboard calculates a station health score, while the passenger view gives guidance about where to move or wait.

Screens:
the UI includes:
- a grid of station zones
- real-time updates on crowd density
- color-coded health status for each zone  

### Contributing
We welcome contributions! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include tests for new features.
- improvements to the UI/UX
- additional features for crowd management
- bug fixes and performance optimizations
- documentation updates

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
- Inspired by real-world railway crowd management challenges

### Screenshots

### Authors
- Arya Mourya  -https://github.com/AryaMourya
