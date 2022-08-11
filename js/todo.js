const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos';
const getSavedUserName = localStorage.getItem("userName");

let toDos = [];
//console.log(toDoInput);

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  
  // 선택한 liEl의 localStorage에 있는 id값을 얻으려면,
  // liEl.id 를 통해 id값을 가져올수 있다. 이걸 통해서, 고유 기본키대상 체크가능
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // li.id string으로 찍히는 문제를 해결하기 위해 parseInt속성을 통해 정수형태로 바꿔줌
  // localStorage는 Integer정수타입, el의 id값은 string값으로 인식해 서로 다르게 파악해서, 제거되지않는 문제가 있어 위와같이 바꿔주어야함.
  saveTodo(); // 그후 다시 localStorage에 setItem처리를 해줘서 제거된 값을 제외한 나머지 값을 다시 셋팅해줌.

}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;  
  const btnDel = document.createElement('button');
  btnDel.innerText = "❌"
  btnDel.addEventListener('click', deleteTodo)
  li.appendChild(span);
  li.appendChild(btnDel);
  toDoList.appendChild(li);
}

function handleToDoSubmit (e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  };

  //220811 추가 - validation Check용 (getSavedUserName 값 존재할 경우에만 toDos 등록되도록 변경)
  if(getSavedUserName !== null){
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
  } else {
    alert("사용자 이름을 먼저 입력 후 to-do를 등록 해주세요.")  
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos !== null){
  const parsedToDos = JSON.parse(saveTodos)
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}