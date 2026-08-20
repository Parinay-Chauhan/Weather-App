# Weather App

A modern React weather dashboard built with Vite and the OpenWeather API.
The interface is designed to feel production-ready: a soft gradient canvas, a centered glass-like card, a prominent search bar, and clear weather stats for quick scanning.

## Preview

The UI follows the reference design below:

- Centered weather card
- Rounded search field with icon button
- Large temperature and city display
- Two-column humidity and wind summary

> Reference layout:
> - Search bar at the top
> - Weather icon in the center
> - Temperature and location underneath
> - Stat blocks at the bottom

## Features

- City-based weather search
- Live data from OpenWeather
- Responsive layout for desktop, tablet, and mobile
- Weather condition icons
- Humidity and wind speed summary
- Clean card-based UI

## Tech Stack

- React 19
- Vite
- OpenWeather API
- Plain CSS for styling

## Project Structure

```text
src/
  components/
    Wether.jsx
    Wether.css
  assets/
  App.jsx
  main.jsx
  index.css
```

## Prerequisites

- Node.js 18 or newer
- An OpenWeather API key

## Environment Variables

Create a `.env` file in the project root and add your API key:

```env
VITE_APP_ID=your_openweather_api_key
```

The app reads this value in `src/components/Wether.jsx`.

## Installation

```bash
git clone <your-repo-url>
cd WetherApi
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production Build

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

## How It Works

1. The app loads default weather for Delhi on startup.
2. Enter a city name in the search box.
3. The app fetches current weather data from OpenWeather.
4. The UI updates with temperature, location, humidity, wind speed, and the matching weather icon.

## UI Notes

- The layout is responsive and adapts to small screens.
- The weather card is centered on the page using the app shell styles.
- Typography scales down smoothly for mobile devices.
- The design uses a soft purple-blue gradient to match the reference image.

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create an optimized production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Troubleshooting

- If the app does not load weather data, confirm that `VITE_APP_ID` is set correctly.
- If a city search fails, verify the spelling and spacing of the city name.
- If build commands fail on Windows PowerShell, try `npm.cmd run build`.

## License

This project is provided for learning and portfolio use. Add a license if you plan to publish or distribute it publicly.
