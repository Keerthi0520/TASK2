// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("formResponse").textContent = `Thank you, ${name}! We'll get back to you at ${email}.`;
  this.reset(); // Clear the form
});

// To-Do List Functionality
document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("todoInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
  document.getElementById("todoList").appendChild(li);
  taskInput.value = ""; // Clear the input field
});
