

//What is local storage?
// --> A key-value storage system built into web-browsers.
//--> Each domain(website) can store up to ~5mb of data.
// --> Accessed via javascript using the {localStorage} object.


//Example:
// Imagine you're making a Task Manager App. When the user adds a task
// like "Buy groceries", you save it like this:


let tasks = ["Buy groceries" , "Read book"];
localStorage.setItem("tasks" , JSON.stringify(tasks));


//to load the saved tasks when the user returns later:
let savedTasks = JSON.parse(localStorage.getItem("tasks"));

//check this file(if contains error)//

