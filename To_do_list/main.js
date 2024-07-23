document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm mr-2 completeTaskButton">Complete</button>
                <button class="btn btn-danger btn-sm deleteTaskButton">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        const completeTaskButton = li.querySelector(".completeTaskButton");
        const deleteTaskButton = li.querySelector(".deleteTaskButton");

        completeTaskButton.addEventListener("click", function() {
            li.querySelector("span").classList.toggle("completed");
        });

        deleteTaskButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });
    }
});
