# Task List in React.js
Hi! This project is still work in progress while I learn basics of React.js
I've created it as a part of entry level online course for Frontend developers that I'm participating in.
This project is in polish.

Thank You for stopping by.
## Demo

https://bedicooper.github.io/taskList__react/

## Technologies used throughout the projects life
_Newest additions are in **bold**_
|   HTML        |   CSS           |   JavaScript        | ReactJS          |
| :---:         | :---:           | :---:               | :---:            |
| Google Fonts  | Normalize CSS   | ES6+                | create-react-app |
| BEM           | grid            | Redux               | Webpack          |
|               | flex            | RTK                 | Babel            |
|               | media queries   | Redux Saga          | React DOM        |
|               |                 | fetch w/ asyc/await | State, Effect and Ref hooks    |
|               |                 | **URLSearchParams** | Custom hooks     |
|               |                 |                     | Style Components |
|               |                 |                     | react-redux      |
|               |                 |                     | **React Router** |
|               |                 |                     | **useParams**    |
|               |                 |                     | **useLocation**  |
|               |                 |                     | **useHistory**   |

## What's inside?
My task list is built on a simple form with one input and a submit button.

List of records will apear beneth the form, each record with two buttons, one to mark task as done and one to delete the task form the list.

![screenshot of the website showing task list with three items below an input form. Second item on the list is marked as done, its text stroke through](https://raw.githubusercontent.com/bedicooper/taskList__react/main/websiteScreenshot-v0.4.4.png)
_Above screen comes from v.0.4.4_

### How to use my App?
Sience _0.4.1_ there is a new button to fetch example tasks. Completing those tasks is a de-facto tutorial for the app. Enjoy! 

1. Enter the task to be performed. Empty input will not be accepted.
2. The entered task will appear on the list between the two buttons,
3. Mark the task as completed with green, and remove the task from the list with the red button.
4. Above the list there is a counter showing how many tasks remain to be completed.
5. With one click you can mark all tasks as completed and also hide all completed tasks.
6. New input filed lets You filter the tasks.

### What's new? _v.0.4.4_
**0.4.4**
I've added an input field to filter tasks by their content. To achive that I'm using useLocation, useHistory from react-router and URLSearchParams.

**0.4.3**
Added an about me page with React Router, as well as subpages with tasks details

**0.4.2**
Brought back localStorage for tasks with redux-saga!

**0.4.1**
Added a button that sets 6 example tasks as a app tutorial. 
Added a saga to handle fetching those tasks form a local .json file.

**0.4.0:**
Refactor to Redux. Interactions moved to reducers. App stop saving task list state to LocalStorage { for now }

**0.3.0:**
Refactor with Style Components.

**0.2.0:**
I've added a counter of tasks yet to be done,
moved task logic to custom hook.
Taski list is now stored client-side. 

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
