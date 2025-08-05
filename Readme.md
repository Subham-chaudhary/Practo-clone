# Practo Clone

![Practo Clone Logo](practo-frontend/public/practo-clone-logo.png)

A full-stack web application that replicates the core functionalities of Practo, allowing users to find doctors using location and specialization.

## Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind CSS](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

## Features

*   **Doctor Search:** Find doctors based on location and specialization.
*   Core functionality replicating Practo.
*   User-friendly interface for easy navigation.
*   Responsive design for optimal user experience.

## API Endpoints

The backend server provides the following API endpoints:

### Autocomplete

*   **Method:** `GET`
*   **Path:** `/api/autocomplete`
*   **Parameters:**
    *   `q` (string): The search query.
    *   `isregion` (boolean): A flag to specify whether the search is for a region.
*   **Description:** Provides autocomplete suggestions for cities, localities, or general queries.

### Suggestions

*   **Method:** `GET`
*   **Path:** `/api/suggestions`
*   **Parameters:**
    *   `city` (string): The city for which to get suggestions.
    *   `query` (string): The type of query.
*   **Description:** Provides top suggestions based on a city and query type.

### Search Doctors

*   **Method:** `POST`
*   **Path:** `/api/search/doctors`
*   **Request Body:** A JSON object containing the search criteria.
*   **Description:** Searches for doctors based on the provided criteria in the request body.

## Getting Started

### Prerequisites

*   Node.js and npm
*   Java Development Kit (JDK)
*   Maven

### Backend Setup (practo_demo_server)

1.  Navigate to the `practo_demo_server/practo-demo` directory:
    ```bash
    cd practo_demo_server/practo-demo
    ```
2.  Run the Spring Boot application:
    ```bash
    ./mvnw package
    ```
3.  Run the Spring Boot application:
    ```bash
    java -jar target/practo-demo-0.0.1-SNAPSHOT.jar
    ```

### Frontend Setup (practo-frontend)

1.  Navigate to the `practo-frontend` directory:
    ```bash
    cd practo-frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## Project Structure

*   `practo_demo_server`: Contains the Spring Boot backend application.
*   `practo-frontend`: Contains the Next.js frontend application.

## Screenshots

### Practo Clone UI
<img src="https://i.ibb.co/jP0TxrVq/image.png" alt="Find Doctors" style="border-radius: 10px;"/>

### Search Results
<div style="display: flex; justify-content: space-between;">
<img src="https://i.ibb.co/mVTbkSp4/Screen-Shot-2025-08-05-at-18-29-22.png" alt="Results" style="border-radius: 25px; width: 40vw;"/>
<img src="https://i.ibb.co/997Hv1NZ/Screen-Shot-2025-08-05-at-18-37-55.png" alt="Results" style="border-radius: 25px; width: 40vw;"/>
</div>

## Live Demo

A live demo of the application is available here: [https://practo-clone.vercel.app](https://practo-clone.vercel.app/).

## Api Endpoints

*   [https://practo-clone.vercel.app/api/autocomplete?q=delhi](https://practo-clone.vercel.app/api/autocomplete?q=delhi)
*   [https://practo-clone.vercel.app/api/suggestions?city=delhi&query=doctors](https://practo-clone.vercel.app/api/suggestions?city=delhi&query=doctors)
*   [https://practo-clone.vercel.app/api/search/doctors](https://practo-clone.vercel.app/api/search/doctors)

## Development Journey

This project was built incrementally, starting with the backend API and then developing the frontend user interface. Key milestones in the development process include:

*   **Initialization:** Set up the initial Spring Boot and Next.js applications. (2 hours)
*   **Backend Development:** Implemented the core API endpoints for doctors and appointments using webclient and custom object mapper. (15 hours)
*   **Frontend Development:** Built the user interface for searching doctors and booking appointments, and mimicked the Practo user interface. Made it better responsive and smoother. (25 hours)
*   **UI Enhancements:** Made several improvements to the user interface and fixed bugs. (5 hours)
*   **Finalization:** Completed the UI and integrated the frontend with the backend. (10 hours)

Total development time: 42 hours.
