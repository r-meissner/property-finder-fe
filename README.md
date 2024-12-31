# NestFinder
This project is a part of the Full Stack Web & App Bootcamp at [WBS Coding School](https://www.wbscodingschool.com/). The goal of this project was to create an interactive web application for finding properties, practice interacting with CRUD endpoints, and start to learn about authentication.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Homepage](#homepage)
  - [Property List Page](#journal-page)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Learning Outcomes](#learning-outcomes)
- [Refactoring](#refactoring)
- [Contributing](#contributing)
- [Useful Resources](#useful-resources)
- [Team Members](#team-members)
- [Disclaimer](#disclaimer)

## Project Overview

The NestFinder project involves creating an interactive web application that allows users to search for properties, view property details, and manage their listings. This project emphasizes individual and group development, code management via GitHub, and enhancing JavaScript skills in a browser environment.

## Features

### Homepage

- Displays a hero section with a search bar.
- Shows a map with property markers.
- Allows users to search for properties by location, type, and price range.

### Property List Page

- Retrieves and displays a list of properties from the API.
- Includes a search bar at the top.
- Displays properties as cards with images, names, and relevant info.
- Allows users to filter properties by various criteria.

## Technologies Used

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite">
  <img src="https://img.shields.io/badge/DaisyUI-1AD1A5?logo=daisyui&logoColor=fff&style=flat" alt="DaisyUI">
  <img src="https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat" alt="Leaflet">
</p>

## Usage

To use the NestFinder web application:

1. Clone the repository.
2. Navigate to the project directory.
3. Create a .env file with the variable `VITE_API_URL=https://property-project-be.onrender.com/api/v1/`.
4. Install the dependencies with `npm install`.
5. Start the development server with `npm run dev`.
6. Open `http://localhost:5173` in your browser.
7. Use the search bar to find properties and view their details.

## Project Structure

```
nestfinder/
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src/
│   ├── components/
│   │   ├── CreateProperty.jsx
│   │   ├── EditProperty.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── Map.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyDetails.jsx
│   │   ├── PropertyList.jsx
│   │   ├── Register.jsx
│   │   └── SearchBar.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages/
│       ├── AboutPage.jsx
│       ├── ContactPage.jsx
│       ├── CreatePropertyPage.jsx
│       ├── EditPropertyPage.jsx
│       ├── ErrorPage.jsx
│       ├── HomePage.jsx
│       ├── PropertyDetailPage.jsx
│       └── PropertyListPage.jsx
├── tailwind.config.js
└── vite.config.js
```

## Learning Outcomes

Through this project, we gained valuable experience and skills in the following areas:

- Handling more complex API calls.
- Displaying geographical data using Leaflet.
- Implementing a basic Login function.

## Refactoring

As part of the continuous improvement process, we are currently focusing on refactoring our NestFinder project. The goal is to enhance the internal structure, readability, and maintainability of the codebase without altering its external behavior or functionality. Key areas of focus include:

- Fixing bugs
- Improving error handling
- Adding missing content

## Contributing

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Useful Resources

- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/)
- [Leaflet Documentation](https://leafletjs.com/)
- [Vite Documentation](https://vitejs.dev/guide/)

## Team Members

- [Ruth](https://github.com/r-meissner)
- [Timur](https://github.com/timataliatov)
- [Lisa](https://github.com/orangethief)
- [Alex](https://github.com/adnedelcu)

## Disclaimer

This project is created for educational purposes as part of the WBS Coding School Bootcamp.