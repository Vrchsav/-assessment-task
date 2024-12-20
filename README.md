
# React + Vite 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
 
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)  uses [Babel](https://babeljs.io/)  for Fast Refresh
 
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)  uses [SWC](https://swc.rs/)  for Fast Refresh


---


### Project Structure 

The project follows a modular structure:


```csharp
vite-project/
├── public/
│   └── codin.svg            # Static assets
├── src/
│   ├── assets/              # Asset management
│   │   └── assets.js
│   ├── components/          # Reusable components
│   │   ├── ClassMenu/
│   │   │   └── ClassMenu.jsx
│   │   ├── Loading/
│   │   │   └── Loading.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── PassengerCard/
│   │   │   └── PassengerCard.jsx
│   │   ├── PassengersPage/
│   │   │   └── PassengersPage.jsx
│   │   └── PostCard/
│   │       └── PostCard.jsx
│   ├── Context/             # Context API 
│   │   └── TimeContext.jsx
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Passengers/
│   │   │   └── Passengers.jsx
│   │   └── Posts/
│   │       └── Posts.jsx
│   ├── App.jsx              # Root component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── .gitignore               # Git ignore file
├── index.html               # HTML template
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Dependency lock file
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```


---


### Getting Started 
 
1. **Install dependencies** 
Run the following command to install project dependencies:

```bash
npm install
```
 
2. **Run the development server** 
Start the development server using:

```bash
npm run dev
```
 
3. **Build the project** 
To create a production-ready build, use:

```bash
npm run build
```
 
4. **Preview the build** 
To preview the production build locally:

```bash
npm run preview
```


---


### Features 
 
- **React** : Component-based architecture.
 
- **Vite** : Lightning-fast development environment.
 
- **Tailwind CSS** : Utility-first CSS framework.
 
- **Context API** : State management.
 
- **Reusable Components** : Modular and maintainable code structure.


---


