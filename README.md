# Contact Pro Application

This is a simple contact management application built using Express.js and MongoDB. Follow the instructions below to set up and run the application locally.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://docs.mongodb.com/manual/installation/)

## Getting Started

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/your-username/contact-pro.git

2. **Navigate to the project directory:**

   ```bash
   cd contact-pro
3. **Install the dependencies:**

   ```bash
   npm install

## Configure Environment Variables

1. **Create a .env file in the root of the project.**

2. **Add the following environment variables to the .env file:**
   ```bash
   DB_USER=your-mongodb-username
   DB_PASS=your-mongodb-password
**Replace your-mongodb-username and your-mongodb-password with your MongoDB Atlas username and password.**

## Running the Application
1. **Start your MongoDB server.**

2. **Run the application:**
   ```bash
   npm start

The application will be accessible at http://localhost:5000.

## API Endpoints
1. **GET /contacts: Get all contacts.**
2. **POST /add-contact: Add a new contact.**
3. **DELETE /delete/:id: Delete a contact by ID.**
4. **PATCH /update/:id: Update a contact by ID.**