// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
document.addEventListener('DOMContentLoaded', function() {
  const taskList = document.getElementById('tasks');

  // Function to create a new task
  function createTask(description, priority, user, duration, dueDate) {
    const newTask = document.createElement('li');
    newTask.textContent = `${description} | Priority: ${priority} | User: ${user} | Duration: ${duration} | Due Date: ${dueDate}`;

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  }

  // Event listener for the form submission
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const description = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority-dropdown').value;
    const user = document.getElementById('user-input').value;
    const duration = document.getElementById('duration-input').value;
    const dueDate = document.getElementById('due-date-input').value;

    // Create a new task with the input values
    createTask(description, priority, user, duration, dueDate);

    // Clear form inputs
    document.getElementById('new-task-description').value = '';
    document.getElementById('user-input').value = '';
    document.getElementById('duration-input').value = '';
    document.getElementById('due-date-input').value = '';
  });
});