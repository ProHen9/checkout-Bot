if(localStorage.length > 0){
    return
} else {
  localStorage.setItem("alleTasks", "0")
}
if (localStorage.getItem("alleTasks") == "0") {
    const textTasks = document.getElementById("taskText")
    textTasks.classList.add("no-tasks")
    textTasks.classList.remove("tasks")
} else {
    const textTasks = document.getElementById("taskText")
    textTasks.classList.remove("no-tasks")
    textTasks.classList.add("tasks")
}