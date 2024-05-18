### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The app hosts fetches a library of movie information and presents them to the user on page load. From here, the user has the ability to select any individual movie and read an entirely new render of information for the selected movie. The user also has the ability to search for a movie by title and have live results. Once a movie is selected, the user has ability to return to the main page and browse through all other movies. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Access the form here: https://github.com/moth-dust/rt-zach-gwyneth
2) Copy the SSH repository URL git@github.com:moth-dust/rt-zach-gwyneth.git
3) Open terminal and 'cd' into the directory you wish to clone 
4) Clone the repository by submitting `git clone git@github.com:moth-dust/rt-zach-gwyneth.git`

For Testing:
1) cd into the directory and run 'npm start' in the terminal
2) In another tab in your terminal, run 'npm run cy:open" 
3) Choose e2e testing
4) Run on your browser of choice (Preferebly Chrome)
5) Select 'rt-test.cy.js' in the browser

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Live search bar filters movies by title](https://ibb.co/JjGCB6g)
![Movie information can be chosen directly](https://ibb.co/34hkB2b)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This two-part project was assigned in Week 13 and Week 14 of Turing Boot Camp. This project was the introductory project of Turing School's "Module 3", each module being six weeks in length, building the app with React components in the first portion, and restructuring the design to operate on React Routes on the second. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Gwyneth Patrick: https://github.com/moth-dust
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The main learning goal of the project was to get continued practice working with React. In this project, we had the ability to render a mapping of movie data in objects passed as props to components, and using conditional rendering to display UI elements based on user interactions. Hooks were used to call change to the state of information on the DOM, specifically useState() hooks data display and useEffect() for handling side effects resulting in fetch requests. PropTypes were used to verify the type of information being passed as a prop to each component. 

The purpose of the second portion of the project was to transition a project build into using BrowserRouter, Routes, and Link implementation to demonstrate conciseness of newer technologies. 

Technologies used include React, JSX, Cypress, React hooks, PropTypes, HTML, JS/ES6, CSS

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) A large with was implementing React Routes, namely discovering the efficiencies that go along with the new technologies. Designing and mapping Routes with dynamic paths created a cleaner, tightened code build. 
2) Learning Cypress testing technology was another win, namely discovering the nearly limitless abilities of being able to test for virtually anything. A challenge was learning the process of intercepting requests, and the end result can now simulate page loads for a wide range of hypothetical errors. 