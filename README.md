# TaskList (Todo App)

A functional and persistent Todo Application built to help users manage their daily tasks efficiently. The purpose of this project is to demonstrate a modern, component-based approach to web development using **React** and **Vite**, focusing on state management and local data persistence.

## 🎯 Project Purpose

The main goal of **TaskList** is to provide a clean and intuitive interface for task management while serving as a practical example of:
*   Building interactive user interfaces with React.
*   Managing application state effectively.
*   Persisting user data so it isn't lost on refresh.
*   Structuring a React codebase with reusable components.

## 🛠️ Tools & Technologies Used

This project was created using the following technologies to ensure performance and maintainability:

*   **[React](https://react.dev/)**: The core JavaScript library used for building the user interface and handling the component-based architecture.
*   **[Vite](https://vitejs.dev/)**: A fast build tool and development server used to bootstrap the project (`npm create vite@latest`) and provide Hot Module Replacement (HMR).
*   **JavaScript (ES6+)**: Used for all application logic, including arrow functions, array methods (`map`, `filter`), and destructuring.
*   **CSS3**: Standard CSS for styling the application, ensuring a responsive and pleasant user experience.
*   **Local Storage API**: Integrated to save your "TaskList" data directly to the user's browser, ensuring tasks persist across sessions.
*   **Git**: Used for version control to track changes and manage the codebase.

## 🚀 Features

- **Add New Tasks**: Simple input field to append new items to your list.
- **Track Progress**: Mark tasks as "Completed" to move them to the finished list.
- **Delete Support**: Remove unwanted tasks instantly.
- **Smart Filtering**: Switch between "All", "Open", and "Completed" tabs to stay organized.
- **Data Persistence**: Refreshing the page doesn't lose your data thanks to `localStorage`.

## 📂 Project Structure and Logic

The project is designed with a clear separation of concerns:

-   **`App.jsx`**: The "brain" of the app. It holds the `todos` state and the functions to add, delete, and complete tasks.
-   **`components/`**: Folder containing focused, reusable UI pieces:
    -   `Header.jsx`: Shows the app title and open task count.
    -   `Tabs.jsx`: Handles the navigation/filtering logic.
    -   `TodoList.jsx` & `TodoCard.jsx`: Responsible for rendering the list of tasks and individual items.
    -   `TodoInput.jsx`: Handles user input for new tasks.

## 🏃‍♂️ How to Run Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Start-Admin/TaskList.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd todo-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the app**:
    ```bash
    npm run dev
    ```
