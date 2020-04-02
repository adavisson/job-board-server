# Job Board Server

## About
This application works as the backend for Job Board. It uses GraphQL to work with User, Companies, Job Postings, Contacts, Notes, and Application types.

## To Run
1. Clone the repository
2. Get .env file with appropriate variables and place in root directory
3. From the root directory run the following commands:
  a. Run ```npm install```
  b. Run ```docker-compose up -d```
  c. Run ```prisma deploy```
  d. Run ```npm start```