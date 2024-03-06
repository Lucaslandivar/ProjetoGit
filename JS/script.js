// !Selección de los elementos

const listInput = document.getElementById("listInput");
const listBtn = document.getElementById("listBtn");
const list = document.getElementById("lista");


// !Funciones

function addTask() {
    if(listInput.value === ''){
        alert("Você tem que adicionar uma tarefa!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = listInput.value;
        list.appendChild(li);
    }
    listInput.value = "";
}

// !Eventos

listBtn.addEventListener("click", (e) => {
    console.log("hello world!");
    addTask();
});