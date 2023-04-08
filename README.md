# MoviesHub Documentation

## Home page
The home page consists of a hero header with a link to the catalog and (depending on whether there are movies in the catalog) a carousel with the latest three movies in the catalog. Each element of the carousel contains the title, sub title of the given movie and a "View" button which takes you to the details page of the movie when clicked.

## Login page
The login page provides a form with an email and password input fields for a user to login to their account.

## Register page
The register page provides a form for creating an account. An account has an email address, username and a password.
## Catalog page
The catalog contains a list of all the movies that are registered on the website. Each movie is displayed with a card that contains the title, sub title and a "View" button which takes you to the details page of the movie. If there are no movies a proper message will be displayed.

## My movies page
Similar in structure with the catalog page, the my movies page will display the list of movies created by the currently logged in user. The page is available only for logged in users.

## Register a movie page
The page contains the form for registering a new movie. There are input fields for: Title, Sub title, Description, Director, Genre, Cast, Duration, Year, Image Url and Trailer Url. The provided image and trailer links from the user will display the appropriate media in the movie details.

## Movie details page
The movie details page displays the whole information for the given movie. Next to the text information is the movie poster. Underneath this information section is the trailer of the movie which is an embedded YouTube video. Underneath that is the form for adding a review. The review consists of a rating from "Very bad" to "Excellent" and a description. If there are reviews of the movie they will be displayed underneath the "Add review" form. A user is permitted only one review per movie. When a review is submitted the form stops being rendered.

### Movie details for owner
If the logged in user is owner of a given movie in the details page of this movie will be displayed two buttons for edit and delete actions. When the edit button is clicked a form identical to the one for registering the movie will appear, but with the initial values of the chosen movie. The owner is free to change every property of the movie. When the delete button is clicked a confirmation window will appear to ask whether the user wants to proceed with the deletion of the movie. When confirmed the movie is deleted from the catalog.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
