## React.js Exercise: Building a Simple Todo List Application

### Objective:
Create a simple Todo List application using React.js. The application should allow users to add, remove, and mark tasks as completed.

### Tasks:

1. **Setup the Project:**
   - Create a new React application using Create React App.
   - Expected Output: A basic React application running in the browser.

2. **Create the Todo Component:**
   - Build a `Todo` component that displays a single todo item with its title and a button to remove it.
   - Expected Output: A component that displays the title of a todo and a button labeled "Remove".

3. **Create the TodoList Component:**
   - Build a `TodoList` component that renders a list of `Todo` components.
   - Expected Output: A list of todo items displayed on the screen (initially empty).

4. **Add Input Field for New Todos:**
   - Implement an input field and a button to add new todos.
   - Expected Output: An input field and a button labeled "Add Todo". When a user types a todo title and clicks "Add Todo", the title should be displayed in the list.

5. **Implement State Management:**
   - Use React's state management to handle the list of todos.
   - Expected Output: The application should maintain a list of todos in the component's state, allowing users to add items to the list.

6. **Add Functionality to Remove Todos:**
   - Implement functionality to remove a todo when the "Remove" button is clicked.
   - Expected Output: Clicking the "Remove" button should remove the respective todo from the list.

7. **Mark Todos as Completed:**
   - Allow users to mark a todo as completed by clicking on the todo item.
   - Expected Output: Clicking on a todo item should toggle its completed state, visually indicating completion (e.g., strikethrough text).

8. **Persisting Todos:**
   - Use local storage to save todos so that they persist between page refreshes.
   - Expected Output: The todos should remain in the list even after refreshing the page.

### Bonus Task:
- **Filter Completed and Incomplete Todos:**
   - Add functionality to filter the displayed todos to show only completed, only incomplete, or all todos.
   - Expected Output: A set of buttons to filter todos, and the list should update accordingly based on the selected filter.

### Enhancements for Your Current Todo Application
- **Due Dates and Priorities:**

   - Allow users to set due dates for each task and assign priority levels (e.g., Low, Medium, High).
   - Implementation: Use a date picker for due dates and a dropdown for priority levels. Sort tasks based on their due dates or priority levels.

- **Task Categories/Tags:**

   - Enable users to categorize tasks into different groups or tag them for better organization.
   - Implementation: Create a tagging system where users can select or create tags for tasks and filter tasks by selected tags.

- **Search Functionality:**

   - Add a search bar to filter tasks based on content.
   - Implementation: Implement an input field that filters tasks as the user types.

- **User Authentication:**

   - Implement user authentication to allow users to create accounts and save their tasks.
   - Implementation: Use a service like Firebase Authentication or Auth0 to manage user login, registration, and session handling.

- **Dark Mode/Light Mode:**

   - Allow users to toggle between dark mode and light mode for better accessibility.
   - Implementation: Use CSS variables or a context to manage theme styles and persist the user’s choice in local storage.

- **Drag and Drop Functionality:**

   - Implement drag-and-drop to reorder tasks within the list.
   - Implementation: Use a library like react-beautiful-dnd or react-dnd to facilitate drag-and-drop interactions.


- **Task Completion Statistics:**

   - Show statistics like the number of completed tasks, pending tasks, and completion rate.
   - Implementation: Calculate and display these metrics at the top of the task list.

### Final Output:
A fully functional Todo List application that allows users to add, remove, and mark todos as completed, with state persistence through local storage and filtering options.