# Volunteer Dashboard

A simple and functional React application to display, filter, and manage a list of volunteer opportunities.

## Features
- Display a list of volunteer opportunities using cards.
- Filter opportunities by text (title or organization) and category.
- Add new opportunities using a form.
- View detailed information about an opportunity in a modal.
- Fully responsive design.

## Technologies Used
- **React** (with TypeScript)
- **CSS** (for styling)
- **Axios** (or Fetch API for mock API integration)
- **JSON Server** (for mock API)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd volunteer-dashboard 
`npm install`
### `npm start`


Open [http://localhost:3000] to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.



### `npx json-server --watch db.json --port 5000`
Access the mock API at [http://localhost:5000/opportunities].


Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it..

##  Mock API

1. Create a db.json file in the root directory with the following structure:

{
  "opportunities": [
    {
      "id": "1",
      "title": "Volunteer Teacher",
      "organization": "Teach for All",
      "location": "New York",
      "datePosted": "2025-05-20",
      "category": "Education",
      "description": "Teach underprivileged children.",
      "duration": "3 months",
      "skillsRequired": "Teaching, Communication",
      "contactEmail": "contact@teachforall.org"
    }
  ]
}


2. Start the mock API server:

`npx json-server --watch db.json --port 5000`


3. Access the mock API at http://localhost:5000/opportunities.
Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting]

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
