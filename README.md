# Cookie Clicker
A simple game built with React and Redux, where the user and his score is stored in the local storage.

1. [Installation](#installation)
2. [Usage](#usage)
3. [Pages](#pages)
4. [Dependencies](#dependencies)
4. [Dev Dependencies](#devDependencies)
6. [Credits](#credits)

## Installation
To install this project, simply clone the repository and install the dependencies using npm: 
```
$ git clone https://github.com/example/cookie-clicker.git
$ cd cookie-clicker
$ npm install
```

## Usage
To run the development server, use the following command:
```
$ npm run dev
```

To build the production version of the project, use:
```
$ npm run build
```

To preview the production build, use:
```
$ npm run preview
```

To run cypress tests: 
```
$ npm run cy:run
```
to open the cypress GUI:
```
$ npm run cy:open
```

## Pages
#### Home
The home page displays a form where the user can enter their name and start the game.
#### Game
The game page displays the user's current score and buttons to click for more points. The user can also buy auto-clickers and mega-clickers to increase their score over time.

## Dependencies
* @reduxjs/toolkit: ^1.9.3
* lint-staged: ^13.1.2
* react: ^18.2.0
* react-dom: ^18.2.0
* react-redux: ^8.0.5
* react-router-dom: ^6.8.2

## Dev Dependencies
* @commitlint/cli: ^17.4.4
* @commitlint/config-conventional: ^17.4.4
* @types/react: ^18.0.27
* @types/react-dom: ^18.0.10
* @vitejs/plugin-react: ^3.1.0
* cypress: ^12.7.0
* eslint: ^8.35.0
* eslint-config-react-app: ^7.0.1
* eslint-plugin-cypress: ^2.12.1
* eslint-plugin-react: ^7.32.2
* husky: ^8.0.0
* i18next: ^22.4.10
* prettier: ^2.8.4
* react-i18next: ^12.2.0
* react-icons: ^4.8.0
* sass: ^1.58.3
* standard: ^17.0.0
* stylelint: ^15.2.0
* stylelint-config-prettier: ^9.0.5
* stylelint-prettier: ^3.0.0
* vite: ^4.1.0

## Credits
This project was created by Your Name.
