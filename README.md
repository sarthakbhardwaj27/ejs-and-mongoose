# ejs-and-mongoose

# Express CRUD Application with MongoDB

This is a simple CRUD (Create, Read, Update, Delete) application built using Express.js and MongoDB. It allows you to manage users: create, view, edit, and delete them.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sarthakbhardwaj27/ejs-and-mongoose
   ```

2. Install dependencies:

   ```bash
   cd ejs-and-mongoose
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can access the application at `http://localhost:8080`. Here are the available routes:

- `/`: Home page with a form to create a new user.
- `/users`: View all users, edit existing users, or delete users.
- `/delete/:id`: Delete a specific user by ID.

## Dependencies

- `express`: Web application framework for Node.js
- `ejs`: Template engine for rendering HTML templates
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment

## Database Configuration

The application is configured to use a local MongoDB database named `tasksDB`. You can adjust the database configuration in the `models/user.js` file.

```javascript
mongoose.connect('mongodb://localhost:27017/tasksDB');
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.