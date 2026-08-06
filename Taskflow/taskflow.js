let tasks = [

];

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const taskCounter = document.querySelector("#taskCounter");

// add button
addBtn.addEventListener("click", addTask);

function addTask() {
        const text = taskInput.value;

        if(text.trim() === ""){
                console.log("invalid");
                return;
        }
        console.log(text);


        const task = {
        id:Date.now(),
        text: text,
        completed: false
        };

        tasks.push(task);
        console.log(tasks);
        taskInput.value="";

        renderTasks();

};


function renderTasks(){
        
        console.log("Tasks array:", tasks);
        console.log("Length:", tasks.length);


        taskList.innerHTML= "";
        
        tasks.forEach(function(task){

               console.log("Rendering:", task);
               const taskHTML= `
               <div class="task">
                  <p>${task.text}</p>
               </div>  
            `;


               taskList.innerHTML += taskHTML;
        });
}







        





