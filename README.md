### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The app hosts fetches a library of movie information and presents them to the user on page load. From here, the user has the ability to select any individual movie and read an entirely new render of information for the selected movie. The user then has the ability to return to the main page and browse through all other movies. 

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
This first part in a two-part project was assigned in Week 13 of Turing Boot Camp, due for review and continuation in week 12. This project was the introductory project of Turing School's "Module 3", each module being six weeks in length.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Gwyneth Patrick: https://github.com/moth-dust
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The main learning goal of the project was to practice working with React. In this project, we had the ability to render a mapping of movie data in objects passed as props to components, and using conditional rendering to display UI elements based on user interactions. Hooks were used to call change to the state of information on the DOM, specifically useState() hooks data display and useEffect() for handling side effects resulting in fetch requests. PropTypes were used to verify the type of information being passed as a prop to each component. 

Technologies used include React, JSX, React hooks, PropTypes, HTML, JS/ES6, CSS

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) A large win involved implementing conditional rendering, which was an enjoyable merge of a large number of technologies and concepts learned up to this point. Because so much of our educational history thus far has been with "Vanilla JavaScript", it was a win to discover how to consolidate development needs into a method of higher performance. 
2) A challenged faced was integrating the need for handling errors on fetch requests into React technology that deals with continual rendering. As a result, it required collaboration and independent research to learn how to adapt the useEffect() hook into error handling. 