# E-Commerce Back End

# Preview

# Description
This repository contains the back end implementation for an e-commerce website. The goal of this project is to leverage the latest technologies to develop a robust and competitive e-commerce platform. The back end is built using Express.js, a fast and flexible web application framework for Node.js. Sequelize, a powerful ORM (Object-Relational Mapping) library, is used for managing the database and interacting with it.
# Installation
To install and set up the project locally, follow these steps:

<br>1. Clone the repository from GitHub.
<br>2. Navigate to the project directory.
<br>3. Install the dependencies by running the command npm install.
<br>4.Create a .env file in the root directory and provide the following environment variables:
<br> DB_NAME: the name of your MySQL database.
<br> DB_USER: the username for accessing the MySQL database.
<br> DB_PASSWORD: the password for the MySQL user.
<br>5. Ensure that you have MySQL installed and running on your machine.
<br>6. Run the database schema and seed commands by executing npm run db:create and npm run db:seed, respectively. This will create a development database and populate it with test data.
<br>7. Finally, start the server by running npm start.

# Usage
After successfully installing and running the project, you can interact with the API using an API testing tool such as Insomnia Core. The following routes are available:
<br> GET /api/categories: Retrieves all the categories with their associated products.
<br> GET /api/products: Retrieves all the products with their associated category and tag information.
<br> GET /api/tags: Retrieves all the tags with their associated products.
<br> POST /api/categories: Creates a new category.
<br> POST /api/products: Creates a new product.
<br> POST /api/tags: Creates a new tag.
<br> PUT /api/categories/:id: Updates a category with the specified ID.
<br> PUT /api/products/:id: Updates a product with the specified ID.
<br> PUT /api/tags/:id: Updates a tag with the specified ID.
<br> DELETE /api/categories/:id: Deletes a category with the specified ID.
<br> DELETE /api/products/:id: Deletes a product with the specified ID.
<br> DELETE /api/tags/:id: Deletes a tag with the specified ID.
<br> Ensure that you provide the necessary data in the request body or parameters when testing the POST and PUT routes.
# Contribution

# Technology

# Author 
https://github.com/nigeldwatkins 

# License
This project is licensed under the MIT license.