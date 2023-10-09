# React Starter Kit with TypeScript

=====================================================================

This is a starter kit for building React applications with TypeScript. It includes state management using Recoil, optional Sass setup in the assets folder, and routing configured with react-router-dom. The project is set up to use Vite as the build tool.

## Features

--------

* [Recoil](https://recoiljs.org/): A state management library for React applications.
* [Sass](https://sass-lang.com/): An optional minimal Sass setup for styling.
* [react-router-dom](https://reactrouter.com/): For client-side routing in your React application.
* [Vite](https://vitejs.dev/): A build tool for faster development and optimized production builds.
* [Axios](https://axios-http.com/docs/): A library for client-side http requests.

### Getting Started

1. Clone this repository to your local machine:

    git clone [https://github.com/chris-briddock/ChristopherBriddock.ReactStarterKit](https://github.com/chris-briddock/ChristopherBriddock.ReactStarterKit)

2. Install project dependencies using npm or yarn:

    cd react-starter-kit-ts
        npm install
            or
        yarn install

3. Start the development server:

    npm run dev-compile
        or
    yarn dev-compile

    This will start the Vite development server with hot module replacement.

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see your app in action.

### Available Scripts

* `npm run dev`: Start the development server with Vite.
* `npm run build`: Build your application for production.
* `npm run lint`: Run ESLint for TypeScript files.
* `npm run preview`: Preview the production build locally.
* `npm run compile-styles`: Compile Sass styles to CSS for production.
* `npm run dev-compile-styles`: Compile Sass styles to CSS for development.
* `npm run dev-compile`: Compile styles, run ESLint, and start the development server.
* `npm run preview-compile`: Compile styles, run ESLint, and preview the production build.
* `npm run dev-watch-compile-styles`: Watch Sass files for changes and compile to CSS.

### Folder Structure

* `src/`: Contains your application source code.
* `assets/`: Static assets like images and styles.
* `components/`: React components, one or more module makes up a component.
* `modules/`: Modules for your application.
* `pages/`: Static assets like images and styles.
* `routes/`: Define your application routes here.
* `services/`: Calls to APIs.
* `App.tsx`: Main application component.
* `dist/`: Production build output folder.

### Customize

You can customize this starter kit to suit your project needs. Feel free to modify the folder structure, add more components, styles, or dependencies as required.

### License

This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details
