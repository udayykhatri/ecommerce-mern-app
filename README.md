# E-Commerce Web Application

## Project Overview

A simple E-Commerce application built using the MERN Stack.

### Features

* Product Listing Page
* Add to Cart Functionality
* Increase/Decrease Cart Quantity
* Cart Total Calculation
* Responsive UI
* REST APIs
* MongoDB Database Integration

## Tech Stack

### Frontend

* React.js
* Vite
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

## Project Structure

E-commerce-app

├── backend

├── frontend

└── README.md

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

## Author

Uday
