# 🌤️ Weather App

A modern, responsive weather forecast application built with Vue 3, TypeScript, and Tailwind CSS. This app provides real-time weather data for locations across Indonesia using the BMKG (Indonesian Meteorological Agency) API.

## ✨ Features

- **📍 Location Management**: Add, remove, and reorder weather locations
- **🔄 Auto-refresh**: Configurable automatic weather updates
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🌙 PWA Support**: Install as a progressive web app with offline capabilities
- **⚡ Real-time Data**: Live weather updates from BMKG API
- **🎨 Modern UI**: Clean interface using PrimeVue components and Tailwind CSS
- **🗂️ Local Storage**: Persistent user preferences and cached weather data

## 🛠️ Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PrimeVue
- **State Management**: Pinia
- **API**: BMKG Weather API
- **PWA**: Vite PWA Plugin
- **Utilities**: VueUse, dayjs

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weather
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deployment

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Production build with type checking
npm run build-only   # Build without type checking
npm run preview      # Preview production build
npm run type-check   # Run TypeScript checks
```

### Linting & Code Quality

```bash
npm run lint         # Run all linters with auto-fix
npm run lint:oxlint  # Fast Rust-based linter
npm run lint:eslint  # Full ESLint with caching
```

### Deployment

The app is configured to deploy to GitHub Pages:

```bash
npm run predeploy    # Build for deployment
npm run deploy       # Deploy to GitHub Pages
```

## 🏗️ Project Structure

```
src/
├── components/          # Vue components
│   └── weather/        # Weather-specific components
│       ├── WeatherGrid.vue
│       ├── LocationManager.vue
│       └── WeatherBox.vue
├── composables/         # Reusable composition functions
│   └── useLocations.ts
├── config/             # Static configuration
│   └── locations.json
├── services/           # API services
│   └── bmkgApi.ts
├── stores/             # Pinia stores
│   ├── weatherStore.ts
│   └── preferencesStore.ts
├── types/              # TypeScript type definitions
│   └── weather.ts
├── utils/              # Utility functions
│   ├── dateUtils.ts
│   └── timeSlots.ts
└── styles/             # Global styles
```

## 🎯 Key Features

### Weather Data

- **Temperature**: Current and forecast temperatures in Celsius
- **Precipitation**: Rainfall predictions
- **Wind Speed & Direction**: Real-time wind data
- **Humidity**: Atmospheric humidity levels
- **Cloud Cover**: Sky coverage percentage
- **Visibility**: Horizontal visibility distance

### User Preferences

- **Units**: Celsius/Fahrenheit, km/h/mph/ms for wind speed
- **Auto-refresh**: Configurable intervals (5, 10, 15, 30 minutes)
- **Language**: Indonesian/English support
- **Time Format**: 12-hour or 24-hour format
- **Location Management**: Enable/disable and reorder locations

### Location Management

- **Pre-configured Locations**: Major cities and regencies across Indonesia
- **Custom Order**: Drag and drop to reorder locations
- **Enable/Disable**: Show only locations you care about
- **Maximum Locations**: Configurable limit (default: 10)

## 🔧 Configuration

### Environment Variables

The app uses an embedded BMKG API key. For production, consider using environment variables:

```typescript
// src/services/bmkgApi.ts
const API_KEY = import.meta.env.VITE_BMKG_API_KEY || 'default-key'
```

### Location Configuration

Add new locations by updating `src/config/locations.json`:

```json
{
  "locations": [
    {
      "id": "unique-id",
      "provinsi": "Province",
      "kotkab": "City/Regency",
      "kecamatan": "District",
      "desa": "Sub-district",
      "lat": -6.2088,
      "lon": 106.8456,
      "timezone": "Asia/Jakarta",
      "enabled": true,
      "order": 1
    }
  ],
  "settings": {
    "maxEnabled": 10,
    "refreshInterval": 10
  }
}
```

## 🧪 Testing

Currently, this project doesn't have a test framework configured. To add testing:

```bash
# Install Vitest and Vue test utils
npm install -D vitest @vue/test-utils

# Add test script to package.json
"test": "vitest"
```

## 📱 PWA Features

The app includes Progressive Web App capabilities:

- **Offline Support**: Cached weather data for offline viewing
- **Installable**: Add to home screen on mobile devices
- **Service Worker**: Automatic updates and resource caching
- **Responsive**: Optimized for mobile, tablet, and desktop

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project follows strict code style guidelines:

- **TypeScript**: Strict mode enabled
- **Vue 3**: Composition API with `<script setup>`
- **ESLint**: Auto-fixing lint rules with simple-import-sort
- **Prettier**: Consistent code formatting
- **EditorConfig**: 2-space indentation, LF line endings

See [AGENTS.md](./AGENTS.md) for detailed development guidelines.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **BMKG**: Indonesian Meteorological Agency for weather data API
- **Vue.js**: Reactive JavaScript framework
- **PrimeVue**: Vue component library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

## 📞 Support

For support or questions:

- Create an issue in the repository
- Check the [AGENTS.md](./AGENTS.md) for development guidelines
- Review the source code for implementation details
