
# Simple Todo List Application

## Overview

This is a simple Todo List application built using React.js. The application allows users to add, remove, and mark tasks as completed. Additionally, it includes features for persisting tasks using local storage and filtering options.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Components](#components)
- [State Management](#state-management)
- [Bonus Task](#bonus-task)
- [Enhancements](#enhancements)
- [Final Output](#final-output)

## Objective

Create a simple Todo List application using React.js that allows users to manage their tasks efficiently.

## Features

- Add new todos
- Remove existing todos
- Mark todos as completed
- Persist todos in local storage
- Filter todos by completion status


## Components

### 1. Todo Component

- Displays a single todo item with its title and a button to remove it.
- **Expected Output:** A component that shows the title of a todo and a button labeled "Remove".

### 2. TodoList Component

- Renders a list of `Todo` components.
- **Expected Output:** A list of todo items displayed on the screen (initially empty).

### 3. Input Field for New Todos

- Implemented an input field and a button to add new todos.
- **Expected Output:** An input field and a button labeled "Add Todo". When a user types a todo title and clicks "Add Todo", the title is displayed in the list.

## State Management

- Utilizes React's state management to handle the list of todos.
- **Expected Output:** The application maintains a list of todos in the component's state, allowing users to add items to the list.

## Bonus Task

### Filter Completed and Incomplete Todos

- Added functionality to filter the displayed todos to show only completed, only incomplete, or all todos.
- **Expected Output:** A set of buttons to filter todos, and the list updates accordingly based on the selected filter.

## Enhancements

- **Due Dates and Priorities:** Allow users to set due dates and assign priority levels (e.g., Low, Medium, High).
- **Task Categories/Tags:** Enable users to categorize tasks and filter by tags.
- **Search Functionality:** Add a search bar to filter tasks based on content.
- **User Authentication:** Implement user authentication to allow users to create accounts and save their tasks using services like Firebase or Auth0.
- **Dark Mode/Light Mode:** Allow users to toggle between dark mode and light mode for better accessibility.
- **Drag and Drop Functionality:** Implement drag-and-drop to reorder tasks.
- **Task Completion Statistics:** Show statistics like the number of completed tasks, pending tasks, and completion rate.

## Final Output

A fully functional Todo List application that enables users to add, remove, and mark todos as completed, with state persistence through local storage and filtering options.

---
