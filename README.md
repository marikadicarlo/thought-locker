# thought-locker

[User Routes Video]()
[Thought Routes Video]()

# Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This app is built with Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

# Acceptance Critera
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
Make sure to have MongoDB installed on your machine.
Clone the repository to your local development environment <br />
`git clone https://github.com/marikadicarlo/thought-locker.git`

Run `npm init -y`, `npm install express`, `npm install mongoose`, `npm install moment` to install dependencies. To use the application locally, run `npm start` in your server. 

Use your browser or Insomnia to test the REST API. 

## Questions
Contact me with any questions at <mdicarlo19@yahoo.com> or [visit my GitHub page](https://github.com/marikadicarlo)