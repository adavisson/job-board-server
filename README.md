# Job Board Server

## About
This application works as the backend for Job Board. It uses GraphQL to work with User, Companies, Job Postings, Contacts, Notes, and Application types.

## To Run
1. Clone the repository
2. Get .env file with appropriate variables and place in root directory
3. From the root directory run the following commands:
  1. Run ```npm install```
  2. Run ```docker-compose up -d```
  3. Run ```prisma deploy```
  4. Run ```npm start```