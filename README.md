# Job Board Server

## About
This application works as the backend for Job Board. It uses GraphQL to work with User, Companies, Job Postings, Contacts, Notes, and Application types.

## To Run
This application requires Docker to be installed on your machine. Installation instructions can be found here: https://www.docker.com/products/docker-desktop
1. Clone the repository
2. Get .env file with appropriate variables and place in root directory
3. From the root directory run the following commands:
  - Run ```npm install```
  - Run ```docker-compose up -d```
  - Run ```prisma deploy```
  - Run ```npm start```