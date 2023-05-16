**Introduction**

Congratulations on making it to the coding interview for the software engineer role at StyleAI! In this task, will be creating an upcoming feature in our website editor: domain searching. After a new customer purchases a Style site, they will have the option to select a domain to host their new website. Your job will be to create both the UI of the domain selection as well as the backend function to query for available domains.

**Task Overview**

The task is split up into two parts: the frontend (https://github.com/tapp-ai/tapp-fullstack-interview-react) and the backend (https://github.com/tapp-ai/tapp-fullstack-interview-backend)

_Note: Refer to the design drawing below for the user flow_.

Tasks for the frontend:

- Create the initial modal that pops up after clicking "Find Domain!", where the user inputs their business name (`components/ExampleModal/index.jsx`)
- Create the modal that displays available domains, which opens after the user inputs their business name (`components/ExampleModal/index.jsx`)
- Handle proper open and close logic for both modals in the Site (`components/Site/index.jsx`)
- After the user selects a domain, close the modal and display the chosen domain in the middle of the Site (`components/Site/index.jsx`)

Tasks for the backend:

- Create an endpoint that takes in a business name as an input, and generates a list of possible domains with GPT. Then check which ones are available and returns a list to the front end. (`getdomains.go`)
- Note: You may need to parse out the response of GPT into a usable array, as GPT returns a response in string format
- Use this endpoint (http://domains.usestyle.ai/api/v1/availability?domain={DOMAIN}) to check if a domain is available

The files that you will be working on include:

Frontend:

- `components/Site/index.jsx`
- `components/ExampleModal/index.jsx` (referencing the sample Modal code)
- `components/…` (if you want to create any new components, ex. new modals)

Backend:

- `main.go`
- `getdomains.go`

**Time Expectation**

This task is designed to take an experienced developer roughly 1 - 2 hours. However, since you may not be familiar with the structure of this repository and our coding practices, you may need more time. It is totally okay if you take more time.

**Resource Usage**

You are free to use any standard internet resources like StackOverflow and Golang documentation, with the exception of language models like ChatGPT. If you use any external resource, please leave comments referencing where you got help from along the way.

**Tips for Getting Started**

Before getting started with the task, you should take the time to understand the repository's structure and coding practices. You can then proceed with the following steps:
_Note: Make sure you have npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and Go (https://go.dev/doc/install) installed_

- First, get the backend up and running and connected to the frontend. To do this, run `go mod tidy` in the terminal to install all necessary go packages and `go run .` to start the backend locally.
- Then, in the frontend project root directory run `npm install` to install all react packages and `npm start` to start the frontend locally.
- To test the connection between the frontend and the backend is working, click on the "Check backend connection" button that should render on the frontend. You should receive a pop-up that says: "Success! The backend is properly connected." If this doesn't work, one common cause is the localhost port of the backend is incorrectly configured in the front end, so replace with the proper local url (`constants.js`)
- Feel free to try the sample "summarize" backend function using curl, Postman, Insomnia, or another API platform. This queries the OpenAI API to summarize some text.

If you encounter any issues or get stuck along the way, please reach out to your interviewer for assistance.

**Conclusion**

This task is designed to test your ability to work with React components, backend logic, and connecting full stack applications together. We wish you the best of luck in completing this task and look forward to reviewing your work.

**User Flow**
