# Saraha App

 Application built using Node.js and MongoDB to enable anonymous messaging, user profile management, and post interaction.

## Features

- **User Authentication**:
  - Role-based access control (Admin, User, HR).
  - Sign-up and log-in functionality with password encryption (bcrypt).
  - JWT-based authentication for secure session management.

- **Messaging**:
  - Anonymous messaging system.
  - CRUD operations for messages.

- **User Profiles**:
  - Profile picture and cover picture uploads with validation using Multer.
  - User-specific settings and profile details.

- **Posts and Comments**:
  - Users can create posts with title and description.
  - Commenting functionality with seamless integration.

- **Validation**:
  - Joi validation for request bodies, parameters, and queries.

- **Image profile Upload**:
  - Configurable image upload system using Multer with dynamic folder creation.

- **Database**:
  - MongoDB with Mongoose for schema-based modeling.
  - Relationships between users, posts, comments, and messages.

- **Middleware**:
  - Custom authentication middleware to handle authorization.




## Installation and Setup

To run this application, follow these steps:

1. Install Node.js and MongoDB on your machine.

2. Clone this repository:
   ```
3.  Install dependencies:
   ```bash
   npm install
4. Set up environment variables:
   Create a `.env` file in the root directory with the following values:
   ```env
   databaseurl=<your_mongo_connection_url>
   tokenSignature=<your_secret_key>
   Bearerkey=<your_bearer_key>
   saltRound=10
   ```

5. Start the application:
   ```bash
   npm start



# Documentation API LINK: 
https://documenter.getpostman.com/view/29102853/2sAYJ6CfDz