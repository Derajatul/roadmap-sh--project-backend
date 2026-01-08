# Unit Converter

A simple and elegant web-based tool to convert units of length, weight, and temperature. This project is part of the [roadmap.sh](https://roadmap.sh/projects/unit-converter) backend projects (implemented here as a frontend exercise).

## Features

- **Length Conversion:** Supports Millimeter (mm), Centimeter (cm), Meter (m), Kilometer (km), Inch (in), Foot (ft), Yard (yd), and Mile (mi).
- **Weight Conversion:** Supports Milligram (mg), Gram (g), Kilogram (kg), Ounce (oz), and Pound (lb).
- **Temperature Conversion:** Supports Celsius (°C), Fahrenheit (°F), and Kelvin (K).
- **Responsive Design:** Clean and modern UI with glassmorphism effects and dynamic active states.
- **Dynamic Labels:** Input labels update automatically based on the selected category.
- **Reset Functionality:** Quickly clear inputs to start new calculations.

## Technology Stack

- **HTML5:** Semantic structure.
- **CSS3:** Custom styling with Google Fonts (Outfit).
- **JavaScript:** Client-side conversion logic and DOM manipulation.

## How to Run

Since this is a static web application, you can run it simply by opening the `index.html` file in your browser.

1. Clone the repository (if you haven't already):
   ```bash
   git clone https://github.com/Derajatul/roadmap-sh--project-backend.git
   ```
2. Navigate to the project folder:
   ```bash
   cd unit-converter
   ```
3. Open `index.html` in your favorite browser.

## Conversion Logic

- **Length & Weight:** Uses a base-unit conversion method (meters for length, grams for weight) to maintain precision and simplify the code.
- **Temperature:** Implements standard conversion formulas between Celsius, Fahrenheit, and Kelvin.
