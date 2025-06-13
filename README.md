# Angular Demo Weather App

## Technologies Used

- **Angular 19** with Signals API
- **Tailwind CSS** for styling, pure CSS can be used however, tailwind provides a vast increase in efficiency.
- **RxJS** for reactive, declarative state management
- **Netlify Functions** (Node.js + Express) for secure API proxy
- **OpenWeatherMap API** (Weather data)

---

## Design Decisions

- **Separation of Concerns**: Weather logic is encapsulated in a dedicated service (`WeatherService`) with signal-based reactive state. This mimicks Redux style state management without the need for third-party libraries.
- **No Manual Subscriptions**: Component templates bind to signals (`weather()`, `error()`, etc.) for automatic UI updates without `subscribe()`. This also prevents memory leaks due to unhandled subscriptions inside components.
- **API Key Security**: API key is stored in environment variables and hidden from frontend by routing requests through a Node.js proxy hosted on Netlify.

---

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/lucianblignaut/weather-app.git
cd angular-weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
ng serve
```

## Units

Units are set to be metric, so temperature is measured in celcius.
