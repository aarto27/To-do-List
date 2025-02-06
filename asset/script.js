// Todo App 
let todoList = document.querySelector("#list");
let todoInput = document.querySelector("#todo");
let todoBtn = document.querySelector(".addbtn");

todoBtn.addEventListener("click", function(e) {

    let todoText = todoInput.value;
    
    if (todoText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let newTodo = document.createElement("li");
    
    newTodo.innerText = todoText;

    todoList.appendChild(newTodo);

    todoInput.value = "";
    
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("removebtn");
    newTodo.append(removeBtn);
   
   let img = document.createElement("img");
   img.src = "./asset/photo/circle.png";
   img.classList.add("circle-img");
   newTodo.prepend(img);


   let img1 = document.createElement("img");
   img1.src = "./asset/photo/checkmark.png";
   img1.classList.add("checked-img");
   newTodo.prepend(img1);
   img1.style.display = "none";


   img.addEventListener("click", function(){
    img.style.display = "none";
    img1.style.display = "block";
   });

   img1.addEventListener("click" , function(){
    img.style.display = "block";
    img1.style.display = "none";
   });

    removeBtn.addEventListener("click" , function(){
        newTodo.remove();
    });
});