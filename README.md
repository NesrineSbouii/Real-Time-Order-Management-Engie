# Real Time Order Management

# Project Description

The Real-Time Order Management System is an Angular application designed to manage and display real-time data for random orders. The application consumes data via WebSocket, grouping products by category, and enables compare prices of products within the same category. This project for demonstrating real-time data handling, efficient state management, and responsive UI design.

# Key Features:

• Real-Time Data: Fetches and updates order data in real-time using WebSocket.

• Product Categorization: Dynamically groups products by category for easy comparison.

• Price Comparison: compare prices of products within the same category.

• Efficient State Management: Utilizes NgRx for managing the state across the application.

• Responsive Design: Styled with Tailwind CSS for a responsive and modern user interface.

• Order History Visualization: Displays a historical view of ordered products, showing updates in the last 30, 60, and 120 seconds.
• Mock Server: Running in 3000 port to generate random data.

# Technologies Used

• Angular 17.3.8: Front-end framework for building the user interface.

• Node.js 20.8.1: Used for the backend to mock and send real-time data.

• WebSocket.io: For real-time communication between server and client.

• NgRx: State management library for handling complex state interactions in Angular.

• Tailwind CSS: Utility-first CSS framework for designing responsive and modern UIs.

• Facade Design Pattern: Strong Independent Data Source

# Installation

Prerequisites

• Node.js (version >=20)
• Angular CLI (version 17.3.8)
• Git
Steps to Install and Run the Project Locally

1. Clone the Repository:
   ```
      git clone https://github.com/NesrineSbouii/Real-Time-Order-Management-Engie.git
   ```
2. Install Dependencies:
   ```
      npm install
   ```
3. Run the Mock Server and the Angular Application:
   ```
    npm run dev OR npm run dev:server && npm run dev:start
   ```
