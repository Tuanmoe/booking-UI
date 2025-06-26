# Booking UI

A modern booking interface built with React, TypeScript, TailwindCSS, and Shadcn/UI components.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Calendar**: Select dates with visual feedback
- **Time Slot Selection**: Choose available time slots
- **Pricing Options**: Multiple pricing plans with selection
- **Payment Methods**: Support for TWINT and cash payments
- **Form Validation**: User input validation
- **Modern UI**: Clean and intuitive interface

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn/UI Components
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd booking-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components
├── lib/              # Utility functions
├── pages/            # Page components
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── index.css         # Global styles
```

## Components

- **Button**: Customizable button component with variants
- **Input**: Styled input field component
- **Card**: Container component for content sections
- **Label**: Form label component

## Usage

The booking interface allows users to:

1. Enter their name and email
2. Select a pricing plan (1 hour or 11 hours)
3. Choose a date from the calendar
4. Pick an available time slot
5. Confirm their booking

The interface is designed in French and includes:
- Free trial session option
- TWINT and cash payment methods
- Interactive calendar for September
- Time slot grid with availability
- Booking confirmation summary