# Introduction
Hi there 👋,

Thanks for taking the time to complete this brief take-home assignment. Please timebox your effort to a maximum of 3 hours.

The goal of this exercise is to evaluate your backend skills (Node.js, GraphQL, 3rd-party integration, and testing). Feel free to make any assumptions, simplifications, or other changes to the problems - though please state those in your write up when you submit this assignment. Please use as many libraries as is reasonable - there is no sense in rebuilding what has been built.

Using Apollo, and Express.js, you will create a GraphQL endpoint to retrieve a list of properties for sale in a city. SimplyRETS is an API commonly used in real estate world and you will need to use it to retrieve the properties data.

Before getting started, please read this document carefully.

**Good luck 🙃**
# Acceptance criteria
- Implement a GraphQL query that is fetching data from the SimplyRETS API `get_properties` endpoint ([documentation here](https://docs.simplyrets.com/api/index.html#/Listings/get_properties)).
- Your GraphQL query must accept a `city` filter parameter to filter the API results (e.g. `houston`)
- The `/graphql` endpoint must be protected by Bearer HTTP Authentication. You can hardcode the following credentials: `user1@sideinc.com` / `676cfd34-e706-4cce-87ca-97f947c43bd4`
- You must use `jest` to write your tests for your queries, resolvers, and middlewares.
- Please document your code via comments and the README.md to explain tradeoffs and design decisions that you have made.
# What you will be assessed on?
- All functional requirements must be satisfied
- Production-like code that must be well coded, clean, and commented
- Tests must be passing and meaningful
- General Node.js knowledge
# Submission
Once you are satisfied with your assignment, please publish your code and your README file to a Git repository. Please ignore the node_modules folder.
# Getting started
With Node 14 installed, run the following commands:
```
$ npm install
$ npm start 
```
Navigate to `http://localhost:4000/graphql`.
## What will you find inside this boilerplate
In this boilerplate, you will find:
- The main entry file: `index.js`
- All the types from the SimplyRETS API ready to use with GraphQL: `types/index.js`
- A `README.md` file to document your comments and design decisions
- Inside the `package.json`, we added the following packages:
    - `express@4.17.1`,
    - `apollo-server-express@2.21.0`,
    - `jest@26.6.3`
    
## SimplyRETS API
SimplyRETS is a platform for developers and agents to build real estate applications and websites.

Their API uses Basic Authentication, which most HTTP libraries will handle for you. To use the test data (which is what this pages uses), you can use the api key `simplyrets` and secret `simplyrets`. Note that these test listings are not live RETS listings but the data, query parameters, and response bodies will all work the same.

Please use the following endpoint: `https://api.simplyrets.com/properties`