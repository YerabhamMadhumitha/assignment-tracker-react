Assignment Tracker (React)

1. Project Overview
Assignment Tracker is a single-page React application that allows users to manage academic assignments efficiently. The application supports creating, deleting, marking assignments as completed, and persists data using browser localStorage.
The project demonstrates core React concepts including state management, event handling, conditional rendering, immutable updates, and side effects using hooks.

2. Features
Add new assignments
Prevent empty submissions
Delete assignments
Mark assignments as completed
Toggle completion status
Persistent data using localStorage
Conditional UI updates based on state
Real-time rendering using React state

3. How the Application Works
The application uses React functional components.
State is managed using the useState hook.
Assignments are stored as objects in an array:
{
text: "Assignment name",
completed: false
}

When a user enters text and clicks "Add":
The input is validated.
A new assignment object is added to the state array.
The input field is cleared.
The UI re-renders automatically.

When a user clicks "Delete":
The selected assignment is removed using the filter() method.
State updates trigger a re-render.

When a user clicks on an assignment text:
The completed property is toggled using the map() method.
Conditional styling applies a line-through effect.

Persistence:
Assignments are initialized from localStorage using lazy state initialization.
A useEffect hook listens for changes in assignments state.
Whenever state changes, data is saved to localStorage.
Data remains intact after page refresh.

4. Technical Concepts Implemented

Functional Components
React Hooks (useState, useEffect)
Controlled Components
Immutable State Updates
Array Methods (map, filter)
Conditional Rendering
Conditional Styling
Event Handling
Local Storage Integration
Dependency Arrays in useEffect

5. Tech Stack

React (Functional Components + Hooks)
JavaScript (ES6+)
Vite (Development Environment)
HTML5
CSS3
Git (Version Control)
GitHub (Repository Hosting)
