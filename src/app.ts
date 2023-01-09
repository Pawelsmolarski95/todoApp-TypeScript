interface Task {
    title: string;
    done: boolean;
    categories?: "home"| "sport"| "work"
}

const  categories: string[] = ["home", "sport", "work"]
const tasksArray:  Task[] = [{
    title: "Umyc okna",
    done: false,
    categories: "work"
},
{
    title: "Pozmywać naczynia",
    done: true,
    categories: "sport"
},
{
    title: "Wyjśc z pseem na spacer",
    done: false,
    categories: "home"
}
    
] ;

const taskContainerElments: HTMLElement = document.querySelector(".tasks");
const inputElement : HTMLInputElement = document.querySelector("#input1");
const btn = document.querySelector("button");
const categoriesBox = document.querySelector(".categories");




const renderCategories = () => {
    categories.map((category, index) => {
        const categoryLabel: HTMLElement = document.createElement("label");
        categoryLabel.innerText = category;
        const id: string = `category-${index}`;
        categoryLabel.setAttribute("for",id)
        const categoryInput: HTMLInputElement = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.value = category;
        categoryInput.id = id;
        categoryInput.name = category;
        
        
        categoriesBox.appendChild(categoryLabel)
        categoriesBox.appendChild(categoryInput)
    })
}  

const render = () => {
    taskContainerElments.innerHTML = "";
    tasksArray.forEach((task,index) => {  
        const id: string = `task-${index}`;      
        const taskElement : HTMLElement = document.createElement("li");
        
        if(task.categories) {
            taskElement.classList.add(task.categories)
        }
        
        const labelElements : HTMLElement = document.createElement("label");
        labelElements.innerText = task.title;
        labelElements.setAttribute("for", id);
        
        
        const checkBoxElement : HTMLInputElement = document.createElement("input")
        checkBoxElement.type = "checkbox";
        checkBoxElement.title = task.title;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener("change", () => {
            task.done = !task.done;
        })
        
        taskElement.appendChild(labelElements);
        taskElement.appendChild(checkBoxElement);
        taskContainerElments.appendChild(taskElement);
    })
};

const addTask = (task:Task ) => {
    tasksArray.push(task);
}

btn.addEventListener("click", (e: Event ) => {
    e.preventDefault();
    addTask({title: inputElement.value, done: true,categories:"work"});
    render()
    inputElement.value = "";
})
addTask({title: "zrobic pranie", done: true, categories:"home"})
renderCategories();
render();